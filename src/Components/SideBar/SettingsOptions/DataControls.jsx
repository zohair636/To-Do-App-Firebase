import { sideBarText } from "../../../Global/text";
import DeleteButton from "../../Buttons/Delete/DeleteButton";

const DataControls = () => {
  return (
    <div className="flex justify-between items-center mx-7 my-5">
      <p>{sideBarText.DELETE_ACCOUNT_LABEL}</p>
      <DeleteButton title={sideBarText.DELETE_LABEL} />
    </div>
  );
};

export default DataControls;
