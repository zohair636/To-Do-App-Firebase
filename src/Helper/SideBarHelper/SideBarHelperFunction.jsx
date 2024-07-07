import {
  Settings,
  Home,
  GalleryVerticalEnd,
  Users,
  UserRoundPlus,
  CircleUser,
} from "lucide-react";
import { commonText, sideBarText } from "../../Global/text";
import { iconsColor } from "../../Global/colors";

const SideBarHelperFunction = () => ({
  id: crypto.randomUUID(),
  app_title: {
    id: crypto.randomUUID(),
    title: commonText.APP_TITLE,
  },
  dashboard: [
    {
      id: crypto.randomUUID(),
      title: sideBarText.DASHBOARD_LABEL,
    },
    {
      id: crypto.randomUUID(),
      title: sideBarText.HOME_LABEL,
      icon: <Home size={20} color={iconsColor.ACTIVE_ICON_COLOR} />,
    },
    {
      id: crypto.randomUUID(),
      title: sideBarText.HISTORY_LABEL,
      icon: (
        <GalleryVerticalEnd size={20} color={iconsColor.ACTIVE_ICON_COLOR} />
      ),
    },
    {
      id: crypto.randomUUID(),
      title: sideBarText.PARTICIPANTS_LABEL,
      icon: <Users size={20} color={iconsColor.ACTIVE_ICON_COLOR} />,
    },
    {
      id: crypto.randomUUID(),
      title: sideBarText.CREATE_TEAM_LABEL,
      icon: <UserRoundPlus size={20} color={iconsColor.ACTIVE_ICON_COLOR} />,
    },
    {
      id: crypto.randomUUID(),
      title: sideBarText.USER_PROFILE_LABEL,
      icon: <CircleUser size={20} color={iconsColor.ACTIVE_ICON_COLOR} />,
    },
  ],
  setting: {
    id: crypto.randomUUID(),
    title: sideBarText.SETTINGS_LABEL,
    icon: <Settings size={20} color={iconsColor.ACTIVE_ICON_COLOR} />,
  },
});

export { SideBarHelperFunction };