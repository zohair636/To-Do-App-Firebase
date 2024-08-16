import { useEffect, useState } from "react";

const useEmailValidation = (userInput, index) => {
  const [checkEmailStrength, setCheckEmailStrength] = useState("");

  useEffect(() => {
    if (
      userInput[index]?.value.includes(".") &&
      userInput[index]?.value.includes("@") &&
      userInput[index]?.value.includes("co", "com")
    ) {
      setCheckEmailStrength("Correct");
    } else {
      setCheckEmailStrength("Wrong");
    }
  }, [userInput, index]);

  return checkEmailStrength;
};

const usePasswordValidation = (userInput, index) => {
  const [checkPasswordStrength, setCheckPasswordStrength] = useState("");
  const minPasswordStrength = 6;
  const medPasswordStrength = 10;
  const maxPasswordStrength = 14;

  useEffect(() => {
    if (userInput[index]?.value.length < minPasswordStrength) {
      setCheckPasswordStrength("Weak Password");
    } else if (
      userInput[index]?.value.length === minPasswordStrength &&
      userInput[index]?.value.length <= medPasswordStrength
    ) {
      setCheckPasswordStrength("Med Password");
    } else if (userInput[index]?.value.length >= maxPasswordStrength) {
      setCheckPasswordStrength("Strong Password");
    }
  }, [
    userInput,
    minPasswordStrength,
    medPasswordStrength,
    maxPasswordStrength,
    index,
  ]);

  return checkPasswordStrength;
};

export { useEmailValidation, usePasswordValidation };
