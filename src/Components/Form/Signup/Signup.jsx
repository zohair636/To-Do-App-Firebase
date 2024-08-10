import { useContext, useEffect, useState } from "react";
import {
  acknowledgeMessagesText,
  firebaseMessagesText,
  signUpText,
} from "../../../Global/text";
import SignUpButton from "../../Buttons/Submit/SignUpButton";
import SignInButton from "../../Buttons/Submit/SignInButton";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { Check, CircleAlert, X } from "lucide-react";
import { iconsColor } from "../../../Global/colors";
import { FormContextSetterProvider } from "../../../Context/FormContext";
import AuthAsset from "../../../assets/auth-asset.png";
import GoogleIcon from "../../../assets/google.png";
import FaceBookIcon from "../../../assets/facebook.png";
import LinkedInIcon from "../../../assets/linkedin.png";
import { v4 as uuidv4 } from "uuid";
import ErrorMessageToaster from "../../Toaster/ErrorMessageToaster";
import SuccessMessageToaster from "../../Toaster/SuccessMessageToaster";
import { SignUpHelperFunction } from "../../../Helper/AuthHelper/AuthHelperFunction";

const Signup = () => {
  const auth = getAuth();
  const minPasswordStrength = 6;
  const medPasswordStrength = 10;
  const maxPasswordStrength = 14;
  const [isLoading, setIsLoading] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [message, setMessage] = useState("");
  const [checkEmailStrength, setCheckEmailStrength] = useState("");
  const [checkPasswordStrength, setCheckPasswordStrength] = useState("");
  const { getActiveForm } = useContext(FormContextSetterProvider);
  const [userInput, setUserInput] = useState(SignUpHelperFunction(setIsPasswordVisible));
  const socialMediaIconsArray = [GoogleIcon, FaceBookIcon, LinkedInIcon];

  const handleChange = (e, index) => {
    const newInput = [...userInput];
    newInput[index].value = e.target.value;
    setUserInput(newInput);
  };

  const handleSubmit = async () => {
    const name = userInput[0].value;
    const email = userInput[1].value;
    const password = userInput[2].value;
    if (!name || !email || !password) {
      setIsValid(true);
      setMessage(acknowledgeMessagesText.EMPTY_FIELD_ERROR);
    }
    try {
      setIsLoading(true);
      await createUserWithEmailAndPassword(auth, email, password);
      setMessage(acknowledgeMessagesText.SUCCESS_OK);
      setTimeout(() => {
        setMessage("");
      }, 2000);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      if (error.code === firebaseMessagesText.EMAIL_ALREADY_IN_USE) {
        setMessage(acknowledgeMessagesText.EXISTING_EMAIL_ERROR);
      }
      if (
        name &&
        email &&
        password &&
        error.code === firebaseMessagesText.INVALID_EMAIL
      ) {
        setMessage(acknowledgeMessagesText.INVALID_EMAIL_ADDRESS_ERROR);
      }
      if (error.code === firebaseMessagesText.WEAK_PASSWORD) {
        setMessage(acknowledgeMessagesText.WEAK_PASSWORD_ERROR);
      }
      setTimeout(() => {
        setMessage("");
      }, 5000);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (
      userInput[1]?.value.includes(".") &&
      userInput[1]?.value.includes("@") &&
      userInput[1]?.value.includes("co", "com")
    ) {
      setCheckEmailStrength("Correct");
    } else {
      setCheckEmailStrength("Wrong");
    }
  }, [userInput]);

  useEffect(() => {
    if (userInput[2]?.value.length < minPasswordStrength) {
      setCheckPasswordStrength("Weak Password");
    } else if (
      userInput[2]?.value.length === minPasswordStrength &&
      userInput[2]?.value.length <= medPasswordStrength
    ) {
      setCheckPasswordStrength("Med Password");
    } else if (userInput[2]?.value.length >= maxPasswordStrength) {
      setCheckPasswordStrength("Strong Password");
    }
  }, [
    userInput,
    minPasswordStrength,
    medPasswordStrength,
    maxPasswordStrength,
  ]);

  return (
    <>
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="grid grid-flow-row grid-cols-12 bg-white shadow-xl rounded-3xl p-5">
          <div className="bg-neutral-50 rounded-3xl col-span-6">
            <img src={AuthAsset} alt="image" className="w-full h-full" />
          </div>
          <div className="col-span-6">
            <div className="flex justify-end items-center gap-4 mb-5">
              <h6 className="text-neutral-400">
                {signUpText.ALREADY_HAVE_AN_ACCOUNT}
              </h6>
              <div className="border-2 border-neutral-200 hover:bg-neutral-50 hover:duration-200 rounded-full p-1 px-5 duration-200">
                <SignInButton
                  textColor={"text-sky-700"}
                  textSize={"text-sm"}
                  submit={() => getActiveForm("Signin")}
                />
              </div>
            </div>
            <div className="flex flex-col justify-center items-start p-5 mx-10">
              <div className="mb-5">
                <h1 className="text-neutral-600 text-3xl text-center font-bold">
                  {signUpText.TITLE}
                </h1>
                <h6 className="text-neutral-400 font-semibold mt-2">
                  {signUpText.SUB_TITLE}
                </h6>
              </div>
              {userInput.map((input, index) => {
                return (
                  <div key={input.id} className="my-2 w-full">
                    <label className="text-neutral-600 font-semibold">
                      {input.label}
                    </label>
                    <div
                      className={`flex justify-between items-center border-2 ${
                        isValid && !input?.value
                          ? "border-red-300"
                          : "border-neutral-200"
                      } px-1 mt-1 rounded-lg duration-300 relative`}
                    >
                      <input
                        value={input.value}
                        onChange={(e) => handleChange(e, index)}
                        placeholder={
                          isValid && !input?.value
                            ? "Required"
                            : input.placeholder
                        }
                        type={
                          input.label === signUpText.PASSWORD_LABEL
                            ? !isPasswordVisible
                              ? "password"
                              : "text"
                            : null
                        }
                        className={`outline-none text-sky-800 w-full p-2 ${
                          isValid && !input?.value
                            ? "placeholder:text-red-500"
                            : null
                        } duration-300`}
                      />
                      {input.label === signUpText.PASSWORD_LABEL && (
                        <p
                          onClick={input.visible}
                          className="mx-2 cursor-pointer"
                        >
                          {isPasswordVisible
                            ? input?.eye_open
                            : input.eye_close}
                        </p>
                      )}
                      {input?.label === signUpText.EMAIL_LABEL &&
                        input?.value && (
                          <div
                            className={`absolute right-4 ${
                              (["Wrong"].includes(checkEmailStrength) &&
                                "bg-red-200") ||
                              (["Correct"].includes(checkEmailStrength) &&
                                "bg-green-200")
                            } flex justify-start items-center mt-1 p-0.5 rounded-full`}
                          >
                            {checkEmailStrength === "Wrong" && (
                              <X
                                size={15}
                                color={iconsColor.DELETE_ICON_COLOR}
                              />
                            )}
                            {checkEmailStrength === "Correct" && (
                              <Check
                                size={15}
                                color={iconsColor.SUCCESS_ICON_COLOR}
                              />
                            )}
                          </div>
                        )}
                      {input?.label === signUpText.PASSWORD_LABEL &&
                        input?.value && (
                          <div
                            className={`absolute right-10 ${
                              (["Weak Password"].includes(
                                checkPasswordStrength
                              ) &&
                                "bg-red-200") ||
                              (["Med Password"].includes(
                                checkPasswordStrength
                              ) &&
                                "bg-yellow-200") ||
                              (["Strong Password"].includes(
                                checkPasswordStrength
                              ) &&
                                "bg-green-200")
                            } flex justify-start items-center mt-1 p-0.5 rounded-full`}
                          >
                            {checkPasswordStrength === "Weak Password" && (
                              <X
                                size={15}
                                color={iconsColor.DELETE_ICON_COLOR}
                              />
                            )}
                            {checkPasswordStrength === "Med Password" && (
                              <CircleAlert
                                size={15}
                                color={iconsColor.ALERT_ICON_COLOR}
                              />
                            )}
                            {checkPasswordStrength === "Strong Password" && (
                              <Check
                                size={15}
                                color={iconsColor.SUCCESS_ICON_COLOR}
                              />
                            )}
                          </div>
                        )}
                    </div>
                  </div>
                );
              })}
              <SignUpButton submit={handleSubmit} isLoading={isLoading} />
              <div className="flex justify-start items-center mt-3 gap-5">
                <p className="text-neutral-400">
                  {signUpText.CREATE_ACCOUNT_WITH}
                </p>
                {socialMediaIconsArray.map((socialMediaIcons) => (
                  <div
                    key={uuidv4()}
                    className="border border-neutral-200 hover:bg-neutral-50 rounded-full p-3 cursor-pointer"
                  >
                    <img
                      src={socialMediaIcons}
                      alt="social media icons"
                      className="w-5 h-5"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {message === acknowledgeMessagesText.EMPTY_FIELD_ERROR && (
        <ErrorMessageToaster title={message} />
      )}
      {message === acknowledgeMessagesText.INVALID_CREDENTIALS_ERROR && (
        <ErrorMessageToaster title={message} />
      )}
      {message === acknowledgeMessagesText.EXISTING_EMAIL_ERROR && (
        <ErrorMessageToaster title={message} />
      )}
      {message === acknowledgeMessagesText.INVALID_EMAIL_ADDRESS_ERROR && (
        <ErrorMessageToaster title={message} />
      )}
      {message === acknowledgeMessagesText.WEAK_PASSWORD_ERROR && (
        <ErrorMessageToaster title={message} />
      )}
      {message === acknowledgeMessagesText.SUCCESS_OK && (
        <SuccessMessageToaster title={message} />
      )}
    </>
  );
};

export default Signup;
