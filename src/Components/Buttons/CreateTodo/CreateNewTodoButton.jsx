import { homeText } from "../../../Global/text";

const CreateNewTodoButton = ({ onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className="bg-sky-700 text-white p-1.5 px-3 rounded-lg"
      >
        {homeText.CREATE_NEW_TODO_LABEL}
      </button>
    </div>
  );
};

export default CreateNewTodoButton;
