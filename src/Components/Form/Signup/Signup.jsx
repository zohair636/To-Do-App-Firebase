import { useState } from "react";
import { signUpText } from "../../../Global/text";
import SignUpButton from "../../Buttons/Submit/SignUpButton";

const Signup = () => {
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

  return (
    <div className="absolute inset-0 flex justify-center items-center">
      <div className="bg-white shadow-lg p-10 rounded-2xl">
        <h1>{signUpText.TITLE}</h1>
      <div>
        {userInput.map((input, index) => {
          return (
            <div key={input.id}>
              <p>{input.label}</p>
              <input
                value={input.value}
                onChange={(e) => handleChange(e, index)}
                placeholder={input.placeholder}
                type={
                  input.label === signUpText.PASSWORD_LABEL
                    ? "password"
                    : "text"
                }
              />
            </div>
          );
        })}
        <SignUpButton />
      </div>
      </div>
    </div>
  );
};

export default Signup;
