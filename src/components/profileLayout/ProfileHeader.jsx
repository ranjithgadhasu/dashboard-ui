import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Settings, Search, Bell } from "lucide-react";
import { BiSolidDownArrow } from "react-icons/bi";

import ProfileDash from "../../assets/images/ProfileDash.png";
import ProfileDropdown from "../layout/ProfileDropdown";
import ChatDrawer from "../chat/ChatDrawer";
import "./profileLayout.css"

const ProfileHeader = () => {
  const [openProfile, setOpenProfile] = useState(false);
  const [showChat, setShowChat] = useState(false);

  return (
    <header className="flex h-16 items-center justify-between border-b border-[#E9EEF5] bg-white px-8 profile-header">

      {/* Left */}
      <div className="flex items-center gap-8 profile-header-left">

   <NavLink
  to="/profile"
  end
  className={({ isActive }) =>
    `flex items-center gap-2 rounded-xl px-4 py-2 text-[15px] font-medium transition profile-nav-item ${
      isActive
        ? "bg-[#D8D8D8] text-[#21943A]"
        : "text-[#3F434A] hover:bg-[#F8F9FB]"
    }`
  }
>
  {({ isActive }) => (
    <>
      <Settings
        size={20}
        className={isActive ? "text-[#21943A]" : "text-[#3F434A] settings-icon"}
      />

      <span className="settings-text">Settings</span>
    </>
  )}
</NavLink>

        <NavLink
          to="/profile/activity"
          className={({ isActive }) =>
            `rounded-xl px-4 py-2 text-[15px] font-medium transition profile-nav-item settings-text ${
              isActive
                ? "bg-[#EEF9F1] text-[#21943A]"
                : "text-[#3F434A] hover:bg-[#F8F9FB]"
            }`
          }
        >
          Activity
        </NavLink>

        <NavLink
          to="/profile/users"
          className={({ isActive }) =>
            `rounded-xl px-4 py-2 text-[15px] font-medium transition profile-nav-item settings-text  ${
              isActive
                ? "bg-[#EEF9F1] text-[#21943A]"
                : "text-[#3F434A] hover:bg-[#F8F9FB]"
            }`
          }
        >
          Users
        </NavLink>

      </div>

      {/* Right */}
      <div className="flex items-center gap-6 profile-header-right">

        {/* Search */}
        <button className="rounded-full p-2 transition hover:bg-gray-100 profile-header-icon">
          <Search
            size={20}
            className="text-[#3F434A]"
          />
        </button>

        {/* Notification */}
        <button className="rounded-full p-2 transition hover:bg-gray-100  profile-header-icon">
          <Bell
            size={20}
            className="text-[#3F434A]"
          />
        </button>

        {/* Divider */}
        <div className="h-8 w-px bg-[#E9EEF5] profile-header-divider" />

        {/* Profile */}
        <div className="relative profile-header-profile">

          <button
            onClick={() => setOpenProfile(!openProfile)}
            className="flex items-center gap-3 rounded-full px-2 py-1 transition hover:bg-gray-100 profile-profile-button"
          >
            <img
              src={ProfileDash}
              alt="Profile"
              className="h-10 w-10 rounded-full object-cover profile-avatar"
            />

            <span className="text-[15px] font-semibold text-[#3F434A] profile-name">
              ArtTemplate
            </span>

            <BiSolidDownArrow
              size={10}
              className={`text-[#3F434A] transition-transform duration-300 ${
                openProfile ? "rotate-180" : ""
              }`}
            />
          </button>

      {openProfile && (
  <ProfileDropdown
    closeDropdown={() => setOpenProfile(false)}
    openMessages={() => {
      setOpenProfile(false);
      setShowChat(true);
    }}
  />
)}

        </div>

      </div>
<ChatDrawer
  show={showChat}
  onClose={() => setShowChat(false)}
/>
    </header>
  );
};

export default ProfileHeader;