const AuthButton = ({
  submit,
  isLoading,
  textColor,
  textSize,
  btnBg,
  btnMargin,
  title,
}) => {
  return (
    <div className="flex justify-center items-center">
      <button
        onClick={submit}
        className={`${textColor} ${textSize} ${btnBg} ${btnMargin} font-semibold`}
      >
        {isLoading ? "Processing..." : title}
      </button>
    </div>
  );
};

export default AuthButton;
