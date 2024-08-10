// src/hooks/useValidation.js

import { useState } from "react";

export const useValidation = () => {
  const [errors, setErrors] = useState({ email: "", password: "" });

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);
    setErrors((prevErrors) => ({
      ...prevErrors,
      email: isValid ? "" : "Invalid email address",
    }));
    return isValid;
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const isValid = passwordRegex.test(password);
    setErrors((prevErrors) => ({
      ...prevErrors,
      password: isValid ? "" : "Password must be at least 8 characters long, and contain at least one number and one special character",
    }));
    return isValid;
  };

  return { validateEmail, validatePassword, errors };
};
