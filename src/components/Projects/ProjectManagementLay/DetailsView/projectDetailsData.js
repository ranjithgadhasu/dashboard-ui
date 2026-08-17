import FavoriteImage from "../../../../assets/images/FavoriteImage.png";

import DropboxOne from "../../../../assets/images/DropboxOne.png";

import ZIP from "../../../../assets/images/ZIP.png";
import PDF from "../../../../assets/images/PDF.png";
import Figma from "../../../../assets/images/Figma.png";
import AttachmentOne from "../../../../assets/images/AttachmentOne.png";
import AttachmentThree from "../../../../assets/images/AttachmentThree.png";

export const projectDetailsData = {
  id: 1,

  logo: DropboxOne,

  title: "App Development",

  company: "Dropbox, Inc.",

  status: "Started",

  dueText: "1 week left",

  budget: "$24,500",

  progress: 75,

  startDate: "22 Oct 2024",

  startTime: "10:00 AM",

  endDate: "30 Nov 2024",

  endTime: "06:00 PM",

  description:
    "This project focuses on building a modern mobile application for iOS and Android. The application includes authentication, dashboard, real-time notifications, payment integration, and responsive UI using React and Tailwind CSS.",

  tags: [
    "React",
    "Tailwind CSS",
    "Mobile App",
    "Dashboard",
    "UI/UX",
  ],

  checklist: [
    {
      id: 1,
      title: "Requirement Analysis",
      completed: true,
    },
    {
      id: 2,
      title: "Create Wireframes",
      completed: true,
    },
    {
      id: 3,
      title: "Design UI Screens",
      completed: true,
    },
    {
      id: 4,
      title: "Develop Authentication",
      completed: false,
    },
    {
      id: 5,
      title: "Testing",
      completed: false,
    },
  ],

  comments: [
    {
      id: 1,
      user: "Jacob Hawkins",

      role: "UI Designer",

      avatar: FavoriteImage,

      time: "2 hours ago",

      message:
        "The dashboard UI is almost completed. Remaining pages will be delivered today.",

      likes: 12,
    },

    {
      id: 2,
      user: "Jane Wilson",

      role: "Project Manager",

      avatar: FavoriteImage,

      time: "Yesterday",

      message:
        "Please review the latest design before sending it to the client.",

      likes: 8,
    },
  ],

  members: [
    {
      id: 1,
      name: "Jacob Hawkins",
      role: "UI Designer",
      avatar: FavoriteImage,
    },
    {
      id: 2,
      name: "Jane Wilson",
      role: "Project Manager",
      avatar: FavoriteImage,
    },
    {
      id: 3,
      name: "Regina Cooper",
      role: "Backend Developer",
      avatar: FavoriteImage,
    },
    {
      id: 4,
      name: "Robert Edwards",
      role: "Frontend Developer",
      avatar: FavoriteImage,
    },
    {
      id: 5,
      name: "Ronald Robertson",
      role: "QA Engineer",
      avatar: FavoriteImage,
    },
    {
      id: 6,
      name: "Dustin Williamson",
      role: "DevOps Engineer",
      avatar: FavoriteImage,
    },
  ],

  files: [
    {
      id: 1,
      name: "Wireframe UI Kit.zip",
      size: "5.8 MB",
      icon: ZIP,
    },
    {
      id: 2,
      name: "Brand Style Guide.pdf",
      size: "487 KB",
      icon: PDF,
    },
    {
      id: 3,
      name: "Dashboard Design.fig",
      size: "12 MB",
      icon: Figma,
    },
    {
      id: 4,
      name: "LandingPage.png",
      size: "1.3 MB",
      icon: AttachmentOne,
    },
    {
      id: 5,
      name: "DashboardPreview.png",
      size: "2.5 MB",
      icon: AttachmentThree,
    },
  ],

  activities: [
    {
      id: 1,
      type: "comment",
      title: "Jacob Hawkins commented on Dashboard UI.",
      time: "5 min ago",
    },
    {
      id: 2,
      type: "file",
      title: "Wireframe UI Kit uploaded.",
      time: "1 hour ago",
    },
    {
      id: 3,
      type: "completed",
      title: "Wireframe Design completed.",
      time: "Yesterday",
    },
    {
      id: 4,
      type: "member",
      title: "Robert Edwards joined the project.",
      time: "2 days ago",
    },
  ],
};