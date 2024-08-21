import { buttonText } from "../../../Global/text";

const UpdateTodoButton = ({ onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className="bg-sky-700 text-white p-1 px-3 rounded-lg"
      >
        {buttonText.UPDATE_BUTTON}
      </button>
    </div>
  );
};

export default UpdateTodoButton;
