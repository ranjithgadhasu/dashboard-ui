import {
  LayoutDashboard,
  ListTodo,
  ShoppingCart,
  CalendarDays,
  Mail,
  MessageCircle,
  FolderKanban,
  FileText,
  StickyNote,
  Users,
  Search,
  X,
} from "lucide-react";

const menuItems = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    active: true,
  },
  {
    label: "Tasks",
    icon: ListTodo,
  },
  {
    label: "E-Commerce",
    icon: ShoppingCart,
  },
  {
    label: "Calendar",
    icon: CalendarDays,
  },
  {
    label: "Mail",
    icon: Mail,
  },
  {
    label: "Chat",
    icon: MessageCircle,
  },
  {
    label: "Projects",
    icon: FolderKanban,
  },
  {
    label: "File Manager",
    icon: FileText,
  },
  {
    label: "Notes",
    icon: StickyNote,
  },
  {
    label: "Contacts",
    icon: Users,
  },
];

const MyProfileTwoSidebar = ({ onClose }) => {
  return (
    <aside className="my-profile-two-menu-sidebar">

      {/* Mobile close button */}
      <button
        type="button"
        onClick={onClose}
        className="my-profile-two-sidebar-close"
        aria-label="Close menu"
      >
        <X size={20} />
      </button>

      {/* Logo */}
      <div className="my-profile-two-logo">
        <span>🌐 FLOWER</span>
      </div>

      {/* Search */}
      <div className="my-profile-two-search-wrapper">
        <div className="my-profile-two-search">
          <Search size={12} />

          <input
            type="text"
            placeholder="Search anything"
          />
        </div>
      </div>

      {/* Menu */}
      <div className="my-profile-two-menu">

        <p className="my-profile-two-menu-title">
          Main Menu
        </p>

        <div className="my-profile-two-menu-items">

          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.label}
                type="button"
                className={`my-profile-two-menu-item ${
                  item.active
                    ? "active"
                    : ""
                }`}
              >
                <Icon size={15} />

                <span>
                  {item.label}
                </span>
              </button>
            );
          })}

        </div>
      </div>

    </aside>
  );
};

export default MyProfileTwoSidebar;