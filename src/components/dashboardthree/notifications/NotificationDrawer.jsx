import NotificationItem from "./NotificationItem";
import { notificationsData } from "../notifications/notificationsData";
import"./NotificationDrawer.css";

const NotificationDrawer = ({ show,  onClose }) => {
  if (!show) return null;

  return (
    <>
      {/* Mobile Overlay */}
      <div className="notification-mobile-overlay" onClick={onClose}/>

      <div
        className="
          notification-drawer
          fixed
          right-60
          top-20
          z-[9999]
          w-[320px]
          rounded-[20px]
          border
          border-[#E9EEF5]
          bg-white
          shadow-xl
        "
      >

        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#EEF2F6] p-6 notification-header">

          <h2 className="text-[18px] font-medium text-[#3F434A] notification-title">
            Notifications
          </h2>

          <span className="flex h-[17px] w-[17px] items-center justify-center rounded-full bg-[#FF6B6B] text-xs font-medium text-white notification-count">
            {notificationsData.length}
          </span>

        </div>

        {/* Notification List */}
        <div className="max-h-[420px] overflow-y-auto notification-list">
          {notificationsData.map((item) => (
            <NotificationItem
              key={item.id}
              item={item}
            />
          ))}
        </div>

      </div>
    </>
  );
};

export default NotificationDrawer;