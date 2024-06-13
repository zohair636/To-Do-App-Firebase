import { createContext, useState } from "react";
import Navigate from "./Routes/Navigate";

export const UserSetterProvider = createContext();
export const UserGetterProvider = createContext();

const App = () => {
  const [activeForm, setActiveForm] = useState('Signin');

  const getActiveForm = (form) => {
    setActiveForm(form);
  }

  return (
    <UserSetterProvider.Provider value={{getActiveForm}}>
      <UserGetterProvider.Provider value={{activeForm}}>
        <Navigate />
      </UserGetterProvider.Provider>
    </UserSetterProvider.Provider>
  );
};

export default App;
