import { v4 as uuidv4 } from "uuid";
import { signUpText } from "../../Global/text";
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

export { SignUpHelperFunction };
