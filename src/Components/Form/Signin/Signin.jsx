import { useContext, useState } from "react";
import { signinText } from "../../../Global/text";
import { Eye, EyeOff } from "lucide-react";
import { formColors } from "../../../Global/colors";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../../../Global/firebaseConfig";
import SignInButton from "../../Buttons/Submit/SignInButton";
import { UserSetterProvider } from "../../../App";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const auth = getAuth(app);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const { getActiveForm } = useContext(UserSetterProvider);
  const [userInput, setUserInput] = useState([
    {
      id: "1",
      label: signinText.EMAIL_LABEL,
      placeholder: signinText.EMAIL_PLACEHOLDER,
      value: "",
    },
    {
      id: "2",
      label: signinText.PASSWORD_LABEL,
      placeholder: signinText.PASSWORD_PLACEHOLDER,
      value: "",
      eye_open: <Eye size={15} color={formColors.EYE_OPEN_ICON_COLOR} />,
      eye_close: <EyeOff size={15} color={formColors.EYE_CLOSE_ICON_COLOR} />,
      visible: () => setIsPasswordVisible((prev) => !prev),
    },
  ]);

  const handleChange = (e, index) => {
    const updateInput = [...userInput];
    updateInput[index].value = e.target.value;
    setUserInput(updateInput);
  };

  const handleSubmit = async () => {
    const email = userInput[0].value;
    const password = userInput[1].value;
    try {
      setIsLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/Home");
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="absolute inset-0 flex justify-center items-center">
      <div className="bg-white backdrop-blur-md shadow-lg p-10 rounded-2xl">
        <h1 className="text-3xl text-center font-semibold">
          {signinText.TITLE}
        </h1>
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
                    input.label === signinText.PASSWORD_LABEL
                      ? !isPasswordVisible
                        ? "password"
                        : "text"
                      : null
                  }
                  className="outline-none border-b my-2"
                />
                {input.label === signinText.PASSWORD_LABEL && (
                  <p onClick={input.visible} className="cursor-pointer">
                    {isPasswordVisible ? input.eye_close : input.eye_open}
                  </p>
                )}
              </div>
            </div>
          );
        })}
        <SignInButton submit={handleSubmit} isLoading={isLoading} />
        <div className="flex justify-center items-center mt-2">
          <p className="text-neutral-700">
            {signinText.DID_NOT_HAVE_AN_ACCOUNT}
          </p>
          <p
            className="px-2 text-sky-700 cursor-pointer"
            onClick={() => getActiveForm("Signup")}
          >
            {signinText.SIGNUP}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signin;
