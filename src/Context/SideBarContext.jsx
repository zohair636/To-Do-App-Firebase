import { createContext, useState } from "react";

const SideBarContextSetterProvider = createContext();
const SideBarContextGetterProvider = createContext();

const SideBarContext = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState("Home");
  const [sideBarOptionsActiveMenu, setSideBarOptionsActiveMenu] =
    useState("General");
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  const [isSideBarClosed, setIsSideBarClosed] = useState(false);

  return (
    <SideBarContextSetterProvider.Provider
      value={{
        setActiveMenu,
        setSideBarOptionsActiveMenu,
        setIsSettingsModalOpen,
        setIsSideBarClosed,
      }}
    >
      <SideBarContextGetterProvider.Provider
        value={{
          activeMenu,
          sideBarOptionsActiveMenu,
          isSettingsModalOpen,
          isSideBarClosed,
        }}
      >
        {children}
      </SideBarContextGetterProvider.Provider>
    </SideBarContextSetterProvider.Provider>
  );
};

export default SideBarContext;

export { SideBarContextSetterProvider, SideBarContextGetterProvider };
