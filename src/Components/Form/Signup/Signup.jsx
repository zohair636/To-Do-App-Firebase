import { useContext, useState } from "react";
import {
  acknowledgeMessagesText,
  firebaseMessagesText,
  signinText,
  signUpText,
} from "../../../Global/text";
import AuthButton from "../../Buttons/Submit/AuthButton";
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
import {
  useEmailValidation,
  usePasswordValidation,
} from "../../../Hooks/useAuthValidation";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const auth = getAuth();
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [message, setMessage] = useState("");
  const { setActiveForm } = useContext(FormContextSetterProvider);
  const [userInput, setUserInput] = useState(
    SignUpHelperFunction(setIsPasswordVisible)
  );
  const socialMediaIconsArray = [GoogleIcon, FaceBookIcon, LinkedInIcon];
  const emailStrength = useEmailValidation(userInput, 1);
  const passwordStrength = usePasswordValidation(userInput, 2);

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
      navigate('/Home')
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

  const handleEnterButton = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  return (
    <>
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="grid grid-flow-row grid-cols-12 bg-white border-2 border-neutral-100 shadow-xl rounded-3xl p-5 md:w-fit sm:w-10/12 w-11/12">
          <div className="bg-neutral-50 rounded-3xl col-span-6 lg:block hidden">
            <img src={AuthAsset} alt="image" className="xl:w-full xl:h-full w-96 h-96" />
          </div>
          <div className="lg:col-span-6 col-span-12">
            <div className="flex justify-end items-center gap-4 mb-5">
              <h6 className="text-neutral-400 sm:text-base text-sm">
                {signUpText.ALREADY_HAVE_AN_ACCOUNT}
              </h6>
              <div className="border-2 border-neutral-200 hover:bg-neutral-50 hover:duration-200 rounded-full p-1 px-5 duration-200">
                <AuthButton
                  textColor={"text-sky-700"}
                  textSize={"text-sm"}
                  submit={() => setActiveForm("Signin")}
                  title={signinText.SIGNIN_BUTTON_LABEL}
                />
              </div>
            </div>
            <div className="flex flex-col justify-center items-start p-5 sm:mx-10 mx-0">
              <div className="mb-5">
                <h1 className="text-neutral-600 md:text-3xl text-2xl text-center font-bold">
                  {signUpText.TITLE}
                </h1>
                <h6 className="text-neutral-400 md:text-base text-sm font-semibold mt-2">
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
                        onKeyDown={handleEnterButton}
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
                              (["Wrong"].includes(emailStrength) &&
                                "bg-red-200") ||
                              (["Correct"].includes(emailStrength) &&
                                "bg-green-200")
                            } flex justify-start items-center mt-1 p-0.5 rounded-full`}
                          >
                            {emailStrength === "Wrong" && (
                              <X
                                size={15}
                                color={iconsColor.DELETE_ICON_COLOR}
                              />
                            )}
                            {emailStrength === "Correct" && (
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
                              (["Weak Password"].includes(passwordStrength) &&
                                "bg-red-200") ||
                              (["Med Password"].includes(passwordStrength) &&
                                "bg-yellow-200") ||
                              (["Strong Password"].includes(passwordStrength) &&
                                "bg-green-200")
                            } flex justify-start items-center mt-1 p-0.5 rounded-full`}
                          >
                            {passwordStrength === "Weak Password" && (
                              <X
                                size={15}
                                color={iconsColor.DELETE_ICON_COLOR}
                              />
                            )}
                            {passwordStrength === "Med Password" && (
                              <CircleAlert
                                size={15}
                                color={iconsColor.ALERT_ICON_COLOR}
                              />
                            )}
                            {passwordStrength === "Strong Password" && (
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
              <AuthButton
                title={signUpText.SIGNUP_BUTTON_LABEL}
                submit={handleSubmit}
                isLoading={isLoading}
                btnBg={
                  "bg-sky-700 hover:bg-sky-800 hover:duration-200 duration-200"
                }
                textColor={"text-white"}
                btnMargin={"shadow-lg p-3 px-14 mt-5 rounded-full"}
              />
              <div className="sm:flex sm:justify-start sm:items-center grid grid-flow-row grid-cols-12 mt-3 gap-4">
                <div className="sm:col-span-6 col-span-12">
                  <p className="text-neutral-400">
                    {signinText.CREATE_ACCOUNT_WITH}
                  </p>
                </div>
                <div className="flex justify-start items-center sm:col-span-6 col-span-12 gap-4">
                  {socialMediaIconsArray.map((socialMediaIcons) => (
                    <div
                      key={uuidv4()}
                      className="border border-neutral-200 hover:bg-neutral-50 rounded-full p-3 cursor-pointer w-fit"
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
