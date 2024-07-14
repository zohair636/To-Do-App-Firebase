import { useContext, useState } from "react";
import { signUpText } from "../../../Global/text";
import SignUpButton from "../../Buttons/Submit/SignUpButton";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../../../Global/firebaseConfig";
import { Eye, EyeOff } from "lucide-react";
import { formColors } from "../../../Global/colors";
import { FormContextSetterProvider } from "../../../Context/FormContext";

const Signup = () => {
  const auth = getAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
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
      eye_open: <Eye size={15} color={formColors.EYE_ICON_COLOR} />,
      eye_close: <EyeOff size={15} color={formColors.EYE_CLOSE_ICON_COLOR} />,
      visible: () => setIsPasswordVisible((prev) => !prev),
    },
  ]);

  const handleChange = (e, index) => {
    const newInput = [...userInput];
    newInput[index].value = e.target.value;
    setUserInput(newInput);
  };

  const handleSubmit = async () => {
    const email = userInput[1].value;
    const password = userInput[2].value;
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
      <div
        className={`${
          message.includes("Successfully")
            ? "bg-green-100 text-green-700"
            : "bg-red-100 text-red-700"
        } text-center absolute top-0 right-0 mx-10 p-2 rounded-md m-5`}
      >
        <p>{message}</p>
      </div>
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="bg-white backdrop-blur-md shadow-lg p-10 rounded-2xl">
          <h1 className="text-3xl text-center font-semibold">
            {signUpText.TITLE}
          </h1>
          <div>
            {userInput.map((input, index) => {
              return (
                <div key={input.id} className="my-5">
                  <p className="text-base font-semibold">{input.label}</p>
                  <div className="flex justify-between items-center">
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
                      className="outline-none border-b my-2"
                    />
                    {input.label === signUpText.PASSWORD_LABEL && (
                      <p onClick={input.visible} className="cursor-pointer">
                        {isPasswordVisible ? input.eye_close : input.eye_open}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
            <SignUpButton submit={handleSubmit} isLoading={isLoading} />
            <div className="flex justify-center items-center">
              <p className="text-neutral-700">
                {signUpText.ALREADY_HAVE_AN_ACCOUNT}
              </p>
              <p
                className="text-sky-700 px-2 cursor-pointer"
                onClick={() => getActiveForm("Signin")}
              >
                {signUpText.SIGNIN}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
