import FavoriteImage from "../../../assets/images/FavoriteImage.png";
import AttachmentOne from "../../../assets/images/AttachmentOne.png";
import AttachmentTwo from "../../../assets/images/AttachmentTwo.png";

export const chatData = [
  // ===========================
  // Managers Team
  // ===========================
  {
    id: 1,
    type: "team",

    name: "Managers",
    avatar: FavoriteImage,
    unread: 3,

    header: {
      name: "Managers",
      members: 12,
      status: "Online",
    },

    messages: [
      {
        id: 1,
        type: "received",
        avatar: FavoriteImage,
        text: "Hi team, let's discuss today's sprint.",
        time: "09:15 AM",
      },
      {
        id: 2,
        type: "sent",
        avatar: FavoriteImage,
        text: "Sure, I'm ready.",
        time: "09:16 AM",
      },
      {
        id: 3,
        type: "images",
        side: "received",
        avatar: FavoriteImage,
        images: [
          AttachmentOne,
          AttachmentTwo,
        ],
        time: "09:20 AM",
      },
      {
        id: 4,
        type: "file",
        side: "sent",
        avatar: FavoriteImage,
        fileName: "SprintPlan.pdf",
        fileSize: "1.4 MB",
        time: "09:30 AM",
      },
    ],

    profile: {
      avatar: FavoriteImage,
      name: "Managers",
      role: "Management Team",

      info: {
        email: "managers@gmail.com",
        phone: "+1 234 567 890",
        birthday: "17 March, 1995",
        location: "New York, USA",
      },

      files: [
        {
          id: 1,
          name: "SprintPlan.pdf",
          size: "1.4 MB",
        },
        {
          id: 2,
          name: "MeetingNotes.docx",
          size: "820 KB",
        },
      ],

      photos: [
        {
          id: 1,
          image: AttachmentOne,
        },
        {
          id: 2,
          image: AttachmentTwo,
        },
      ],

      members: [
        {
          id: 1,
          name: "Jacob Hawkins",
          role: "UI/UX Designer",
          avatar: FavoriteImage,
          online: true,
        },
        {
          id: 2,
          name: "Regina Cooper",
          role: "Project Manager",
          avatar: FavoriteImage,
          online: true,
        },
        {
          id: 3,
          name: "Jane Wilson",
          role: "Creative Director",
          avatar: FavoriteImage,
          online: false,
        },
      ],
    },
  },

  // ===========================
  // Jane Wilson
  // ===========================
  {
    id: 2,
    type: "person",

    name: "Jane Wilson",
    avatar: FavoriteImage,
    unread: 1,

    header: {
      name: "Jane Wilson",
      status: "Online",
    },

    messages: [
      {
        id: 1,
        type: "received",
        avatar: FavoriteImage,
        text: "Hey! Have you completed the dashboard?",
        time: "10:00 AM",
      },
      {
        id: 2,
        type: "sent",
        avatar: FavoriteImage,
        text: "Almost done. I'll share it soon.",
        time: "10:03 AM",
      },
      {
        id: 3,
        type: "received",
        avatar: FavoriteImage,
        text: "Perfect 👍",
        time: "10:04 AM",
      },
    ],

    profile: {
      avatar: FavoriteImage,
      name: "Jane Wilson",
      role: "Creative Director",

      info: {
        email: "janewilson@gmail.com",
        phone: "+1 987 654 321",
        birthday: "08 April, 1998",
        location: "California, USA",
      },

      files: [
        {
          id: 1,
          name: "Dashboard.fig",
          size: "2.3 MB",
        },
        {
          id: 2,
          name: "BrandGuide.pdf",
          size: "950 KB",
        },
      ],

      photos: [
        {
          id: 1,
          image: AttachmentOne,
        },
        {
          id: 2,
          image: AttachmentTwo,
        },
      ],

      members: [
        {
          id: 1,
          name: "Jane Wilson",
          role: "Creative Director",
          avatar: FavoriteImage,
          online: true,
        },
      ],
    },
  },
];