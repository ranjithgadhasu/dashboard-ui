import { useState } from "react";
import { Search } from "lucide-react";
import { BiSolidDownArrow } from "react-icons/bi";

import Notification from "../../assets/icons/Notification.png";
import Menu from "../../assets/icons/Menu.png";
import ProfileDash from "../../assets/images/ProfileDash.png";

import NotificationDrawer from "../dashboardthree/notifications/NotificationDrawer";

const TimelineHeader = ({ setOpen }) => {
  const [openProfile, setOpenProfile] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  return (
    <header
      className="
        sticky
        top-0
        z-40
        h-16
        w-full
        border-b
        border-gray-200
        bg-white
        dashboard-header-mobile
        dashboard-header-mobile-two
        projects-gridpage
      "
    >
      <div
        className="
          flex
          h-full
          items-center
          justify-between
          px-6
          dashboard-header-inner
        "
      >
        {/* Left - Menu */}

        <div className="flex items-center dashboard-header-left">
          <button
            type="button"
            onClick={() => setOpen()}
            aria-label="Open menu"
            className="
    rounded-lg
    p-2
    transition
    hover:bg-gray-100
    dashboard-menu-btn
    contact-header-menu
  "
          >
            <img
              src={Menu}
              alt="Menu"
              className="h-5 w-5 dashboard-menu-icon"
            />
          </button>
        </div>

        {/* Right */}

        <div className="flex items-center gap-6 dashboard-header-right">
          {/* Search */}

          <button
            type="button"
            aria-label="Search"
            className="
              rounded-full
              p-2
              transition
              hover:bg-gray-100
              dashboard-header-icon-btn
            "
          >
            <Search size={20} className="text-gray-600" />
          </button>

          {/* Notification */}

          <button
            type="button"
            aria-label="Notifications"
            onClick={() => setShowNotification((prev) => !prev)}
            className="
              relative
              rounded-full
              p-2
              transition
              hover:bg-gray-100
              dashboard-header-icon-btn
            "
          >
            <img
              src={Notification}
              alt="Notification"
              className="
                h-6
                w-6
                dashboard-notification-icon
              "
            />

            <span
              className="
                absolute
                -right-1
                -top-1
                flex
                h-5
                w-5
                items-center
                justify-center
                rounded-full
                bg-[#FF6B6B]
                text-[10px]
                font-semibold
                text-white
                dashboard-notification-count
              "
            >
              8
            </span>
          </button>

          {/* Divider */}

          <div
            className="
              h-8
              w-px
              bg-gray-200
              dashboard-header-divider
            "
          />

          {/* Profile */}

          <div className="relative dashboard-profile-wrapper">
            <button
              type="button"
              onClick={() => setOpenProfile((prev) => !prev)}
              aria-label="Profile"
              className="
                flex
                items-center
                gap-3
                rounded-full
                px-2
                py-1
                transition
                hover:bg-gray-100
                dashboard-profile-btn
              "
            >
              <img
                src={ProfileDash}
                alt="Profile"
                className="
                  h-10
                  w-10
                  rounded-full
                  object-cover
                  dashboard-profile-image
                "
              />

              <span
                className="
                  hidden
                  font-poppins
                  text-sm
                  font-bold
                  text-gray-800
                  md:block
                  dashboard-profile-name
                "
              >
                ArtTemplate
              </span>

              <BiSolidDownArrow
                size={10}
                className={`
                  hidden
                  text-[#3F434A]
                  transition-transform
                  md:block
                  dashboard-profile-arrow
                  ${openProfile ? "rotate-180" : ""}
                `}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Notification Drawer */}

      <NotificationDrawer
        show={showNotification}
        onClose={() => setShowNotification(false)}
      />
    </header>
  );
};

export default TimelineHeader;
