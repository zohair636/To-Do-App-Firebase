import { useContext, useState } from "react";
import { sideBarText } from "../../../Global/text";
import { X } from "lucide-react";
import { iconsColor } from "../../../Global/colors";
import { SideBarHelperFunction } from "../../../Helper/SideBarHelper/SideBarHelperFunction";
import {
  SideBarContextGetterProvider,
  SideBarContextSetterProvider,
} from "../../../Context/SideBarContext";
import GeneralOption from "../../SideBar/SettingsOptions/GeneralOption";
import PersonalizationOption from "../../SideBar/SettingsOptions/PersonalizationOption";
import DataControls from "../../SideBar/SettingsOptions/DataControls";
import ProfileBuilder from "../../SideBar/SettingsOptions/ProfileBuilder";
import "../../../App.css";

const SettingsModalData = ({ onClose }) => {
  const { sideBarOptionsActiveMenu } = useContext(SideBarContextGetterProvider);
  const { setSideBarOptionsActiveMenu } = useContext(
    SideBarContextSetterProvider
  );
  const [settingsOptions, setSettingsOptions] = useState([
    SideBarHelperFunction(),
  ]);

  return (
    <>
      <div className="flex justify-between items-center m-5">
        <h1 className="text-neutral-700 text-xl font-semibold">
          {sideBarText.SETTINGS_LABEL}
        </h1>
        <X
          size={30}
          color={iconsColor.IN_ACTIVE_ICON_COLOR}
          onClick={onClose}
          className="hover:bg-neutral-200 rounded-full cursor-pointer p-1"
        />
      </div>
      <div className="border-b border-neutral-300" />
      <div className="md:grid md:grid-flow-row md:grid-cols-12">
        {settingsOptions.map((items) => {
          return (
            <div
              key={items?.id}
              className="md:col-span-3 col-span-12 justify-start items-center overflow-x-auto no-scrollbar w-full"
            >
              <div className="md:flex-none flex flex-wrap">
              {/* <div className="md:hidden bg-neutral-200/90 absolute inset-[0.65rem] w-[50rem] h-8 -z-10 rounded-lg" /> */}
              {items?.setting?.options.map((option) => {
                return (
                  <div key={option?.id} className="mx-3 mt-3 w-fit">
                    <ul
                      className={`flex justify-start items-center cursor-pointer px-3 p-1 ${
                        sideBarOptionsActiveMenu === option?.title
                          ? "bg-neutral-100 rounded-lg w-fit"
                          : null
                      }`}
                      onClick={() => setSideBarOptionsActiveMenu(option?.title)}
                    >
                      <p>{option?.icon}</p>
                      <li className="text-neutral-600 md:text-base text-sm px-3">
                        {option?.title}
                      </li>
                    </ul>
                  </div>
                );
              })}
            </div>
            </div>
          );
        })}
        <div className="md:col-span-9 col-span-12">
          {sideBarOptionsActiveMenu === sideBarText.GENERAL_LABEL && (
            <GeneralOption />
          )}
          {sideBarOptionsActiveMenu === sideBarText.PERSONALIZATION_LABEL && (
            <PersonalizationOption />
          )}
          {sideBarOptionsActiveMenu === sideBarText.DATA_CONTROL_LABEL && (
            <DataControls />
          )}
          {sideBarOptionsActiveMenu === sideBarText.BUILDER_PROFILE_LABEL && (
            <ProfileBuilder />
          )}
        </div>
      </div>
    </>
  );
};

export default SettingsModalData;
