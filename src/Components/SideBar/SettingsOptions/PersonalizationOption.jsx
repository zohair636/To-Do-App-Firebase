import { Fragment, useState } from "react";
import MyImage from "../../../assets/My Pic.jpg";
import SaveButton from "../../Buttons/Save/SaveButton";
import { SideBarHelperFunction } from "../../../Helper/SideBarHelper/SideBarHelperFunction";
import { sideBarText } from "../../../Global/text";
import { CircleCheck } from "lucide-react";
import { iconsColor } from "../../../Global/colors";

const PersonalizationOption = () => {
  const PersonalizeData = SideBarHelperFunction();
  const [isOptionSelected, setIsOptionSelected] = useState(false);
  const [selectedOption, setSelectedOption] = useState(
    sideBarText.LOW_PRIORITY_LABEL
  );
  const [selectImage, setSelectImage] = useState(null);
  const imageBlob = selectImage ? URL.createObjectURL(selectImage) : MyImage;

  const handleImageSelection = (e) => {
    const file = e.target.files[0];
    setSelectImage(file);
  };

  const handleOptionsSelection = () => {
    setIsOptionSelected((prev) => !prev);
  };

  const handleSelectedOption = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="mx-7 my-5">
      <div className="flex justify-start items-center">
        <img src={imageBlob} alt="image" className="w-24 h-24 rounded-lg" />
        <div className="flex flex-col justify-start items-start mx-10">
          <input
            type="file"
            className="file:bg-neutral-200 file:hover:bg-neutral-300 file:text-neutral-600 file:border-none file:p-1 file:px-3 file:rounded-md file:cursor-pointer mb-7"
            onChange={handleImageSelection}
          />
          <SaveButton />
        </div>
      </div>
      <div className="border-b border-neutral-300 my-4" />
      <div className="my-4">
        {PersonalizeData?.setting?.options?.map((data) => (
          <Fragment key={data?.id}>
            {data?.personalize?.map((items) => (
              <div
                key={items?.id}
                className="flex justify-between items-center"
              >
                <h6 className="text-neutral-600">{items?.title}</h6>
                <div
                  className="flex justify-start items-center hover:bg-neutral-100 rounded-md p-1 px-3 cursor-pointer"
                  onClick={handleOptionsSelection}
                >
                  <h6 className="text-neutral-600">{selectedOption}</h6>
                  <p className="ml-2">
                    {isOptionSelected ? items?.icon_close : items?.icon_open}
                  </p>
                </div>
                <div
                  className={`${
                    isOptionSelected
                      ? "bg-white border shadow-lg rounded-xl p-2"
                      : null
                  } fixed right-7 md:top-56 top-72 mt-7 w-52`}
                >
                  {items?.upcoming_todos?.map((priority) => (
                    <div
                      key={priority?.id}
                      onClick={() => {
                        handleSelectedOption(priority?.title);
                        handleOptionsSelection();
                      }}
                    >
                      {isOptionSelected && (
                        <div className="flex justify-between items-center my-2 hover:bg-neutral-100 rounded-lg p-1 px-3 cursor-pointer">
                          <ul>
                            <li className="text-neutral-600">
                              {priority?.title}
                            </li>
                          </ul>
                          {selectedOption === priority?.title && (
                            <CircleCheck
                              size={15}
                              color={iconsColor.ACTIVE_ICON_COLOR}
                            />
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </Fragment>
        ))}
      </div>
      <div className="border-b border-neutral-300 my-4" />
    </div>
  );
};

export default PersonalizationOption;
