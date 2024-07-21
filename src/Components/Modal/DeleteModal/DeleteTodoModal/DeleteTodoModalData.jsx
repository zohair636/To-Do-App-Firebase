import { TriangleAlert } from "lucide-react";
import { iconsColor } from "../../../../Global/colors";
import CancelButton from "../../../Buttons/Cancel/CancelButton";
import DeleteButton from "../../../Buttons/Delete/DeleteButton";
import { buttonText } from "../../../../Global/text";

const DeleteTodoModalData = ({ onClose, submit }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex justify-center items-center bg-red-100 border-[0.5rem] border-red-50 p-2 rounded-full w-fit">
        <TriangleAlert
          size={30}
          color={iconsColor.DELETE_ICON_COLOR}
          className=""
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-neutral-700 text-xl font-semibold mb-2">Warning!</h1>
        <p className="text-neutral-600">Are you sure you want to delete this todo?</p>
      </div>
      <div className="flex justify-between items-center m-3">
        <CancelButton onClick={onClose} />
        <DeleteButton title={buttonText.DELETE_BUTTON} onClick={submit} />
      </div>
    </div>
  );
};

export default DeleteTodoModalData;
