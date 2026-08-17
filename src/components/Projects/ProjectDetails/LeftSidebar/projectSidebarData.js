import FavoriteImage from "../../../../assets/images/FavoriteImage.png";
import DropboxOne from "../../../../assets/images/DropboxOne.png";
import DropboxTwo from "../../../../assets/images/DropboxTwo.png";
import DropboxThree from "../../../../assets/images/DropboxThree.png";
import DropboxFour from "../../../../assets/images/DropboxFour.png";
import DropboxFive from "../../../../assets/images/DropboxFive.png";
import DropboxSix from "../../../../assets/images/DropboxSix.png";
import DropboxSeven from "../../../../assets/images/DropboxSeven.png";
import DropboxEight from "../../../../assets/images/DropboxEight.png";
import DropboxNine from "../../../../assets/images/DropboxNine.png";
import AttachmentFour from "../../../../assets/images/AttachmentFour.png";
import AttachmentFive from "../../../../assets/images/AttachmentFive.png";
import AttachmentSix from "../../../../assets/images/AttachmentSix.png";
//import ZIP from "../../../../assets/images/ZIP.png";
//import PDF from "../../../../assets/images/PDF.png";
//import Figma from "../../../../assets/images/Figma.png";
//import AttachmentOne from "../../../../assets/images/AttachmentOne.png";
//import AttachmentThree from "../../../../assets/images/AttachmentThree.png";


export const projectSidebarData = [
 {
  id: 1,

  logo: DropboxOne,

  title: "App Development",

  company: "Dropbox, Inc.",

  description: "Create a mobile application on iOS and Android devices.",

  budget: "$2,500,000",

  startDate: "12 Jul 2024",

  endDate: "12 Aug 2024",

  checklistCompleted: 2,

  checklist: [
  {
    id: 1,
    title: "Create wireframes",
    completed: true,
  },
  {
    id: 2,
    title: "UI / UX design development",
    completed: true,
  },
  {
    id: 3,
    title: "Layout design",
    completed: true,
  },
  {
    id: 4,
    title: "Functional programming",
    completed: false,
  },
  {
    id: 5,
    title: "Testing for possible errors",
    completed: false,
  },
  {
    id: 6,
    title: "Final debugging applications",
    completed: false,
  },
],

comments: [
  {
    id: 1,
    user: "Jane Wilson",
    avatar: FavoriteImage,
    time: "5 min ago",
    message: "Hi Cody, any progress on the project? 😊",
    images: [],
  },
  {
    id: 2,
    user: "Jacob Hawkins",
    avatar: FavoriteImage,
    time: "1 day ago",
    message:
      'Hi Jane!\nYes. I just finished developing the "Chat" template.',
    images: [
      AttachmentSix,
      AttachmentFour,
      AttachmentFive,
    ],
    extraImages: 3,
  },
  {
    id: 3,
    user: "Regina Cooper",
    avatar: FavoriteImage,
    time: "5 min ago",
    message:
      "Hi Jacob. Will you be able to finish the last item of the task by tomorrow?",
    images: [],
  },
],

  files: [],

  activities: [],

  dueText: "1 week left",

  dueColor: "default",

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
},
  {  id: 2,

    logo: DropboxTwo,

    title: "Website Redesign",

    company: "GitLab Inc.",

    dueText: "1 week left",

    dueColor: "default",

    members: [
      {
        id: 1,
        name: "Jacob Hawkins",
        avatar: FavoriteImage,
      },
      {
        id: 2,
        name: "Regina Cooper",
        avatar: FavoriteImage,
      },
      {
        id: 3,
        name: "Jane Wilson",
        avatar: FavoriteImage,
      },
    ],
  },

  {
    id: 3,

    logo: DropboxThree,

    title: "Landing Page",

    company: "Bitbucket, Inc.",

    dueText: "1 week left",

    dueColor: "default",

    members: [
      {
        id: 1,
        name: "Jacob Hawkins",
        avatar: FavoriteImage,
      },
      {
        id: 2,
        name: "Regina Cooper",
        avatar: FavoriteImage,
      },
    ],
  },

  {
    id: 4,

    logo: DropboxFour,

    title: "Parser Development",

    company: "Driveway, Inc.",

    dueText: "5 days left",

    dueColor: "warning",

    members: [
      {
        id: 1,
        name: "Jacob Hawkins",
        avatar: FavoriteImage,
      },
      {
        id: 2,
        name: "Regina Cooper",
        avatar: FavoriteImage,
      },
      {
        id: 3,
        name: "Jane Wilson",
        avatar: FavoriteImage,
      },
    ],
  },

  {
    id: 5,

    logo: DropboxFive,

    title: "App Development",

    company: "Slack Technologies, Inc.",

    dueText: "5 days left",

    dueColor: "warning",

    members: [
      {
        id: 1,
        name: "Jacob Hawkins",
        avatar: FavoriteImage,
      },
      {
        id: 2,
        name: "Regina Cooper",
        avatar: FavoriteImage,
      },
      {
        id: 3,
        name: "Jane Wilson",
        avatar: FavoriteImage,
      },
    ],
  },

  {
    id: 6,

    logo: DropboxSix,

    title: "App Development",

    company: "Google, Inc.",

    dueText: "1 week left",

    dueColor: "default",

    members: [
      {
        id: 1,
        name: "Jacob Hawkins",
        avatar: FavoriteImage,
      },
      {
        id: 2,
        name: "Regina Cooper",
        avatar: FavoriteImage,
      },
    ],
  },

  {
    id: 7,

    logo: DropboxSeven,

    title: "Admin Dashboard",

    company: "ArtTemplate, Inc.",

    dueText: "1 week left",

    dueColor: "default",

    members: [
      {
        id: 1,
        name: "Jacob Hawkins",
        avatar: FavoriteImage,
      },
      {
        id: 2,
        name: "Regina Cooper",
        avatar: FavoriteImage,
      },
      {
        id: 3,
        name: "Jane Wilson",
        avatar: FavoriteImage,
      },
    ],
  },

  {
    id: 8,

    logo: DropboxEight,

    title: "Web App on Vue.js",

    company: "ArtTemplate, Inc.",

    dueText: "1 week left",

    dueColor: "default",

    members: [
      {
        id: 1,
        name: "Jacob Hawkins",
        avatar: FavoriteImage,
      },
      {
        id: 2,
        name: "Regina Cooper",
        avatar: FavoriteImage,
      },
    ],
  },

  {
    id: 9,

    logo: DropboxNine,

    title: "App Development",

    company: "Facebook, Inc.",

    dueText: "1 week left",

    dueColor: "default",

    members: [
      {
        id: 1,
        name: "Jacob Hawkins",
        avatar: FavoriteImage,
      },
      {
        id: 2,
        name: "Regina Cooper",
        avatar: FavoriteImage,
      },
    ],
  },
];