import { Bell, BellDot } from "lucide-react";
import { iconsColor } from "../../Global/colors";
import { useState } from "react";

const SubPageHeader = () => {
  const [isNotificationAvailable, setIsNotificationAvailable] = useState(false);

  return (
    <div className="cursor-pointer">
      {isNotificationAvailable ? (
        <BellDot size={20} color={iconsColor.ACTIVE_ICON_COLOR} />
      ) : (
        <Bell size={20} color={iconsColor.ACTIVE_ICON_COLOR} />
      )}
    </div>
  );
};

export default SubPageHeader;
