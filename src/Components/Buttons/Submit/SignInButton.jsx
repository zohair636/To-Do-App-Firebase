import { signinText } from "../../../Global/text";

const SignInButton = ({ submit, isLoading, textColor, textSize }) => {
  return (
    <div className="flex justify-center items-center">
      <button onClick={submit} className={`${textColor} ${textSize} font-semibold`}>
        {isLoading ? "Loading..." : signinText.SIGNIN_BUTTON_LABEL}
      </button>
    </div>
  );
};

export default SignInButton;
