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
  LaptopMinimal,
  Moon,
  Sun,
  ChevronDown,
  Facebook,
  Github,
  Linkedin,
  Twitter,
  ChevronUp,
} from "lucide-react";
import { commonText, sideBarText } from "../../Global/text";
import { iconsColor } from "../../Global/colors";

const defaultIconSize = 20;
const profileIconSize = 15;

const defaultIconColor = iconsColor.IN_ACTIVE_ICON_COLOR;

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
      icon: <Home size={defaultIconSize} color={iconsColor.ACTIVE_ICON_COLOR} />,
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
            icon_open: (
              <ChevronDown size={defaultIconSize} color={defaultIconColor} />
            ),
            icon_close: (
              <ChevronUp size={defaultIconSize} color={defaultIconColor} />
            ),
            theme_name: [
              {
                id: crypto.randomUUID(),
                title: sideBarText.SYSTEM_THEME_LABEL,
                icon: (
                  <LaptopMinimal
                    size={defaultIconSize}
                    color={defaultIconColor}
                  />
                ),
              },
              {
                id: crypto.randomUUID(),
                title: sideBarText.DARK_THEME_LABEL,
                icon: <Moon size={defaultIconSize} color={defaultIconColor} />,
              },
              {
                id: crypto.randomUUID(),
                title: sideBarText.LIGHT_THEME_LABEL,
                icon: <Sun size={defaultIconSize} color={defaultIconColor} />,
              },
            ],
          },
        ],
        personalize: [
          {
            id: crypto.randomUUID(),
            title: sideBarText.PRIORITY_LABEL,
            icon_open: (
              <ChevronDown size={defaultIconSize} color={defaultIconColor} />
            ),
            icon_close: (
              <ChevronUp size={defaultIconSize} color={defaultIconColor} />
            ),
            upcoming_todos: [
              {
                id: crypto.randomUUID(),
                title: sideBarText.LOW_PRIORITY_LABEL,
              },
              {
                id: crypto.randomUUID(),
                title: sideBarText.HIGH_PRIORITY_LABEL,
              },
            ],
          },
        ],
        profile_builder: {
          social: [
            {
              id: crypto.randomUUID(),
              title: sideBarText.FACEBOOK_LABEL,
              icon: (
                <Facebook size={defaultIconSize} color={defaultIconColor} />
              ),
            },
            {
              id: crypto.randomUUID(),
              title: sideBarText.LINKEDIN_LABEL,
              icon: (
                <Linkedin size={defaultIconSize} color={defaultIconColor} />
              ),
            },
            {
              id: crypto.randomUUID(),
              title: sideBarText.GITHUB_LABEL,
              icon: <Github size={defaultIconSize} color={defaultIconColor} />,
            },
            {
              id: crypto.randomUUID(),
              title: sideBarText.TWITTER_LABEL,
              icon: <Twitter size={defaultIconSize} color={defaultIconColor} />,
            },
          ],
        },
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
