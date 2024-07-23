import { buttonText, homeText } from "../../../Global/text";

const UpdateTodoButton = ({ onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className="bg-neutral-600 text-white p-1 px-3 rounded-lg"
      >
        {buttonText.UPDATE_BUTTON}
      </button>
    </div>
  );
};

export default UpdateTodoButton;
