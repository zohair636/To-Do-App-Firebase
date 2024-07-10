import { createContext, useState } from "react";

const AppContextSetterProvider = createContext();
const AppContextGetterProvider = createContext();

const AppContext = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState("Home");
  const [sideBarOptionsActiveMenu, setSideBarOptionsActiveMenu] = useState('General')

  const getActiveMenu = (menu) => {
    setActiveMenu(menu);
  };

  const getSideBarOptionsActiveMenu = (optionsMenu) => {
    setSideBarOptionsActiveMenu(optionsMenu);
  }

  return (
    <AppContextSetterProvider.Provider value={{ getActiveMenu, getSideBarOptionsActiveMenu }}>
      <AppContextGetterProvider.Provider value={{ activeMenu, sideBarOptionsActiveMenu }}>
        {children}
      </AppContextGetterProvider.Provider>
    </AppContextSetterProvider.Provider>
  );
};

export default AppContext;

export { AppContextSetterProvider, AppContextGetterProvider };
