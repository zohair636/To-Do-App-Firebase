import { buttonText } from "../../../Global/text";

const SaveButton = ({ onClick }) => {
  return (
    <>
      <button className="bg-neutral-600 hover:bg-neutral-700 text-white p-1 px-5 rounded-md" onClick={onClick}>
        {buttonText.SAVE_BUTTON}
      </button>
    </>
  );
};

export default SaveButton;
