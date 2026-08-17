import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";

import SidebarItem from "./SidebarItem";
import { sidebarItems } from "./sidebarData";
import LogoOne from "../../../assets/icons/LogoOne.png";
import "./leftsidebar.css"

const LeftSidebar = ({ isOpen, onClose }) => {
  const [active, setActive] = useState(8);
  const navigate = useNavigate();

  return (
    <>
      {/* Mobile Overlay */}
      <div
        className={`left-sidebar-overlay ${
          isOpen ? "left-sidebar-overlay-open" : ""
        }`}
        onClick={onClose}
      />

      <aside
        className={`
          left-sidebar
          w-[84px]
          border-r
          border-[#EEF2F7]
          bg-white
          flex
          flex-col
          items-center
          py-5
          ${isOpen ? "left-sidebar-mobile-open" : ""}
        `}
      >
        {/* Mobile Close Button */}
        <button
          type="button"
          className="left-sidebar-close"
          onClick={onClose}
          aria-label="Close sidebar"
        >
          <X size={20} />
        </button>

        {/* Logo */}
        <img
          onClick={() => navigate("/dashboard-main")}
          src={LogoOne}
          alt="logo"
          className="w-12 h-12 rounded-full cursor-pointer"
        />

        {/* Icons */}
        <div className="mt-3 flex flex-col left-sidebar-icons">
          {sidebarItems.map((item) => (
            <SidebarItem
              key={item.id}
              icon={item.icon}
              active={active === item.id}
              onClick={() => {
                setActive(item.id);
                navigate(item.path);

                // Close only on mobile
                onClose?.();
              }}
            />
          ))}
        </div>
      </aside>
    </>
  );
};

export default LeftSidebar;