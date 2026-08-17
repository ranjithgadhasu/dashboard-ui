import { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { FileText, Menu, X } from "lucide-react";

import LogoOne from "../../../assets/icons/LogoOne.png";
import MailHome from "../../../assets/images/MailHome.png";
import ShoppingCartIcon from "../../../assets/icons/ShoppingCartIcon.png";
import CalendarIcon from "../../../assets/icons/CalendarIcon.png";
import MailBox from "../../../assets/images/MailBox.png";
import MessageIcon from "../../../assets/icons/MessageIcon.png";
import ClickPad from "../../../assets/icons/ClickPad.png";
import MailProjector from "../../../assets/images/MailProjector.png";
import MailPad from "../../../assets/images/MailPad.png";
import Notebook from "../../../assets/images/notebook.png";
import ContactIcon from "../../../assets/icons/ContactIcon.png";
import "./ChatMainSideBarMail.css"

const menuItems = [
  {
    image: MailHome,
    path: "/dashboard-main",
  },
  {
    image: ShoppingCartIcon,
    path: "/products",
  },
  {
    image: CalendarIcon,
    path: "/calendar",
  },
  {
    image: MailBox,
    path: "/mail",
  },
  {
    image: MessageIcon,
    path: "/chatmail",
  },
  {
    image: ClickPad,
    path: "/tasks",
  },
  {
    image: MailProjector,
    path: "/projects",
  },
  {
    icon: FileText,
    path: "/file-manager",
  },
  {
    image: MailPad,
    path: "/notes",
  },
  {
    image: Notebook,
    path: "/orders",
  },
  {
    image: ContactIcon,
    path: "/contacts-layout",
  },
];

const ChatMainSideBarMail = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const isChatOpen =
    location.pathname.startsWith("/chatmail/") &&
    location.pathname !== "/chatmail";

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      {/* =========================================
          MOBILE HAMBURGER
      ========================================= */}

      {!isChatOpen && (
        <button
          type="button"
          onClick={() => setIsSidebarOpen(true)}
          className="fixed left-1 top-4 z-[100] flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow-md md:hidden chat-mobile-menu-button"
        >
          <Menu size={22} className="text-[#525C60]" />
        </button>
      )}

      {/* =========================================
          MOBILE OVERLAY
      ========================================= */}

      {isSidebarOpen && (
        <div
          onClick={closeSidebar}
          className="fixed inset-0 z-[90] bg-black/30 md:hidden chat-mobile-sidebar-overlay"
        />
      )}

      {/* =========================================
          SIDEBAR
      ========================================= */}

      <aside
        className={`
          fixed left-0 top-0 z-[100] h-screen w-[88px]
          border-r border-[#E9EDF5] bg-white
          transition-transform duration-300 ease-in-out
          md:static md:translate-x-0
          ${
            isSidebarOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }
          chat-main-sidebar-mail
        `}
      >
        <div className="flex h-full flex-col items-center py-6">

          {/* =========================================
              MOBILE CLOSE BUTTON
          ========================================= */}

          <button
            type="button"
            onClick={closeSidebar}
            className="absolute left-15 top-1 flex h-8 w-8 items-center justify-center rounded-lg hover:bg-[#F5F7FA] md:hidden chat-mobile-sidebar-close"
          >
            <X size={20} className="text-[#525C60]" />
          </button>

          {/* =========================================
              LOGO
          ========================================= */}

          <img
            onClick={() => {
              navigate("/dashboard-main");
              closeSidebar();
            }}
            src={LogoOne}
            alt="Logo"
            className="mb-3 h-12 w-12 cursor-pointer rounded-full object-contain chat-sidebar-logo"
          />

          {/* =========================================
              MENU
          ========================================= */}

          <nav className="flex flex-1 flex-col gap-3 chat-sidebar-menu">

            {menuItems.map(({ icon: Icon, image, path }) => (
              <NavLink
                key={path}
                to={path}
                onClick={closeSidebar}
                className={({ isActive }) =>
                  `flex h-8 w-14 items-center justify-center rounded-2xl transition-all duration-200 chat-sidebar-menu-item ${
                    isActive
                      ? "bg-[#C9F27B]"
                      : "hover:bg-[#F5F7FA]"
                  }`
                }
              >
                {image ? (
                  <img
                    src={image}
                    alt=""
                    className="h-[20px] w-[20px] object-contain"
                  />
                ) : (
                  <Icon
                    size={22}
                    className="text-[#525C60]"
                  />
                )}
              </NavLink>
            ))}

          </nav>
        </div>
      </aside>
    </>
  );
};

export default ChatMainSideBarMail;