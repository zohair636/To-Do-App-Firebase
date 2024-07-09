import { useContext, useState } from "react";
import { SideBarHelperFunction } from "../../Helper/SideBarHelper/SideBarHelperFunction";
import ProfileImage from "../../assets/My Pic.jpg";
import {
  AppContextGetterProvider,
  AppContextSetterProvider,
} from "../../Context/AppContext";

const Sidebar = () => {
  const [sideBar, setSideBar] = useState([SideBarHelperFunction()]);
  const { getActiveMenu } = useContext(AppContextSetterProvider);
  const { activeMenu } = useContext(AppContextGetterProvider);

  const handleActiveMenu = (active, index) => {
    if (index > 0) {
      getActiveMenu(active);
    }
  };

  const handleCloseSideBar = (index, sideBar) => {
    setSideBar((prev) => {
      const updateSideBar = [...prev];
      updateSideBar[index].isSideBarClosed = !sideBar;
      return updateSideBar;
    });
  };

  return (
    <div
      className={`fixed top-0 bottom-0 left-0 bg-white border border-neutral-200 ${
        sideBar[0]?.isSideBarClosed === true ? "w-fit" : "w-60"
      } m-2 rounded-xl shadow-lg`}
    >
      {sideBar.map((items, index) => {
        return (
          <div key={items?.id}>
            <div className="flex justify-start items-center m-3 mb-5">
              <div className="absolute top-0 right-0 m-3">
                <p
                  className="cursor-pointer"
                  onClick={() =>
                    handleCloseSideBar(index, items?.isSideBarClosed)
                  }
                >
                  {items?.isSideBarClosed === true
                    ? items?.toggle_icons?.open
                    : items?.toggle_icons?.close}
                </p>
              </div>
              <p className="text-neutral-600 font-semibold mt-10 mb-3">
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
                          items?.isSideBarClosed === true
                            ? "justify-center"
                            : "justify-start"
                        } items-center cursor-pointer hover:bg-neutral-100 hover:duration-300 duration-300 p-1 rounded-md`}
                      >
                        <p className="px-2">{dashboard?.icon}</p>
                        {items?.isSideBarClosed === true ? null : (
                          <li className="text-neutral-600 font-semibold px-3">
                            {dashboard?.title}
                          </li>
                        )}
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
                  items?.isSideBarClosed === true
                    ? "justify-center"
                    : "justify-start"
                } items-center cursor-pointer hover:bg-neutral-100 hover:duration-300 duration-300 p-1 m-3 rounded-md absolute inset-0 top-3/4 -mt-12`}
                onClick={() => getActiveMenu(items?.setting?.title)}
              >
                <p className="px-2">{items?.setting?.icon}</p>
                {items?.isSideBarClosed === true ? null : (
                  <p className="text-neutral-600 font-semibold px-3">
                    {items?.setting?.title}
                  </p>
                )}
              </div>
              <div
                className={`flex ${
                  items?.isSideBarClosed === true
                    ? "justify-center"
                    : "justify-start"
                } items-center absolute inset-0 top-3/4 mt-24 m-3`}
              >
                <img
                  src={ProfileImage}
                  alt="image"
                  className="w-10 h-10 rounded-full mx-2"
                />
                {items?.isSideBarClosed === true ? null : (
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-neutral-600 font-semibold px-3">
                        Zohair Ajmal
                      </p>
                      <p className="text-neutral-600 text-xs font-semibold px-3">
                        hafiz.zohair2@gmail.com
                      </p>
                    </div>
                    <div className="absolute right-0 bottom-6 cursor-pointer">
                      <sup>{items?.profile?.icon}</sup>
                    </div>
                  </div>
                )}
              </div>
            </>
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
