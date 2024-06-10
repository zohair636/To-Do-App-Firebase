import React from "react";
import { signUpText } from "../../../Global/text";

const SignUpButton = ({ submit }) => {
  return (
    <div>
      <button onClick={submit}>{signUpText.SIGNUP_BUTTON_LABEL}</button>
    </div>
  );
};

export default SignUpButton;
