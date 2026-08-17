// Images
import FavoriteImage from "../../assets/images/FavoriteImage.png";
import TaskImage from "../../assets/images/TaskImage.png"

import AttachmentOne from "../../assets/images/AttachmentOne.png";
import AttachmentTwo from "../../assets/images/AttachmentTwo.png";
import AttachmentThree from "../../assets/images/AttachmentThree.png";

import TaskImageBottom from "../../assets/images/TaskImageBottom.png";

export const taskColumns = [
  {
    id: "todo",
    title: "TODO",
    count: 8,
    color: "#F5B400",
  },
  {
    id: "progress",
    title: "IN PROGRESS",
    count: 5,
    color: "#1CC8EE",
  },
  {
    id: "completed",
    title: "COMPLETED",
    count: 9,
    color: "#32C766",
  },
];

export const taskData = {
  todo: [
    {
      id: 1,
      title: "Brand Logo Design",
      description:
        "Make a redesign of the logo in corporate colors.",

      date: "Jun 17",

      comments: 5,
      attachments: 2,

      progress: 0,

      members: [
        FavoriteImage,
        FavoriteImage,
      ],

      labels: [
        "#46D6B7",
        "#38C172",
      ],
    },

    {
      id: 2,

      title: "New Header Image",

      description: "",

      image: TaskImage,

      date: "Jun 17",

      comments: 3,

      attachments: 1,

      members: [
        FavoriteImage,
      ],

      labels: [
        "#46D6B7",
        "#38C172",
      ],
    },

    {
      id: 3,

      title: "Wireframe for App",

      description:
        "Make a wireframe for an app for a pre-presentation.",

      date: "Jun 17",

      comments: 1,

      attachments: 0,

      members: [
        FavoriteImage,
        FavoriteImage,
      ],

      labels: [
        "#46D6B7",
        "#38C172",
      ],
    },
  ],

  progress: [
    {
      id: 4,

      title: "Updating Modules",

      description:
        "Step-by-step update of modules.",

      date: "Jun 17",

      comments: 5,

      attachments: 2,

      progress: 50,

      subTasks: 4,

      members: [
        FavoriteImage,
        FavoriteImage,
      ],

      labels: [
        "#46D6B7",
        "#38C172",
      ],
    },

    {
      id: 5,

      title: "Template Progress",

      description:
        "Designing cool UI design templates.",

      date: "Jun 17",

      progress: 75,

      subTasks: 4,

      checklist: [
        {
          id: 1,
          title: "Inbox Template",
          completed: true,
        },
        {
          id: 2,
          title: "Chat Template",
          completed: true,
        },
        {
          id: 3,
          title: "Tasks Template",
          completed: true,
        },
        {
          id: 4,
          title: "Projects Template",
          completed: false,
        },
      ],

      comments: 5,

      attachments: 2,

      members: [
        FavoriteImage,
        FavoriteImage,
      ],

      labels: [
        "#46D6B7",
        "#38C172",
      ],
    },
  ],

  completed: [
    {
      id: 6,

      title: "Refresh Photo Slider",

      description: "",

      images: [
        AttachmentOne,
        AttachmentTwo,
        AttachmentThree,
      ],

      date: "Jun 17",

      comments: 2,

      attachments: 3,

      members: [
        FavoriteImage,
        FavoriteImage,
      ],

      labels: [
        "#46D6B7",
        "#38C172",
      ],
    },

    {
      id: 7,

      title: "Server Startup",

      description:
        "Running the server in test mode and configuring.",

      date: "Jun 17",

      comments: 17,

      attachments: 0,

      members: [
        FavoriteImage,
        FavoriteImage,
      ],

      labels: [
        "#46D6B7",
        "#38C172",
      ],
    },

    {
      id: 8,

      title: "New Background",

      image: TaskImageBottom,

      description: "",

      date: "Jun 17",

      comments: 2,

      attachments: 1,

      members: [
        FavoriteImage,
      ],

      labels: [
        "#46D6B7",
        "#38C172",
      ],
    },
  ],
};