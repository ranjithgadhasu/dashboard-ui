import {
  LayoutDashboard,
  ListTodo,
  ShoppingCart,
  CalendarDays,
  Mail,
  MessageSquare,
  FolderKanban,
  Folder,
  NotebookPen,
  Users,
  Settings
} from "lucide-react";

const sidebarMenu = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    path: "/"
  },
  {
    title: "Task",
    icon: ListTodo,
    path: "/tasks"
  },
  {
    title: "E-Commerce",
    icon: ShoppingCart,
    path: "/ecommerce"
  },
  {
    title: "Calendar",
    icon: CalendarDays,
    path: "/calendar"
  },
  {
    title: "Mail",
    icon: Mail,
    path: "/mail"
  },
  {
    title: "Chat",
    icon: MessageSquare,
    path: "/chat"
  },
  {
    title: "Projects",
    icon: FolderKanban,
    path: "/projects"
  },
  {
    title: "File Manager",
    icon: Folder,
    path: "/files"
  },
  {
    title: "Notes",
    icon: NotebookPen,
    path: "/notes"
  },
  {
    title: "Contacts",
    icon: Users,
    path: "/contacts"
  },
  {
    title: "Settings",
    icon: Settings,
    path: "/settings"
  }
];

export default sidebarMenu;