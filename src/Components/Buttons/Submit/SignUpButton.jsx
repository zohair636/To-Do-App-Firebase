import { signUpText } from "../../../Global/text";

const SignUpButton = ({ submit, isLoading }) => {
  return (
    <div className="flex justify-center items-center mt-5">
      <button
        onClick={submit}
        className="bg-sky-700 hover:bg-sky-800 hover:duration-200 text-white font-semibold shadow-lg p-3 px-14 rounded-full duration-200"
      >
        {isLoading ? "Processing..." : signUpText.SIGNUP_BUTTON_LABEL}
      </button>
    </div>
  );
};

export default SignUpButton;
