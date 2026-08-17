import {
  User,
  Mail,
  ClipboardList,
  Settings,
  Lock,
  LogOut,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import ProfileDash from "../../assets/images/ProfileDash.png";

const ProfileDropdown = ({  closeDropdown,
  openMessages }) => {
  const navigate = useNavigate();

  const menuItems = [
    {
      title: "My Profile",
      icon: User,
      path: "/profile",
    },
    {
      title: "My Messages",
      icon: Mail,
      path: "/messages",
    },
    {
      title: "My Tasks",
      icon: ClipboardList,
      path: "/tasks",
    },
    {
      title: "Settings",
      icon: Settings,
      path: "/settings",
    },
    {
      title: "Lock Screen",
      icon: Lock,
      path: "/lock-screen",
    },
    {
      title: "Logout",
      icon: LogOut,
      path: "/login",
    },
  ];

  const handleNavigate = (path) => {
    navigate(path);

    if (closeDropdown) {
      closeDropdown();
    }
  };

  return (
    <div className="absolute right-0 top-14 z-50 w-72 overflow-hidden rounded-2xl border border-[#E9EEF5] bg-white shadow-xl">

      {/* Profile */}

      <div className="border-b border-[#EEF2F6] p-5">
        <div className="flex items-center gap-4">
          <img
            src={ProfileDash}
            alt="Profile"
            className="h-14 w-14 rounded-full object-cover"
          />

          <div>
            <h3 className="text-[18px] font-semibold text-[#3F434A]">
              ArtTemplate
            </h3>

            <p className="text-sm text-[#8A9099]">
              UI Designer
            </p>
          </div>
        </div>
      </div>

      {/* Menu */}

      <div className="py-2">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.title}
              onClick={() => {
  if (item.title === "My Messages") {
    closeDropdown();
    openMessages();
  } else {
    handleNavigate(item.path);
  }
}}
              className="flex w-full items-center gap-4 px-5 py-3 text-left transition hover:bg-[#F5F7FA]"
            >
              <Icon
                size={18}
                className="text-[#8A9099]"
              />

              <span className="text-[15px] font-medium text-[#3F434A]">
                {item.title}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ProfileDropdown;