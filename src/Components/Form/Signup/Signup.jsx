import { useContext, useState } from "react";
import { signUpText } from "../../../Global/text";
import SignUpButton from "../../Buttons/Submit/SignUpButton";
import SignInButton from "../../Buttons/Submit/SignInButton";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../../../Global/firebaseConfig";
import { Eye, EyeOff } from "lucide-react";
import { formColors } from "../../../Global/colors";
import { FormContextSetterProvider } from "../../../Context/FormContext";
import AuthAsset from "../../../assets/auth-asset.png";
import GoogleIcon from "../../../assets/google.png";
import FaceBookIcon from "../../../assets/facebook.png";
import LinkedInIcon from "../../../assets/linkedin.png";
import { v4 as uuidv4 } from "uuid";

const Signup = () => {
  const auth = getAuth();
  const iconSize = 15;
  const [isLoading, setIsLoading] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [message, setMessage] = useState("");
  const { getActiveForm } = useContext(FormContextSetterProvider);
  const [userInput, setUserInput] = useState([
    {
      id: "1",
      label: signUpText.FULL_NAME_LABEL,
      placeholder: signUpText.FULL_NAME_PLACEHOLDER,
      value: "",
    },
    {
      id: "2",
      label: signUpText.EMAIL_LABEL,
      placeholder: signUpText.EMAIL_PLACEHOLDER,
      value: "",
    },
    {
      id: "3",
      label: signUpText.PASSWORD_LABEL,
      placeholder: signUpText.PASSWORD_PLACEHOLDER,
      value: "",
      eye_open: <Eye size={iconSize} color={formColors.EYE_OPEN_ICON_COLOR} />,
      eye_close: (
        <EyeOff size={iconSize} color={formColors.EYE_CLOSE_ICON_COLOR} />
      ),
      visible: () => setIsPasswordVisible((prev) => !prev),
    },
  ]);
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
    }
    try {
      setIsLoading(true);
      await createUserWithEmailAndPassword(auth, email, password);
      setMessage("Account Created Successfully!");
      setTimeout(() => {
        setMessage("");
      }, 2000);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setMessage("Email already in use!");
      setTimeout(() => {
        setMessage("");
      }, 2000);
    } finally {
      setIsLoading(false);
    }
  };

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
                        isValid ? "border-red-300" : "border-neutral-200"
                      } px-1 mt-1 rounded-lg`}
                    >
                      <input
                        value={input.value}
                        onChange={(e) => handleChange(e, index)}
                        placeholder={input.placeholder}
                        type={
                          input.label === signUpText.PASSWORD_LABEL
                            ? !isPasswordVisible
                              ? "password"
                              : "text"
                            : null
                        }
                        className={`outline-none text-sky-800 w-full p-2 ${
                          isValid ? "placeholder:text-red-500" : null
                        }`}
                      />
                      {input.label === signUpText.PASSWORD_LABEL && (
                        <p
                          onClick={input.visible}
                          className="mx-2 cursor-pointer"
                        >
                          {isPasswordVisible ? input.eye_close : input.eye_open}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
              {/* <p className="text-xs">
                add email and password validation. display cross icon if
                password requirement is not fullfil if fullfill then display a
                tick icon
              </p> */}
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
    </>
  );
};

export default Signup;
