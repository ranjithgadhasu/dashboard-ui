import DropboxOne from "../../../assets/images/DropboxOne.png";
import DropboxTwo from "../../../assets/images/DropboxTwo.png";
import DropboxThree from "../../../assets/images/DropboxThree.png";
import DropboxFour from "../../../assets/images/DropboxFour.png";
import DropboxFive from "../../../assets/images/DropboxFive.png";
import DropboxSix from "../../../assets/images/DropboxSix.png";
import DropboxSeven from "../../../assets/images/DropboxSeven.png";
import DropboxEight from "../../../assets/images/DropboxEight.png";
import DropboxNine from "../../../assets/images/DropboxNine.png";

import FavoriteImage from "../../../assets/images/FavoriteImage.png";

export const projectTabs = [
  {
    id: "all",
    label: "All",
    count: 151,
    active: true,
  },
  {
    id: "started",
    label: "Started",
    count: 128,
  },
  {
    id: "hold",
    label: "On Hold",
    count: 15,
  },
  {
    id: "completed",
    label: "Completed",
    count: 8,
  },
];

export const projectData = [
  {
    id: 1,
    logo: DropboxOne,
    title: "App Development",
    company: "Dropbox, Inc.",
    description:
      "Create a mobile application on iOS and Android devices.",
    progress: 50,
    dueText: "1 week left",
    dueColor: "default",
    members: [
      FavoriteImage,
      FavoriteImage,
      FavoriteImage,
    ],
  },

  {
    id: 2,
    logo: DropboxTwo,
    title: "Website Redesign",
    company: "GitLab Inc.",
    description:
      "It is necessary to develop a website redesign in a corporate style.",
    progress: 75,
    dueText: "1 week left",
    dueColor: "default",
    members: [
      FavoriteImage,
      FavoriteImage,
      FavoriteImage,
    ],
  },

  {
    id: 3,
    logo: DropboxThree,
    title: "Landing Page",
    company: "Bitbucket, Inc.",
    description:
      "It is necessary to create a landing together with the development of design.",
    progress: 100,
    dueText: "1 week left",
    dueColor: "default",
    members: [
      FavoriteImage,
      FavoriteImage,
    ],
  },

  {
    id: 4,
    logo: DropboxFour,
    title: "Parser Development",
    company: "Driveway, Inc.",
    description:
      "It is necessary to develop a ticket site parser in python.",
    progress: 50,
    dueText: "5 days left",
    dueColor: "warning",
    members: [
      FavoriteImage,
      FavoriteImage,
      FavoriteImage,
    ],
  },

  {
    id: 5,
    logo: DropboxFive,
    title: "App Development",
    company: "Slack Technologies, Inc.",
    description:
      "Create a mobile application on iOS and Android devices.",
    progress: 50,
    dueText: "5 days left",
    dueColor: "warning",
    members: [
      FavoriteImage,
      FavoriteImage,
    ],
  },

  {
    id: 6,
    logo: DropboxSix,
    title: "App Development",
    company: "Google, Inc.",
    description:
      "Create a mobile application on iOS and Android devices.",
    progress: 25,
    dueText: "1 week left",
    dueColor: "default",
    members: [
      FavoriteImage,
      FavoriteImage,
    ],
  },

  {
    id: 7,
    logo: DropboxSeven,
    title: "Admin Dashboard",
    company: "ArtTemplate, Inc.",
    description:
      "Necessary to create Admin Dashboard on Angular 8.",
    progress: 30,
    dueText: "2 weeks left",
    dueColor: "default",
    members: [
      FavoriteImage,
      FavoriteImage,
      FavoriteImage,
    ],
  },

  {
    id: 8,
    logo: DropboxEight,
    title: "Web App on Vue.js",
    company: "ArtTemplate, Inc.",
    description:
      "It is necessary to develop a web app on the framework Vue.js",
    progress: 100,
    dueText: "Completed",
    dueColor: "success",
    members: [
      FavoriteImage,
      FavoriteImage,
    ],
  },

  {
    id: 9,
    logo: DropboxNine,
    title: "App Development",
    company: "Facebook, Inc.",
    description:
      "Create a mobile application on iOS and Android devices.",
    progress: 50,
    dueText: "1 week left",
    dueColor: "default",
    members: [
      FavoriteImage,
      FavoriteImage,
    ],
  },
];