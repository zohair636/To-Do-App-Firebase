import { sideBarText } from "../../../Global/text";

const AddSocialMediaButton = ({ onClick }) => {
  return (
    <div>
      <button
        className="border border-neutral-200 hover:bg-neutral-200 p-1 px-3 rounded-full"
        onClick={onClick}
      >
        {sideBarText.ADD_LABEL}
      </button>
    </div>
  );
};

export default AddSocialMediaButton;
