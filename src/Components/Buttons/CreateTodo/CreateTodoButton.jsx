import { homeText } from "../../../Global/text";

const CreateTodoButton = ({ onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className="bg-sky-700 text-white p-1 px-3 rounded-lg"
      >
        {homeText.CREATE_NEW_TODO}
      </button>
    </div>
  );
};

export default CreateTodoButton;
