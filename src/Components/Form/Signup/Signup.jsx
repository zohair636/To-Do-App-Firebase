import { useState } from "react";
import { signUpText } from "../../../Global/text";
import SignUpButton from "../../Buttons/Submit/SignUpButton";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../../../Global/firebaseConfig";

const Signup = () => {
  const auth = getAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
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
      setMessage('Email already in use!');
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
          message.includes("Successfully") ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
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
                  <input
                    value={input.value}
                    onChange={(e) => handleChange(e, index)}
                    placeholder={input.placeholder}
                    type={
                      input.label === signUpText.PASSWORD_LABEL
                        ? "password"
                        : "text"
                    }
                    className="outline-none border-b my-2"
                  />
                </div>
              );
            })}
            <SignUpButton submit={handleSubmit} isLoading={isLoading} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
