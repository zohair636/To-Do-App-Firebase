import { useState } from "react";
import { SideBarHelperFunction } from "../../../Helper/SideBarHelper/SideBarHelperFunction";
import { sideBarText } from "../../../Global/text";
import { CircleCheck } from "lucide-react";
import { iconsColor } from "../../../Global/colors";

const GeneralOption = () => {
  const generalOptions = SideBarHelperFunction();
  const [isThemeSelected, setIsThemeSelected] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState(
    sideBarText.SYSTEM_THEME_LABEL
  );

  const handleThemeSelection = () => {
    setIsThemeSelected((prev) => !prev);
  };

  const handleSelectTheme = (theme) => {
    setSelectedTheme(theme);
  };

  return (
    <div className="mx-7 my-5">
      {generalOptions?.setting?.options?.map((option) => {
        return (
          <div key={option?.id}>
            {option?.general?.map((generalOption) => {
              return (
                <div key={generalOption?.id}>
                  {generalOption?.title === sideBarText.THEME_LABEL ? (
                    <div className="flex justify-between items-center">
                      <p>{generalOption?.title}</p>
                      <div
                        className="flex justify-start items-center hover:bg-neutral-100 rounded-md p-1 px-3 cursor-pointer"
                        onClick={handleThemeSelection}
                      >
                        <p className="text-neutral-600 px-1">{selectedTheme}</p>
                        <p>{generalOption?.icon}</p>
                      </div>
                    </div>
                  ) : (
                    <>
                      <p>{generalOption?.title}</p>
                    </>
                  )}
                  <div className="border-b border-neutral-300 my-4" />
                  <div
                    className={`${
                      !isThemeSelected &&
                      generalOption?.title === sideBarText.THEME_LABEL
                        ? "bg-white shadow-lg rounded-xl p-2"
                        : null
                    } fixed right-7 top-1/2 mt-7 w-52`}
                  >
                    {!isThemeSelected &&
                      generalOption?.title === sideBarText.THEME_LABEL &&
                      generalOption?.theme_name?.map((theme) => {
                        return (
                          <div
                            key={theme?.id}
                            className="flex justify-between items-center my-2 hover:bg-neutral-100 rounded-lg p-1 px-3 cursor-pointer"
                            onClick={() => handleSelectTheme(theme?.title)}
                          >
                            <ul className="flex justify-start items-center">
                              <p className="mr-4">{theme?.icon}</p>
                              <li className="text-neutral-600">
                                {theme?.title}
                              </li>
                            </ul>
                            {selectedTheme === theme?.title && (
                              <CircleCheck
                                size={15}
                                color={iconsColor.ACTIVE_ICON_COLOR}
                              />
                            )}
                          </div>
                        );
                      })}
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default GeneralOption;
