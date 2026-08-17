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

const MyProfileTwoSidebar = () => {
  return (
    <aside className=" fixed left-0 top-0 z-40 h-screen w-[220px] border-r border-[#e5e5e5] bg-white">

      {/* Logo */}

      <div className="flex h-[42px] items-center px-4">

        <span className="text-[8px] font-semibold text-[#333]">
          🌐 FLOWER
        </span>

      </div>


      {/* Search */}

      <div className="px-3">

        <div className="flex h-[22px] items-center gap-1 rounded-[3px] border border-[#eeeeee] px-2">

          <Search
            size={8}
            className="text-[#999]"
          />

          <input
            type="text"
            placeholder="Search anything"
            className="min-w-0 flex-1 bg-transparent text-[6px] outline-none placeholder:text-[#aaa]"
          />

        </div>

      </div>


      {/* Menu */}

      <div className="mt-5 px-3">

        <p className="mb-2 px-2 text-[6px] font-medium uppercase text-[#aaa]">
          Main Menu
        </p>

        <div className="space-y-1">

          {menuItems.map((item) => {

            const Icon = item.icon;

            return (
              <button
                key={item.label}
                type="button"
                className={`flex h-[22px] w-full items-center gap-2 rounded-[3px] px-2 text-left ${
                  item.active
                    ? "bg-[#b8ef92] text-[#214e1e]"
                    : "text-[#666] hover:bg-[#f5f5f5]"
                }`}
              >

                <Icon size={9} />

                <span className="text-[7px]">
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