import { useContext } from "react";
import Menu from "../Components/Menu/Menu";
import Sidebar from "../Components/SideBar/Sidebar";
import { SideBarContextGetterProvider } from "../Context/SideBarContext";

const Home = () => {
  const { activeMenu, isSideBarClosed } = useContext(
    SideBarContextGetterProvider
  );

  return (
    <div className="bg-neutral-50 absolute top-0 bottom-0 left-0 right-0 grid grid-flow-row grid-cols-12">
      <div
        className={`${isSideBarClosed === true ? "col-span-1" : "col-span-2"}`}
      >
        <Sidebar />
      </div>
      <div
        className={`${isSideBarClosed == true ? "col-span-11" : "col-span-10"}`}
      >
        <Menu title={activeMenu} />
      </div>
    </div>
  );
};

export default Home;
