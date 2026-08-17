import {
  LayoutGrid,
  ShoppingCart,
  CalendarDays,
  Mail,
  MessageSquare,
  ClipboardList,
  Folder,
  FileText,
  Layers,
} from "lucide-react";

import logo from "../../../../assets/images/logo.png";

const menuItems = [
  { id: 1, icon: LayoutGrid },
  { id: 2, icon: ShoppingCart },
  { id: 3, icon: CalendarDays },
  { id: 4, icon: Mail },
  { id: 5, icon: MessageSquare },
  { id: 6, icon: ClipboardList },
  { id: 7, icon: Layers },
  { id: 8, icon: Folder },
  { id: 9, icon: FileText, active: true }, // Active Menu
];

const Sidebar = () => {
  return (
    <aside className="w-16 h-screen bg-white border-r border-gray-200 flex flex-col items-center py-4 shrink-0">

      {/* Logo */}
      <div className="mb-8">
        <img
          src={logo}
          alt="Logo"
          className="w-9 h-9 rounded-full"
        />
      </div>

      {/* Menu */}
      <nav className="flex flex-col items-center gap-3 flex-1">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 ${
                item.active
                  ? "bg-gray-100 text-[#22C55E]"
                  : "text-gray-500 hover:bg-gray-100 hover:text-[#22C55E]"
              }`}
            >
              <Icon size={18} />
            </button>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;