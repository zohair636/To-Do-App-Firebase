import { createTodoText } from "../../../Global/text";

const CreateTodoButton = ({ submit }) => {
  return (
    <div className="float-right">
      <button
        className="bg-sky-600 hover:bg-sky-700 text-white p-1.5 rounded-md shadow-md mx-5 my-10"
        onClick={submit}
      >
        {createTodoText.BUTTON_NAME}
      </button>
    </div>
  );
};

export default CreateTodoButton;
