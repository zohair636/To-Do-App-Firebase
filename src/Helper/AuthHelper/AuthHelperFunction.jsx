import { v4 as uuidv4 } from "uuid";
import { forgotPasswordText, signinText, signUpText } from "../../Global/text";
import { Eye, EyeOff } from "lucide-react";
import { formColors } from "../../Global/colors";

const SignUpHelperFunction = (passwordVisible) => {
  const iconSize = 15;
  return [
    {
      id: uuidv4(),
      label: signUpText.FULL_NAME_LABEL,
      placeholder: signUpText.FULL_NAME_PLACEHOLDER,
      value: "",
    },
    {
      id: uuidv4(),
      label: signUpText.EMAIL_LABEL,
      placeholder: signUpText.EMAIL_PLACEHOLDER,
      value: "",
    },
    {
      id: uuidv4(),
      label: signUpText.PASSWORD_LABEL,
      placeholder: signUpText.PASSWORD_PLACEHOLDER,
      value: "",
      eye_open: <Eye size={iconSize} color={formColors.EYE_OPEN_ICON_COLOR} />,
      eye_close: (
        <EyeOff size={iconSize} color={formColors.EYE_CLOSE_ICON_COLOR} />
      ),
      visible: () => passwordVisible((prev) => !prev),
    },
  ];
};

const SignInHelperFunction = (passwordVisible) => {
  const iconSize = 15;
  return [
    {
      id: uuidv4(),
      label: signinText.EMAIL_LABEL,
      placeholder: signUpText.EMAIL_PLACEHOLDER,
      value: "",
    },
    {
      id: uuidv4(),
      label: signinText.PASSWORD_LABEL,
      placeholder: signinText.PASSWORD_PLACEHOLDER,
      value: "",
      eye_open: <Eye size={iconSize} color={formColors.EYE_OPEN_ICON_COLOR} />,
      eye_close: (
        <EyeOff size={iconSize} color={formColors.EYE_CLOSE_ICON_COLOR} />
      ),
      visible: () => passwordVisible((prev) => !prev),
    },
  ];
};

const ForgotPasswordHelperFunction = () => {
  return [
    {
      id: uuidv4(),
      label: forgotPasswordText.EMAIL_LABEL,
      placeholder: forgotPasswordText.EMAIL_PLACEHOLDER,
      value: "",
    },
  ];
};

export {
  SignUpHelperFunction,
  SignInHelperFunction,
  ForgotPasswordHelperFunction,
};
