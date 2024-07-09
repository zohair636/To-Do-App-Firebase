import { createContext, useState } from "react";

const AppContextSetterProvider = createContext();
const AppContextGetterProvider = createContext();

const AppContext = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState("Home");

  const getActiveMenu = (menu) => {
    setActiveMenu(menu);
  };

  return (
    <AppContextSetterProvider.Provider value={{ getActiveMenu }}>
      <AppContextGetterProvider.Provider value={{ activeMenu }}>
        {children}
      </AppContextGetterProvider.Provider>
    </AppContextSetterProvider.Provider>
  );
};

export default AppContext;

export { AppContextSetterProvider, AppContextGetterProvider };
