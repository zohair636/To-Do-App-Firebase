import { useState } from "react";
import { SideBarHelperFunction } from "../../Helper/SideBarHelper/SideBarHelperFunction";

const Sidebar = () => {
  const [sideBar, setSideBar] = useState([SideBarHelperFunction()]);
  const [activeMenu, setActiveMenu] = useState("Home");
  const [isHover, setIsHover] = useState(false);

  const handleActiveMenu = (active, index) => {
    if (index > 0) {
      setActiveMenu(active);
    }
  };

  return (
    <div
      className="fixed top-0 bottom-0 left-0 bg-white border border-neutral-200 hover:w-52 m-2 rounded-xl shadow-lg"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {sideBar.map((items) => {
        return (
          <div key={items?.id}>
            <div className="flex justify-start items-center m-3 mb-5">
              <p className="text-neutral-600 font-semibold">
                {items?.app_title?.title}
              </p>
            </div>
            {items?.dashboard.map((dashboard, dashboardIndex) => {
              return (
                <div
                  key={dashboard?.id}
                  className="m-3"
                  onClick={() =>
                    handleActiveMenu(dashboard?.title, dashboardIndex)
                  }
                >
                  {dashboardIndex === 0 ? (
                    <p className="text-neutral-600 text-xs font-semibold uppercase">
                      {dashboard?.title}
                    </p>
                  ) : (
                    <>
                      <div
                        className={`${
                          activeMenu === dashboard?.title
                            ? "absolute mt-1 left-0 border-l-4 border-neutral-600 h-6 rounded-full"
                            : null
                        }`}
                      />
                      <ul
                        className={`flex ${
                          isHover ? "justify-start" : "justify-center"
                        } items-center cursor-pointer hover:bg-neutral-100 hover:duration-300 duration-300 p-1 rounded-md`}
                      >
                        <p className="px-2">{dashboard?.icon}</p>
                        <li className="text-neutral-600 font-semibold px-3">
                          {isHover ? dashboard?.title : null}
                        </li>
                      </ul>
                    </>
                  )}
                </div>
              );
            })}
            <>
              <div
                className={`${
                  activeMenu === items?.setting?.title
                    ? "absolute bottom-20 left-0 border-l-4 border-neutral-600 h-6 rounded-full"
                    : null
                }`}
              />
              <div
                className={`flex ${
                  isHover ? "justify-start" : "justify-center"
                } items-center absolute bottom-16 hover:bg-neutral-100 hover:duration-300 duration-300 p-1 m-3 pr-14 rounded-md cursor-pointer`}
                onClick={() => setActiveMenu(items?.setting?.title)}
              >
                <p className="px-2">{items?.setting?.icon}</p>
                <p className="text-neutral-600 font-semibold px-3">
                  {isHover ? items?.setting?.title : null}
                </p>
              </div>
            </>
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;