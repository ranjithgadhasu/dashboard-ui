import { NavLink, useNavigate } from "react-router-dom";
import { X } from "lucide-react";

import Compact from "../../assets/icons/Compact.png";

import Grid from "../../assets/icons/Grid.png";
import ShoppingCartIcon from "../../assets/icons/ShoppingCartIcon.png";
import Calendar from "../../assets/icons/Calendar.png";
import MailIcon from "../../assets/icons/MailIcon.png";
import MessageIcon from "../../assets/icons/MessageIcon.png";
import Project from "../../assets/icons/Project.png";
import Text from "../../assets/icons/Text.png";
import Folder from "../../assets/icons/Folder.png";
import Contacts from "../../assets/icons/Contacts.png";
import Tasks from "../../assets/icons/Tasks.png";

import "./dashboardFiveLayout.css";
import "./dashboardfivesidebar.css";
import "./projects-gridpage-sidebar.css"

const menuItems = [
  {
    path: "/dashboard-five",
    icon: Grid,
  },
  {
    path: "/products",
    icon: ShoppingCartIcon,
  },
  {
    path: "/calendar",
    icon: Calendar,
  },
  {
    path: "/mail",
    icon: MailIcon,
  },
  {
    path: "/chatmail",
    icon: MessageIcon,
  },
  {
    path: "/tasks",
    icon: Tasks,
  },
  {
    path: "/projects",
    icon: Project,
  },
  {
    path: "/file-manager",
    icon: Folder,
  },
  {
    path: "/notes",
    icon: Text,
  },
  {
    path: "/contacts-layout",
    icon: Contacts,
  },
];

const DashboardFiveSidebar = ({ open, setOpen }) => {
  const navigate = useNavigate();

  return (
    <>
      {/* Mobile Overlay */}
      {open && (
        <div
          className="dashboard-five-sidebar-overlay projects-gridpage-sidebar"
          onClick={() => setOpen(false)}
        />
      )}

      <aside
        className={`
          fixed
          left-0
          top-0
          flex
          h-screen
          w-20
          flex-col
          items-center
          border-r
          border-[#EEF2F6]
          bg-white
          dashboard-five-sidebar
          ${open ? "dashboard-five-sidebar-open" : "dashboard-five-sidebar-closed"}
        `}
      >
        {/* Mobile Close Button */}
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="dashboard-five-sidebar-close"
          aria-label="Close sidebar"
        >
          <X size={18} />
        </button>

        {/* Logo */}

        <div className="mt-3 mb-5 dashboard-five-sidebar-logo">
          <img
            src={Compact}
            alt="Logo"
            onClick={() => navigate("/dashboard-main")}
            className="h-12 w-12 rounded-full object-cover cursor-pointer"
          />
        </div>

        {/* Menu */}

        <nav className="flex flex-1 flex-col items-center gap-3 dashboard-five-sidebar-menu">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-200 dashboard-five-sidebar-item
                ${isActive ? "bg-[#F4F5F7]" : "hover:bg-[#F7F8FA]"}`
              }
            >
              <img src={item.icon} alt="" className="h-6 w-6 object-contain" />
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default DashboardFiveSidebar;
