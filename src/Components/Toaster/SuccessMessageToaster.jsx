import { CircleCheck } from "lucide-react";
import { iconsColor } from "../../Global/colors";

const SuccessMessageToaster = ({ title }) => {
  return (
    <div className="absolute top-0 right-0 flex justify-start items-center bg-green-50 p-3 px-2 rounded-xl m-8">
      <CircleCheck size={17} color={iconsColor.SUCCESS_ICON_COLOR} />
      <p className="text-green-600 font-semibold px-3">{title}</p>
    </div>
  );
};

export default SuccessMessageToaster;
