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
    <div className="bg-neutral-50 absolute top-0 bottom-0 left-0 right-0 grid grid-flow-row grid-cols-12">
      <div
        className={`${isSideBarClosed === true ? "col-span-1" : "col-span-2"}`}
      >
        <Sidebar />
      </div>
      <div
        className={`${
          isSideBarClosed == true ? "col-span-11" : "col-span-10"
        } mx-4 m-4`}
      >
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
            <div className="flex justify-between items-center mt-10">
              <div className="flex justify-start items-center">
                <SearchFilter />
                <DateFilter />
              </div>
              <>
                <CreateTodoButton onClick={() => setOpenTodoModal(true)} />
              </>
            </div>
            <div className="grid grid-flow-row grid-cols-12 mt-10">
              <div className="col-span-6">
                <UpcomingTodos />
              </div>
              <div className="col-span-6">
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
        <CreateTodoModalData />
      </CreateTodoModal>
    </div>
  );
};

export default Home;
