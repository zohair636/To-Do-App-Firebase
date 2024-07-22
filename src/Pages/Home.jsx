import { useContext, useState } from "react";
import Menu from "../Components/Menu/Menu";
import Sidebar from "../Components/SideBar/Sidebar";
import { SideBarContextGetterProvider } from "../Context/SideBarContext";
import SubPageHeader from "../Components/Header/SubPageHeader";
import SearchFilter from "../Components/Filters/SearchFilter";
import { sideBarText } from "../Global/text";
import DateFilter from "../Components/Filters/DateFilter";
import CreateTodoButton from "../Components/Buttons/CreateTodo/CreateTodoButton";
import UpcomingTodos from "../Components/Sections/UpcomingTodos";
import UserPerformance from "../Components/Sections/UserPerformance";
import TodosTable from "../Components/Tables/TodosTable";
import CreateTodoModal from "../Components/Modal/TodoModal/CreateTodoModal";
import CreateTodoModalData from "../Components/Modal/TodoModal/CreateTodoModalData";

const Home = () => {
  const { activeMenu, isSideBarClosed } = useContext(
    SideBarContextGetterProvider
  );
  const [openTodoModal, setOpenTodoModal] = useState(false);

  return (
    <div className="bg-neutral-50 absolute top-0 bottom-0 left-0 right-0 flex">
      <div className={`flex-shrink-0 ${isSideBarClosed ? "w-28" : "w-64"}`}>
        <Sidebar />
      </div>
      <div className="flex-grow p-4">
        <div className="flex justify-between items-start">
          {activeMenu === sideBarText.SETTINGS_LABEL ? null : (
            <>
              <Menu title={activeMenu} />
              <SubPageHeader />
            </>
          )}
        </div>
        {activeMenu === sideBarText.HOME_LABEL && (
          <div>
            <div className="flex flex-wrap justify-between items-center mt-10">
              <div className="flex justify-start items-center">
                <SearchFilter />
                <DateFilter />
              </div>
              <div className="mt-2">
                <CreateTodoButton onClick={() => setOpenTodoModal(true)} />
              </div>
            </div>
            <div className="grid grid-flow-row grid-cols-12 lg:gap-1 gap-4 mt-10">
              <div className="md:col-span-6 col-span-12">
                <UpcomingTodos />
              </div>
              <div className="md:col-span-6 col-span-12">
                <UserPerformance />
              </div>
            </div>
            <div className="mt-5">
              <TodosTable />
            </div>
          </div>
        )}
      </div>
      <CreateTodoModal
        visible={openTodoModal}
        onClose={() => setOpenTodoModal(false)}
      >
        <CreateTodoModalData onClose={() => setOpenTodoModal(false)} />
      </CreateTodoModal>
    </div>
  );
};

export default Home;
