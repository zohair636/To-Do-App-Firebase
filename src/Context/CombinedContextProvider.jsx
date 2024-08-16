import FormContext from "./FormContext";
import HomeContext from "./HomeContext";
import SideBarContext from "./SideBarContext";

const CombinedContextProvider = ({ children }) => {
  return (
    <FormContext>
      <SideBarContext>
        <HomeContext>{children}</HomeContext>
      </SideBarContext>
    </FormContext>
  );
};

export default CombinedContextProvider;
