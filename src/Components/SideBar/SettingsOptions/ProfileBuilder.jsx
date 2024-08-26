import { sideBarText } from "../../../Global/text";
import { SideBarHelperFunction } from "../../../Helper/SideBarHelper/SideBarHelperFunction";
import AddSocialMediaButton from "../../Buttons/SocialMedia/AddSocialMediaButton";
import { User, Mail } from "lucide-react";
import { iconsColor } from "../../../Global/colors";
import "../../../App.css";

const ProfileBuilder = () => {
  const profileBuilderData = SideBarHelperFunction();
  const defaultIconSize = 20;

  const defaultIconColor = iconsColor.IN_ACTIVE_ICON_COLOR;

  return (
    <div className="h-96 max-h-80 overflow-y-auto">
      <div className="mx-5 my-7">
        <h6 className="text-neutral-600 text-base font-bold">
          {sideBarText.LINKS_LABEL}
        </h6>
        {profileBuilderData?.setting?.options?.map((items) => {
          return (
            <div key={items?.id}>
              {items?.profile_builder?.social?.map((profile) => {
                return (
                  <div
                    key={profile?.id}
                    className="flex justify-between items-center my-3"
                  >
                    <ul className="flex justify-start items-center">
                      <p>{profile?.icon}</p>
                      <li className="text-neutral-600 px-3">
                        {profile?.title}
                      </li>
                    </ul>
                    <div>
                      <AddSocialMediaButton />
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
        <hr />
        <div className="my-3">
          <h6 className="text-neutral-600 text-base font-bold">
            {sideBarText.PROFILE_LABEL}
          </h6>
          <div className="flex justify-start items-center mt-3">
            <User size={defaultIconSize} color={defaultIconColor} />
            <p className="text-neutral-600 px-3">Zohair Ajmal</p>
          </div>
          <div className="flex justify-start items-center mt-3">
            <Mail size={defaultIconSize} color={defaultIconColor} />
            <p className="text-neutral-600 px-3">hafiz.zohair2@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileBuilder;
