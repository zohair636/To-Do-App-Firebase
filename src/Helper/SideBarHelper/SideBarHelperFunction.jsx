import {
  Settings,
  Home,
  GalleryVerticalEnd,
  Users,
  UserRoundPlus,
  EllipsisVertical,
  CircleChevronLeft,
  CircleChevronRight,
  Database,
  BookUser,
  UserCog,
  Stamp,
} from "lucide-react";
import { commonText, sideBarText } from "../../Global/text";
import { iconsColor } from "../../Global/colors";

const defaultIconSize = 20;
const profileIconSize = 15;

const defaultIconColor = iconsColor.ACTIVE_ICON_COLOR;

const SideBarHelperFunction = () => ({
  id: crypto.randomUUID(),
  toggle_icons: {
    close: (
      <CircleChevronLeft size={defaultIconSize} color={defaultIconColor} />
    ),
    open: (
      <CircleChevronRight size={defaultIconSize} color={defaultIconColor} />
    ),
  },
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
      icon: <Home size={defaultIconSize} color={defaultIconColor} />,
    },
    {
      id: crypto.randomUUID(),
      title: sideBarText.HISTORY_LABEL,
      icon: (
        <GalleryVerticalEnd size={defaultIconSize} color={defaultIconColor} />
      ),
    },
    {
      id: crypto.randomUUID(),
      title: sideBarText.PARTICIPANTS_LABEL,
      icon: <Users size={defaultIconSize} color={defaultIconColor} />,
    },
    {
      id: crypto.randomUUID(),
      title: sideBarText.CREATE_TEAM_LABEL,
      icon: <UserRoundPlus size={defaultIconSize} color={defaultIconColor} />,
    },
  ],
  setting: {
    id: crypto.randomUUID(),
    title: sideBarText.SETTINGS_LABEL,
    icon: <Settings size={defaultIconSize} color={defaultIconColor} />,
    options: [
      {
        id: crypto.randomUUID(),
        title: sideBarText.GENERAL_LABEL,
        icon: <UserCog size={defaultIconSize} color={defaultIconColor} />,
        general: [
          {
            id: crypto.randomUUID(),
            title: sideBarText.USER_NAME_LABEL,
          },
          {
            id: crypto.randomUUID(),
            title: sideBarText.USER_EMAIL_LABEL,
          },
          {
            id: crypto.randomUUID(),
            title: sideBarText.THEME_LABEL,
          },
        ],
      },
      {
        id: crypto.randomUUID(),
        title: sideBarText.PERSONALIZATION_LABEL,
        icon: <Stamp size={defaultIconSize} color={defaultIconColor} />,
      },
      {
        id: crypto.randomUUID(),
        title: sideBarText.BUILDER_PROFILE_LABEL,
        icon: <BookUser size={defaultIconSize} color={defaultIconColor} />,
      },
      {
        id: crypto.randomUUID(),
        title: sideBarText.DATA_CONTROL_LABEL,
        icon: <Database size={defaultIconSize} color={defaultIconColor} />,
      },
    ],
  },
  profile: {
    id: crypto.randomUUID(),
    title: sideBarText.USER_PROFILE_LABEL,
    icon: <EllipsisVertical size={profileIconSize} color={defaultIconColor} />,
  },
  isSideBarClosed: false,
});

export { SideBarHelperFunction };
