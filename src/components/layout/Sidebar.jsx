import { useState } from "react";
import { NavLink } from "react-router-dom";

import HomeIcon from "../../assets/icons/HomeIcon.png";
import ShoppingCartIcon from "../../assets/icons/ShoppingCartIcon.png";
import CalendarIcon from "../../assets/icons/CalendarIcon.png";
import MailIcon from "../../assets/icons/MailIcon.png";
import MessageIcon from "../../assets/icons/MessageIcon.png";
import ClickPadIcon from "../../assets/icons/ClickPad.png";
import CameraIcon from "../../assets/icons/CameraIcon.png";
import FileManagerIcon from "../../assets/icons/FileManger.png";
import NoteBookIcon from "../../assets/icons/NoteBook.png";
import ContactIcon from "../../assets/icons/ContactIcon.png";

import { Search, ChevronRight, ChevronDown, Menu, X } from "lucide-react";

import LogoOne from "../../assets/icons/LogoOne.png";
import "./sidebar.css"

const menuItems = [

  {
    name: "Calendar",
    path: "/calendar",
    icon: CalendarIcon,
  },
  {
    name: "Mail",
    path: "/mail",
    icon: MailIcon,
    badge: 8,
  },
  {
    name: "Chat",
    path: "/chatmail",
    icon: MessageIcon,
  },
  {
    name: "Tasks",
    path: "/tasks",
    icon: ClickPadIcon,
  },
  {
    name: "Projects",
    path: "/projects",
    icon: CameraIcon,
  },
  {
    name: "File Manager",
    path: "/file-manager",
    icon: FileManagerIcon,
  },
  {
    name: "Notes",
    path: "/notes",
    icon: NoteBookIcon,
  },
  {
    name: "Contacts",
    path: "/contacts-layout",
    icon: ContactIcon,
  },
];

export default function Sidebar({ children }) {
  const [open, setOpen] = useState(false);

  const [dashboardOpen, setDashboardOpen] = useState(true);
  const [ecommerceOpen, setEcommerceOpen] = useState(true);

  return (
    <>
      {/* Mobile Button */}

      <button
        onClick={() => setOpen(true)}
        className="fixed left-4 top-4 z-50 rounded-lg bg-white p-2 shadow lg:hidden"
      >
        <Menu size={24} />
      </button>

      {/* Overlay */}

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
        />
      )}

      {/* Sidebar */}

      <aside
        className={`fixed left-0 top-0 z-50 flex h-screen w-72 flex-col border-r border-[#0000000D] bg-white transition-transform duration-300  sidebar
  ${open ? "translate-x-0" : "-translate-x-full"}
  lg:translate-x-0`}
      >
        {/* Mobile Close */}

        <div className="flex justify-end p-4 lg:hidden">
          <button onClick={() => setOpen(false)}>
            <X />
          </button>
        </div>

        {/* Logo */}

        <div className="flex items-center gap-3 px-8 pt-6">
          <img src={LogoOne} alt="" className="h-10 w-10 rounded-full" />

          <h2 className="text-2xl font-semibold text-gray-800">FLOWER</h2>
        </div>

        {/* Search */}

        <div className="px-6 pt-8">
          <div className="flex items-center gap-3 rounded-xl bg-gray-100 px-4 py-3">
            <Search size={18} className="text-gray-500" />

            <input
              type="text"
              placeholder="Search anything"
              className="w-full bg-transparent text-sm outline-none placeholder:text-gray-500"
            />
          </div>
        </div>

        {/* Title */}
        <div className="flex-1 overflow-y-auto">
          <p className="px-8 pb-4 pt-8 text-xs font-semibold uppercase tracking-wider text-gray-400">
            Main Menu
          </p>

          <nav className="space-y-1 px-4">
            {/* Dashboard */}

            <div>
              <button
                onClick={() => setDashboardOpen(!dashboardOpen)}
                className="flex w-full items-center justify-between rounded-xl px-4 py-3 transition hover:bg-gray-100"
              >
                <div className="flex items-center gap-4">
                  <img src={HomeIcon} alt="" className="h-5 w-5" />

                  <span className="font-medium text-gray-700">Dashboard</span>
                </div>

                {dashboardOpen ? (
                  <ChevronDown size={18} />
                ) : (
                  <ChevronRight size={18} />
                )}
              </button>

              {dashboardOpen && (
                <div className="ml-6 mt-2 border-l border-[#E9EEF5] pl-5">
                  <NavLink
                    to="/dashboard-main"
                    className={({ isActive }) =>
                      `mb-1 block rounded-lg px-3 py-2 text-sm transition ${
                        isActive
                          ? "bg-[#B9EB8E] font-semibold text-[#3F434A]"
                          : "text-[#8A9099] hover:bg-[#F5F7FA]"
                      }`
                    }
                  >
                    Dashboard #1
                  </NavLink>

                  <NavLink
                    to="/profile"
                    className={({ isActive }) =>
                      `mb-1 block rounded-lg px-3 py-2 text-sm transition ${
                        isActive
                          ? "bg-[#B9EB8E] font-semibold text-[#3F434A]"
                          : "text-[#8A9099] hover:bg-[#F5F7FA]"
                      }`
                    }
                  >
                    Dashboard #2
                  </NavLink>

                  <NavLink
                    to="/dashboard-three"
                    className={({ isActive }) =>
                      `mb-1 block rounded-lg px-3 py-2 text-sm transition ${
                        isActive
                          ? "bg-[#B9EB8E] font-semibold text-[#3F434A]"
                          : "text-[#8A9099] hover:bg-[#F5F7FA]"
                      }`
                    }
                  >
                    Dashboard #3
                  </NavLink>

                  <NavLink
                    to="/dashboard-four"
                    className={({ isActive }) =>
                      `block rounded-lg px-3 py-2 text-sm transition ${
                        isActive
                          ? "bg-[#B9EB8E] font-semibold text-[#3F434A]"
                          : "text-[#8A9099] hover:bg-[#F5F7FA]"
                      }`
                    }
                  >
                    Dashboard #4
                  </NavLink>
                  <NavLink
                    to="/dashboard-five"
                    className={({ isActive }) =>
                      `block rounded-lg px-3 py-2 text-sm transition ${
                        isActive
                          ? "bg-[#B9EB8E] font-semibold text-[#3F434A]"
                          : "text-[#8A9099] hover:bg-[#F5F7FA]"
                      }`
                    }
                  >
                    Dashboard #5
                  </NavLink>

                  <NavLink
                    to="/dashboard-fivetwo"
                    className={({ isActive }) =>
                      `block rounded-lg px-3 py-2 text-sm transition ${
                        isActive
                          ? "bg-[#B9EB8E] font-semibold text-[#3F434A]"
                          : "text-[#8A9099] hover:bg-[#F5F7FA]"
                      }`
                    }
                  >
                    Dashboard #5v2
                  </NavLink>

                  <NavLink
                    to="/dashboard-six"
                    className={({ isActive }) =>
                      `block rounded-lg px-3 py-2 text-sm transition ${
                        isActive
                          ? "bg-[#B9EB8E] font-semibold text-[#3F434A]"
                          : "text-[#8A9099] hover:bg-[#F5F7FA]"
                      }`
                    }
                  >
                    Dashboard #6
                  </NavLink>
                  <NavLink
                    to="/myprofile-layout"
                    className={({ isActive }) =>
                      `block rounded-lg px-3 py-2 text-sm transition ${
                        isActive
                          ? "bg-[#B9EB8E] font-semibold text-[#3F434A]"
                          : "text-[#8A9099] hover:bg-[#F5F7FA]"
                      }`
                    }
                  >
                    My Profile
                  </NavLink>

                  <NavLink
                    to="/my-profile-timeline"
                    className={({ isActive }) =>
                      `block rounded-lg px-3 py-2 text-sm transition ${
                        isActive
                          ? "bg-[#B9EB8E] font-semibold text-[#3F434A]"
                          : "text-[#8A9099] hover:bg-[#F5F7FA]"
                      }`
                    }
                  >
                    Timeline
                  </NavLink>
                </div>
              )}
            </div>
            {/* E-Commerce */}

            <div>
              <button
                onClick={() => setEcommerceOpen(!ecommerceOpen)}
                className={`flex w-full items-center justify-between rounded-xl px-4 py-3 transition ${
                  ecommerceOpen
                    ? "bg-[#B9EB8E] text-[#3F434A]"
                    : "hover:bg-gray-100 text-[#3F434A]"
                }`}
              >
                <div className="flex items-center gap-4">
                  <img src={ShoppingCartIcon} alt="" className="h-5 w-5" />

                  <span className="font-medium">E-Commerce</span>
                </div>

                {ecommerceOpen ? (
                  <ChevronDown size={18} />
                ) : (
                  <ChevronRight size={18} />
                )}
              </button>

              {ecommerceOpen && (
                <div className="ml-6 mt-2 border-l border-[#E9EEF5] pl-5">
                  <NavLink
                    to="/products"
                    className={({ isActive }) =>
                      `relative mb-1 flex items-center rounded-lg px-4 py-2 text-sm transition ${
                        isActive
                          ? "bg-[#E5F5CF] font-medium text-[#3F434A]"
                          : "text-[#8A9099] hover:bg-[#F5F7FA]"
                      }`
                    }
                  >
                    <span className="mr-3 h-[6px] w-[6px] rounded-full bg-current"></span>
                    Products
                  </NavLink>

                  <NavLink
                    to="/orders"
                    className={({ isActive }) =>
                      `relative mb-1 flex items-center rounded-lg px-4 py-2 text-sm transition ${
                        isActive
                          ? "bg-[#E5F5CF] font-medium text-[#3F434A]"
                          : "text-[#8A9099] hover:bg-[#F5F7FA]"
                      }`
                    }
                  >
                    <span className="mr-3 h-[6px] w-[6px] rounded-full bg-current"></span>
                    Orders
                  </NavLink>

                  <NavLink
                    to="/customers"
                    className={({ isActive }) =>
                      `relative flex items-center rounded-lg px-4 py-2 text-sm transition ${
                        isActive
                          ? "bg-[#E5F5CF] font-medium text-[#3F434A]"
                          : "text-[#8A9099] hover:bg-[#F5F7FA]"
                      }`
                    }
                  >
                    <span className="mr-3 h-[6px] w-[6px] rounded-full bg-current"></span>
                    Customers
                  </NavLink>
                </div>
              )}
            </div>
            {/* Remaining Menu */}

            {menuItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `group flex items-center justify-between rounded-xl px-4 py-3 transition-all duration-300
                ${
                  isActive
                    ? "bg-[#B9EB8E] font-semibold text-gray-900"
                    : "text-gray-700 hover:bg-gray-100"
                }`
                }
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="h-5 w-5 object-contain"
                  />

                  <span>{item.name}</span>
                </div>

                <div className="flex items-center gap-2">
                  {item.badge && (
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                      {item.badge}
                    </span>
                  )}

                  {item.arrow && <ChevronRight size={18} />}
                </div>
              </NavLink>
            ))}
          </nav>
        </div>
        {/* Bottom Section */}
        <div className="border-t border-[#E9EEF5] bg-white">{children}</div>
      </aside>
    </>
  );
}
