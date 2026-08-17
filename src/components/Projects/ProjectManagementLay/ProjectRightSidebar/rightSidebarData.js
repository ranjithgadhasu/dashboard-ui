
import FavoriteImage from "../../../../assets/images/FavoriteImage.png";
import BG from "../../../../assets/images/BG.png";
import AvatarFemail from "../../../../assets/images/AvatarFemail.png";
import Total from "../../../../assets/images/Total.png";
import New from "../../../../assets/images/New.png";
import InProgress from "../../../../assets/images/InProgress.png";
import Done from "../../../../assets/images/Done.png";


export const rightSidebarData = {
  /* =========================================
     Profile
  ========================================= */

  profileBg: BG,

  avatar: AvatarFemail,

  name: "Jane Wilson",

  role: "Creative Director",

  /* =========================================
     Statistics
  ========================================= */

  stats: [
    {
      id: 1,
      title: "Total Projects",
      value: 780,
      icon: Total,
    },
    {
      id: 2,
      title: "New Projects",
      value: 136,
      icon: New,
    },
    {
      id: 3,
      title: "In Progress",
      value: 324,
      icon: InProgress,
    },
    {
      id: 4,
      title: "Completed",
      value: 215,
      icon: Done,
    },
  ],

  /* =========================================
     Recent Activity
  ========================================= */

  activities: [
    {
      id: 1,
      date: "12 September",
      avatar: FavoriteImage,
      user: "Priscilla Russell",
      action: "Added new project",
      project: "#443",
      time: "2 min ago",
    },
    {
      id: 2,
      date: "12 September",
      avatar: FavoriteImage,
      user: "Regina Cooper",
      action: "Updated project",
      project: "#488",
      time: "4 min ago",
    },
    {
      id: 3,
      date: "12 September",
      avatar: FavoriteImage,
      user: "Ricardo Black",
      action: "Completed project",
      project: "#389",
      time: "5 min ago",
    },
    {
      id: 4,
      date: "12 September",
      avatar: FavoriteImage,
      user: "Ronald Watson",
      action: "Added new project",
      project: "#442",
      time: "8 min ago",
    },

    {
      id: 5,
      date: "16 September",
      avatar: FavoriteImage,
      user: "Priscilla Russell",
      action: "Added new project",
      project: "#443",
      time: "2 min ago",
    },
    {
      id: 6,
      date: "16 September",
      avatar: FavoriteImage,
      user: "Regina Cooper",
      action: "Updated project",
      project: "#488",
      time: "4 min ago",
    },
    {
      id: 7,
      date: "16 September",
      avatar: FavoriteImage,
      user: "Ricardo Black",
      action: "Completed project",
      project: "#389",
      time: "5 min ago",
    },
    {
      id: 8,
      date: "16 September",
      avatar: FavoriteImage,
      user: "Ronald Watson",
      action: "Added new project",
      project: "#442",
      time: "8 min ago",
    },
  ],
};