import FavoriteImage from "../../../../assets/images/FavoriteImage.png";

import ZIP from "../../../../assets/images/ZIP.png";
import PDF from "../../../../assets/images/PDF.png";
import Figma from "../../../../assets/images/Figma.png";
import AttachmentOne from "../../../../assets/images/AttachmentOne.png";
import AttachmentThree from "../../../../assets/images/AttachmentThree.png";

export const rightSidebarData = {
  status: "Started",

  statusOptions: [
    {
      id: 1,
      label: "Started",
      color: "#FFC93C",
    },
    {
      id: 2,
      label: "On Hold",
      color: "#45D3C3",
    },
    {
      id: 3,
      label: "Completed",
      color: "#4CC96C",
    },
  ],

 members: [
  {
    id: 1,
    name: "Jacob Hawkins",
    role: "UI/UX Designer",
    avatar: FavoriteImage,
  },
  {
    id: 2,
    name: "Regina Cooper",
    role: "Back-End Developer",
    avatar: FavoriteImage,
  },
  {
    id: 3,
    name: "Jane Wilson",
    role: "Project Manager",
    avatar: FavoriteImage,
  },
  {
    id: 4,
    name: "Ronald Robertson",
    role: "Product Designer",
    avatar: FavoriteImage,
  },
  {
    id: 5,
    name: "Dustin Williamson",
    role: "Web Developer",
    avatar: FavoriteImage,
  },
  {
    id: 6,
    name: "Robert Edwards",
    role: "Project Manager",
    avatar: FavoriteImage,
  },
],

 files: [
  {
    id: 1,
    icon: ZIP,
    name: "Wireframe UI Kit.zip",
    size: "5.8 MB",
  },
  {
    id: 2,
    icon: PDF,
    name: "Brand Styles Guide.pdf",
    size: "487 KB",
  },
  {
    id: 3,
    icon: Figma,
    name: "Rocket - Admin Dashboard.fig",
    size: "5.8 MB",
  },
  {
    id: 4,
    icon: AttachmentOne,
    name: "Picture 01.png",
    size: "1.2 MB",
  },
  {
    id: 5,
    icon: AttachmentThree,
    name: "Picture 02.png",
    size: "1.5 MB",
  },
]
};