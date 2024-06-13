import { signinText } from "../../../Global/text";

const SignInButton = ({ submit, isLoading }) => {
  return (
    <div className="flex justify-center items-center">
      <button onClick={submit}>
        {isLoading ? "Loading..." : signinText.SIGNIN_BUTTON_LABEL}
      </button>
    </div>
  );
};

export default SignInButton;
