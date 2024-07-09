import FormContext from "./FormContext";
import AppContext from "./AppContext";

const CombinedContextProvider = ({ children }) => {
  return (
    <FormContext>
      <AppContext>{children}</AppContext>
    </FormContext>
  );
};

export default CombinedContextProvider;
