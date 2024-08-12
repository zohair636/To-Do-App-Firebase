import { useEffect, useState } from "react";

const useEmailValidation = (userInput) => {
  const [checkEmailStrength, setCheckEmailStrength] = useState("");

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

  return checkEmailStrength;
};

const usePasswordValidation = (userInput) => {
  const [checkPasswordStrength, setCheckPasswordStrength] = useState("");
  const minPasswordStrength = 6;
  const medPasswordStrength = 10;
  const maxPasswordStrength = 14;

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

  return checkPasswordStrength;
};

export { useEmailValidation, usePasswordValidation };
