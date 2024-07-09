import { createContext, useState } from "react";

const FormContextSetterProvider = createContext();
const FormContextGetterProvider = createContext();

const FormContext = ({ children }) => {
  const [activeForm, setActiveForm] = useState("Signin");

  const getActiveForm = (form) => {
    setActiveForm(form);
  };

  return (
    <FormContextSetterProvider.Provider value={{ getActiveForm }}>
      <FormContextGetterProvider.Provider value={{ activeForm }}>
        {children}
      </FormContextGetterProvider.Provider>
    </FormContextSetterProvider.Provider>
  );
};

export default FormContext;
export { FormContextSetterProvider, FormContextGetterProvider };
