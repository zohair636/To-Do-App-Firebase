import { useContext } from "react";
import Menu from "../Components/Menu/Menu";
import Sidebar from "../Components/SideBar/Sidebar";
import { AppContextGetterProvider } from "../Context/AppContext";

const Home = () => {
  const { activeMenu } = useContext(AppContextGetterProvider);

  return (
    <div className="bg-neutral-50 absolute top-0 bottom-0 left-0 right-0 grid grid-flow-row grid-cols-12">
      <div className="col-span-2">
        <Sidebar />
      </div>
      <div className="col-span-10">
        <Menu title={activeMenu} />
      </div>
    </div>
  );
};

export default Home;
