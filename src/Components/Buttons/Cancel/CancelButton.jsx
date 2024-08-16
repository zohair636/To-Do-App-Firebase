import { homeText } from "../../../Global/text";

const CancelButton = ({ onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className="bg-neutral-200 text-neutral-600 p-1.5 px-3 rounded-lg"
      >
        {homeText.CANCEL_LABEL}
      </button>
    </div>
  );
};

export default CancelButton;
