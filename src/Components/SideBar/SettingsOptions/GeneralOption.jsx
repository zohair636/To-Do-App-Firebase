import { SideBarHelperFunction } from "../../../Helper/SideBarHelper/SideBarHelperFunction";

const GeneralOption = () => {
  const generalOptions = SideBarHelperFunction();
  return (
    <div>
      {generalOptions?.setting?.options?.map((option) => {
        return (
          <div key={option?.id}>
            {option?.general?.map((generalOption) => {
              return (
                <div key={generalOption?.id}>
                  <p>{generalOption?.title}</p>
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
