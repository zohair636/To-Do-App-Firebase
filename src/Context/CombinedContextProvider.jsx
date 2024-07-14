import FormContext from "./FormContext";
import SideBarContext from "./SideBarContext";

const CombinedContextProvider = ({ children }) => {
  return (
    <FormContext>
      <SideBarContext>{children}</SideBarContext>
    </FormContext>
  );
};

export default CombinedContextProvider;
