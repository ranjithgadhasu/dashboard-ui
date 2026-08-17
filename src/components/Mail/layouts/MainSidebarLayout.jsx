import { useState } from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { FileText } from "lucide-react";
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
import "./layout.css";

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
    path: "/myprofile-layout",
  },
  {
    image: Notebook,
    path: "/notes",
  },
  {
    image: ContactIcon,
    path: "/contacts-layout",
  },
];

const MainSidebarLayout = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="main-sidebar-layout flex h-screen bg-[#F8F9FC]">
      {/* Sidebar */}
      <aside
        className={`main-sidebar w-[88px] border-r border-[#E9EDF5] bg-white ${
          isSidebarOpen ? "mobile-sidebar-open" : ""
        }`}
      >
          {/* Mobile close button */}
  <button
    type="button"
    onClick={() => setIsSidebarOpen(false)}
    className="mobile-sidebar-close"
  >
    ✕
  </button>

        <div className="main-sidebar-inner flex h-full flex-col items-center py-6">
          {/* Logo */}
          <img
            onClick={() => navigate("/dashboard-main")}
            src={LogoOne}
            alt="Logo"
            className="main-sidebar-logo mb-3 h-12 w-12 rounded-full object-contain"
          />

          {/* Menu */}
          <nav className="main-sidebar-menu flex flex-1 flex-col gap-3">
            {menuItems.map(({ icon: Icon, image, path }) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `main-sidebar-item flex h-8 w-14 items-center justify-center rounded-2xl transition-all duration-200 ${
                    isActive ? "bg-[#C9F27B]" : "hover:bg-[#F5F7FA]"
                  }`
                }
              >
                {image ? (
                  <img
                    src={image}
                    alt=""
                    className="main-sidebar-icon h-[20px] w-[20px] object-contain"
                  />
                ) : (
                  <Icon
                    size={22}
                    className="main-sidebar-lucide text-[#525C60]"
                  />
                )}
              </NavLink>
            ))}
          </nav>
        </div>
      </aside>

      {/* Page */}
      <main className="main-sidebar-content flex-1 overflow-hidden">
        <Outlet
          context={{
            isSidebarOpen,
            setIsSidebarOpen,
          }}
        />
      </main>
    </div>
  );
};

export default MainSidebarLayout;
