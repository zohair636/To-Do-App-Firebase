import { signUpText } from "../../../Global/text";

const SignUpButton = ({ submit, isLoading }) => {
  return (
    <div className="flex justify-center items-center">
      <button onClick={submit}>
        {isLoading ? "Loading..." : signUpText.SIGNUP_BUTTON_LABEL}
      </button>
    </div>
  );
};

export default SignUpButton;
