import { Ban } from "lucide-react";
import { iconsColor } from "../../Global/colors";

const ErrorMessageToaster = ({ title }) => {
  return (
    <div className="absolute top-0 right-0 flex justify-center items-center bg-white border-b-4 border-red-600 p-3 px-2 rounded-md shadow-lg m-8">
      <Ban size={17} color={iconsColor.DELETE_ICON_COLOR} />
      <p
        className="text-neutral-600 font-semibold px-3"
      >
        {title}
      </p>
    </div>
  );
};

export default ErrorMessageToaster;
