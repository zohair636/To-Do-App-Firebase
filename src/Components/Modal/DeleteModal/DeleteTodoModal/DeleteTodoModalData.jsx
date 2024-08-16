import { CircleAlert } from "lucide-react";
import { iconsColor } from "../../../../Global/colors";
import CancelButton from "../../../Buttons/Cancel/CancelButton";
import DeleteTodoButton from "../../../Buttons/Delete/DeleteTodoButton";

const DeleteTodoModalData = ({ onClose, submit }) => {

  return (
    <>
      <div className="flex justify-center items-center">
        <CircleAlert
          size={60}
          color={iconsColor.DELETE_ICON_COLOR}
          className="bg-red-100 border-[0.4rem] border-red-50 p-2 rounded-full"
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-neutral-700 text-xl font-semibold mb-2">
          Warning!
        </h1>
        <p className="text-neutral-600">
          Are you sure you want to delete this todo?
        </p>
      </div>
      <div className="flex justify-between items-center mt-5">
        <CancelButton onClick={onClose} />
        <DeleteTodoButton onClick={submit} />
      </div>
    </>
  );
};

export default DeleteTodoModalData;
