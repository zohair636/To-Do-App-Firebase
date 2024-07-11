import { useContext, useState } from "react";
import { sideBarText } from "../../../Global/text";
import { X } from "lucide-react";
import { iconsColor } from "../../../Global/colors";
import { SideBarHelperFunction } from "../../../Helper/SideBarHelper/SideBarHelperFunction";
import {
  AppContextGetterProvider,
  AppContextSetterProvider,
} from "../../../Context/AppContext";
import GeneralOption from "../../SideBar/SettingsOptions/GeneralOption";
import PersonalizationOption from "../../SideBar/SettingsOptions/PersonalizationOption";

const SettingsModalData = ({ onClose }) => {
  const { sideBarOptionsActiveMenu } = useContext(AppContextGetterProvider);
  const { getSideBarOptionsActiveMenu } = useContext(AppContextSetterProvider);
  const [settingsOptions, setSettingsOptions] = useState([
    SideBarHelperFunction(),
  ]);

  return (
    <div>
      <div className="flex justify-between items-center m-5">
        <h1 className="text-neutral-700 text-xl font-semibold">
          {sideBarText.SETTINGS_LABEL}
        </h1>
        <X
          size={30}
          color={iconsColor.ACTIVE_ICON_COLOR}
          onClick={onClose}
          className="hover:bg-neutral-200 rounded-full cursor-pointer p-1"
        />
      </div>
      <div className="border-b border-neutral-300" />
      <div className="grid grid-flow-row grid-cols-12">
        {settingsOptions.map((items) => {
          return (
            <div key={items?.id} className="col-span-3">
              {items?.setting?.options.map((option) => {
                return (
                  <div key={option?.id} className="mx-3 my-3">
                    <ul
                      className={`flex justify-start items-center cursor-pointer px-3 p-1 ${
                        sideBarOptionsActiveMenu === option?.title
                          ? "bg-neutral-100 rounded-lg w-fit"
                          : null
                      }`}
                      onClick={() => getSideBarOptionsActiveMenu(option?.title)}
                    >
                      <p>{option?.icon}</p>
                      <li className="text-neutral-600 px-3">{option?.title}</li>
                    </ul>
                  </div>
                );
              })}
            </div>
          );
        })}
        <div className="col-span-9">
          {sideBarOptionsActiveMenu === sideBarText.GENERAL_LABEL && (
            <GeneralOption />
          )}
          {sideBarOptionsActiveMenu === sideBarText.PERSONALIZATION_LABEL && (
            <PersonalizationOption />
          )}
        </div>
      </div>
    </div>
  );
};

export default SettingsModalData;
