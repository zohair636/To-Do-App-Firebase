import { Ban } from "lucide-react";
import { iconsColor } from "../../Global/colors";

const ErrorMessageToaster = ({ title }) => {
  return (
    <div className="absolute top-0 right-0 flex justify-center items-center bg-red-50 p-3 px-2 rounded-xl m-8">
      <Ban size={17} color={iconsColor.DELETE_ICON_COLOR} />
      <p
        className="text-red-600 font-semibold px-3"
      >
        {title}
      </p>
    </div>
  );
};

export default ErrorMessageToaster;
