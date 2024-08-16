import { buttonText } from "../../../Global/text";

const DeleteTodoButton = ({ onClick }) => {
  return (
    <div>
      <button
        className="bg-red-600 hover:bg-red-700 text-white p-1.5 px-4 rounded-lg"
        onClick={onClick}
      >
        {buttonText.DELETE_BUTTON}
      </button>
    </div>
  );
};

export default DeleteTodoButton;
