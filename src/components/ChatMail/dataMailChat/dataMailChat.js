import FavoriteImage from "../../../assets/images/FavoriteImage.png";
import UserD from "../../../assets/images/UserD.png";
import UserM  from "../../../assets/images/UserM.png";
import AttachmentOne from"../../../assets/images/AttachmentOne.png";
import AttachmentTwo from"../../../assets/images/AttachmentTwo.png";
import AttachmentThree from"../../../assets/images/AttachmentThree.png";

// ============================
// Images
// ============================

// ===================================
// TEAM LIST
// ===================================

export const teams = [
  {
    id: 1,
    name: "#Managers",
    message: "Hello, Mark! I am writing to introduce...",
    avatar: UserD,
    online: true,
    unread: 0,
  },
  {
    id: 2,
    name: "#Designers",
    message: "Hello. Can you drop the photos...",
    avatar: UserM,
    online: false,
    unread: 4,
  },
];

// ===================================
// PEOPLE
// ===================================
export const people = [
  {
    id: 101,
    name: "Dustin Williamson",
    avatar: FavoriteImage,
    online: true,
    unread: 0,
    message: "Hello, Mark! I am writing to introduce...",
    time: "1 min",

    // ================= Header =================
    header: {
      name: "Dustin Williamson",
      avatar: FavoriteImage,
      online: true,
    },

    // ================= Messages =================
    messages: [
      {
        id: 1,
        type: "received",
        avatar: FavoriteImage,
        text: "Hello Rakesh 👋",
        time: "09:15 AM",
      },
      {
        id: 2,
        type: "sent",
        avatar: FavoriteImage,
        text: "Hi Dustin! How are you?",
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
          AttachmentThree,
        ],
        time: "09:18 AM",
      },
      {
        id: 4,
        type: "file",
        side: "sent",
        avatar: FavoriteImage,
        fileName: "Resume.pdf",
        size: "450 KB",
        time: "09:25 AM",
      },
    ],

    // ================= Right Profile =================
    profile: {
      avatar: FavoriteImage,
      name: "Dustin Williamson",
      role: "UI/UX Designer",

      info: {
        email: "dustin@gmail.com",
        phone: "+1 234 567 890",
        birthday: "15 Jan, 1995",
        location: "New York",
      },

      files: [
        {
          id: 1,
          name: "Resume.pdf",
          size: "450 KB",
        },
        {
          id: 2,
          name: "UI Kit.fig",
          size: "2.2 MB",
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
        {
          id: 3,
          image: AttachmentThree,
        },
      ],

      members: [],
    },
  },

 {
  id: 102,
  name: "Jane Wilson",
  avatar: FavoriteImage,
  online: true,
  unread: 4,
  message: "We use the Arts as a means of touching people's hearts...",
  time: "5 min",

  // ================= Header =================
  header: {
    name: "Jane Wilson",
    avatar: FavoriteImage,
    online: true,
  },

  // ================= Messages =================
  messages: [
    {
      id: 1,
      type: "received",
      avatar: FavoriteImage,
      text: "Hey Rakesh 😊",
      time: "10:05 AM",
    },
    {
      id: 2,
      type: "sent",
      avatar: FavoriteImage,
      text: "Hi Jane! What's going on?",
      time: "10:06 AM",
    },
    {
      id: 3,
      type: "received",
      avatar: FavoriteImage,
      text: "I wanted to share the latest design files with you.",
      time: "10:08 AM",
    },
    {
      id: 4,
      type: "images",
      side: "received",
      avatar: FavoriteImage,
      images: [
        AttachmentOne,
        AttachmentTwo,
        AttachmentThree,
      ],
      time: "10:10 AM",
    },
    {
      id: 5,
      type: "file",
      side: "sent",
      avatar: FavoriteImage,
      fileName: "Design-System.fig",
      size: "3.4 MB",
      time: "10:12 AM",
    },
  ],

  // ================= Right Profile =================
  profile: {
    avatar: FavoriteImage,
    name: "Jane Wilson",
    role: "Product Designer",

    info: {
      email: "jane.wilson@gmail.com",
      phone: "+1 425 567 8901",
      birthday: "22 Mar, 1994",
      location: "California",
    },

    files: [
      {
        id: 1,
        name: "Design-System.fig",
        size: "3.4 MB",
      },
      {
        id: 2,
        name: "Wireframes.pdf",
        size: "1.2 MB",
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
      {
        id: 3,
        image: AttachmentThree,
      },
    ],

    members: [],
  },
},

  {
  id: 103,
  name: "Regina Cooper",
  avatar: FavoriteImage,
  online: true,
  unread: 0,
  message: "The Arts play a large role in the expression of emotions...",
  time: "10 min",

  header: {
    name: "Regina Cooper",
    avatar: FavoriteImage,
    online: true,
  },

  messages: [
    {
      id: 1,
      type: "received",
      avatar: FavoriteImage,
      text: "Good morning, Rakesh!",
      time: "11:00 AM",
    },
    {
      id: 2,
      type: "sent",
      avatar: FavoriteImage,
      text: "Morning Regina!",
      time: "11:02 AM",
    },
    {
      id: 3,
      type: "received",
      avatar: FavoriteImage,
      text: "Let's review the UI today.",
      time: "11:05 AM",
    },
    {
      id: 4,
      type: "images",
      side: "received",
      avatar: FavoriteImage,
      images: [AttachmentOne, AttachmentTwo, AttachmentThree],
      time: "11:10 AM",
    },
    {
      id: 5,
      type: "file",
      side: "sent",
      avatar: FavoriteImage,
      fileName: "UI-Review.pdf",
      size: "1.5 MB",
      time: "11:15 AM",
    },
  ],

  profile: {
    avatar: FavoriteImage,
    name: "Regina Cooper",
    role: "UX Researcher",

    info: {
      email: "regina@gmail.com",
      phone: "+1 202 555 1010",
      birthday: "12 Feb, 1993",
      location: "Chicago",
    },

    files: [
      { id: 1, name: "UI-Review.pdf", size: "1.5 MB" },
      { id: 2, name: "Research.docx", size: "920 KB" },
    ],

    photos: [
      { id: 1, image: AttachmentOne },
      { id: 2, image: AttachmentTwo },
      { id: 3, image: AttachmentThree },
    ],

    members: [],
  },
},

 {
  id: 104,
  name: "Brandon Pena",
  avatar: FavoriteImage,
  online: false,
  unread: 0,
  message: "The arts allow us to be specific or imaginative...",
  time: "18 min",

  header: {
    name: "Brandon Pena",
    avatar: FavoriteImage,
    online: false,
  },

  messages: [
    {
      id: 1,
      type: "received",
      avatar: FavoriteImage,
      text: "Did you finish the dashboard?",
      time: "12:00 PM",
    },
    {
      id: 2,
      type: "sent",
      avatar: FavoriteImage,
      text: "Almost done.",
      time: "12:05 PM",
    },
    {
      id: 3,
      type: "file",
      side: "received",
      avatar: FavoriteImage,
      fileName: "Dashboard.zip",
      size: "5.4 MB",
      time: "12:10 PM",
    },
  ],

  profile: {
    avatar: FavoriteImage,
    name: "Brandon Pena",
    role: "Frontend Developer",

    info: {
      email: "brandon@gmail.com",
      phone: "+1 302 555 1245",
      birthday: "05 Jul, 1992",
      location: "Seattle",
    },

    files: [
      { id: 1, name: "Dashboard.zip", size: "5.4 MB" },
      { id: 2, name: "Icons.ai", size: "850 KB" },
    ],

    photos: [
      { id: 1, image: AttachmentOne },
      { id: 2, image: AttachmentTwo },
      { id: 3, image: AttachmentThree },
    ],

    members: [],
  },
},

  {
  id: 105,
  name: "Jacob Hawkins",
  avatar: FavoriteImage,
  online: true,
  unread: 0,
  message: "From dance and music to abstract art...",
  time: "20 min",

  header: {
    name: "Jacob Hawkins",
    avatar: FavoriteImage,
    online: true,
  },

  messages: [
    {
      id: 1,
      type: "received",
      avatar: FavoriteImage,
      text: "Let's deploy today.",
      time: "01:10 PM",
    },
    {
      id: 2,
      type: "sent",
      avatar: FavoriteImage,
      text: "Sure, I'm ready.",
      time: "01:12 PM",
    },
  ],

  profile: {
    avatar: FavoriteImage,
    name: "Jacob Hawkins",
    role: "React Developer",

    info: {
      email: "jacob@gmail.com",
      phone: "+1 410 555 7878",
      birthday: "18 Sep, 1994",
      location: "Boston",
    },

    files: [
      { id: 1, name: "Deployment.docx", size: "540 KB" },
      { id: 2, name: "Build.zip", size: "8.1 MB" },
    ],

    photos: [
      { id: 1, image: AttachmentOne },
      { id: 2, image: AttachmentTwo },
      { id: 3, image: AttachmentThree },
    ],

    members: [],
  },
},
{
  id: 106,
  name: "Shane Black",
  avatar: FavoriteImage,
  online: false,
  unread: 0,
  message: "The arts teach us how to communicate...",
  time: "25 min",

  header: {
    name: "Shane Black",
    avatar: FavoriteImage,
    online: false,
  },

  messages: [
    {
      id: 1,
      type: "received",
      avatar: FavoriteImage,
      text: "Meeting starts in 10 minutes.",
      time: "02:00 PM",
    },
    {
      id: 2,
      type: "sent",
      avatar: FavoriteImage,
      text: "I'll join shortly.",
      time: "02:02 PM",
    },
  ],

  profile: {
    avatar: FavoriteImage,
    name: "Shane Black",
    role: "Project Manager",

    info: {
      email: "shane@gmail.com",
      phone: "+1 601 555 8989",
      birthday: "10 Oct, 1991",
      location: "Austin",
    },

    files: [
      { id: 1, name: "Sprint.xlsx", size: "1.1 MB" },
      { id: 2, name: "Meeting.docx", size: "700 KB" },
    ],

    photos: [
      { id: 1, image: AttachmentOne },
      { id: 2, image: AttachmentTwo },
      { id: 3, image: AttachmentThree },
    ],

    members: [],
  },
},

 {
  id: 107,
  name: "Priscilla Edwards",
  avatar: FavoriteImage,
  online: true,
  unread: 0,
  message: "Concept of life is shown through art...",
  time: "30 min",

  header: {
    name: "Priscilla Edwards",
    avatar: FavoriteImage,
    online: true,
  },

  messages: [
    {
      id: 1,
      type: "received",
      avatar: FavoriteImage,
      text: "Can you review my work?",
      time: "03:00 PM",
    },
    {
      id: 2,
      type: "sent",
      avatar: FavoriteImage,
      text: "Sure, send it over.",
      time: "03:02 PM",
    },
  ],

  profile: {
    avatar: FavoriteImage,
    name: "Priscilla Edwards",
    role: "Graphic Designer",

    info: {
      email: "priscilla@gmail.com",
      phone: "+1 312 555 4545",
      birthday: "30 Nov, 1995",
      location: "Denver",
    },

    files: [
      { id: 1, name: "Poster.psd", size: "14 MB" },
      { id: 2, name: "Logo.ai", size: "2 MB" },
    ],

    photos: [
      { id: 1, image: AttachmentOne },
      { id: 2, image: AttachmentTwo },
      { id: 3, image: AttachmentThree },
    ],

    members: [],
  },
},

 {
  id: 108,
  name: "Kristin Mccoy",
  avatar: FavoriteImage,
  online: false,
  unread: 0,
  message: "Inner thoughts and beauty in my life...",
  time: "40 min",

  header: {
    name: "Kristin Mccoy",
    avatar: FavoriteImage,
    online: false,
  },

  messages: [
    {
      id: 1,
      type: "received",
      avatar: FavoriteImage,
      text: "Please check the latest report.",
      time: "04:00 PM",
    },
    {
      id: 2,
      type: "sent",
      avatar: FavoriteImage,
      text: "I'll check it now.",
      time: "04:02 PM",
    },
  ],

  profile: {
    avatar: FavoriteImage,
    name: "Kristin Mccoy",
    role: "Marketing Manager",

    info: {
      email: "kristin@gmail.com",
      phone: "+1 412 555 1122",
      birthday: "17 Dec, 1990",
      location: "Miami",
    },

    files: [
      { id: 1, name: "Marketing.pdf", size: "2.4 MB" },
      { id: 2, name: "Campaign.xlsx", size: "1.8 MB" },
    ],

    photos: [
      { id: 1, image: AttachmentOne },
      { id: 2, image: AttachmentTwo },
      { id: 3, image: AttachmentThree },
    ],

    members: [],
  },
},

  {
  id: 109,
  name: "Bruce Russell",
  avatar: FavoriteImage,
  online: true,
  unread: 0,
  message: "Let's discuss tomorrow...",
  time: "1 hr",

  header: {
    name: "Bruce Russell",
    avatar: FavoriteImage,
    online: true,
  },

  messages: [
    {
      id: 1,
      type: "received",
      avatar: FavoriteImage,
      text: "Are we meeting tomorrow?",
      time: "05:00 PM",
    },
    {
      id: 2,
      type: "sent",
      avatar: FavoriteImage,
      text: "Yes, at 10 AM.",
      time: "05:05 PM",
    },
    {
      id: 3,
      type: "file",
      side: "received",
      avatar: FavoriteImage,
      fileName: "Agenda.pdf",
      size: "300 KB",
      time: "05:10 PM",
    },
  ],

  profile: {
    avatar: FavoriteImage,
    name: "Bruce Russell",
    role: "Team Lead",

    info: {
      email: "bruce@gmail.com",
      phone: "+1 909 555 9898",
      birthday: "28 Apr, 1989",
      location: "San Francisco",
    },

    files: [
      { id: 1, name: "Agenda.pdf", size: "300 KB" },
      { id: 2, name: "Notes.docx", size: "650 KB" },
    ],

    photos: [
      { id: 1, image: AttachmentOne },
      { id: 2, image: AttachmentTwo },
      { id: 3, image: AttachmentThree },
    ],

    members: [],
  },
},
];

// ===================================
// CHAT HEADER
// ===================================


// ===================================
// CHAT MESSAGES
// ===================================

export const messages = [
  {
    id: 1,
    type: "sent",
    avatar: FavoriteImage,
    text: "Hi Cody, any progress on the project? 😊",
    time: "1 day ago",
  },

  {
    id: 2,
    type: "received",
    avatar: FavoriteImage,
    text: "Hi Jane!\nYes. I just finished developing the 'Chat' template.",
    time: "1 day ago",
  },

  {
    id: 3,
    type: "images",
    side: "sent", // or "received"
    avatar: FavoriteImage,
    images: [
      AttachmentOne,
      AttachmentTwo,
      AttachmentThree,
    ],
    extra: 3,
    time: "1 day ago",
  },

  {
    id: 4,
    type: "sent",
    avatar: FavoriteImage,
    text: "It looks amazing. 😍\nThe customer will be very satisfied.",
    time: "1 day ago",
  },

  {
    id: 5,
    type: "received",
    avatar: FavoriteImage,
    text: "Thank you, glad you liked it.\nSend me Styles Guide.",
    time: "1 day ago",
  },

  {
    id: 6,
    type: "divider",
    label: "Today",
  },

  {
    id: 7,
    type: "file",
    side: "sent", // or "received"
    avatar: FavoriteImage,
    fileName: "Brand Styles Guide.pdf",
    size: "487 KB",
    download: true,
    time: "2 min ago",
  },

  {
    id: 8,
    type: "received",
    avatar: FavoriteImage,
    text: "I'll see later",
    time: "1 min ago",
  },
];

export const teamChats = {
  1: {
    header: {
      name: "#Managers",
      avatar: UserD,
      members: 12,
      online: true,
    },

 messages: [
  {
    id: 1,
    type: "received",
    avatar: FavoriteImage,
    text: "Hi Cody, any progress on the project? 😊",
    time: "1 day ago",
  },
  {
    id: 2,
    type: "received",
    avatar: FavoriteImage,
    text: "Hi Jane!\nYes. I just finished developing the Chat template.",
    time: "1 day ago",
  },
  {
    id: 3,
    type: "images",
    side: "received",
    avatar: FavoriteImage,
    images: [
      AttachmentOne,
      AttachmentTwo,
      AttachmentThree,
    ],
    extra: 3,
    time: "1 day ago",
  },
  {
    id: 4,
    type: "received",
    avatar: FavoriteImage,
    text: "It looks amazing 😍",
    time: "1 day ago",
  },
  {
    id: 5,
    type: "received",
    avatar: FavoriteImage,
    text: "Thank you, glad you liked it. Send me Styles Guide.",
    time: "1 day ago",
  },
  {
    id: 6,
    type: "divider",
    label: "Today",
  },
  {
    id: 7,
    type: "file",
    side: "received",
    avatar: FavoriteImage,
    fileName: "Brand Styles Guide.pdf",
    size: "487 KB",
    time: "2 min ago",
  },
  {
    id: 8,
    type: "received",
    avatar: FavoriteImage,
    text: "I'll see later",
    time: "1 min ago",
  },
],

    profile: {
      name: "#Managers",
      avatar: UserD,
      role: "Management Team",

      info: {
        email: "managers@gmail.com",
        phone: "+1 234 567 890",
        birthday: "17 March, 1995",
        location: "New York",
      },

      files: [
        {
          id: 1,
          name: "Sprint Plan.pdf",
          size: "1.4 MB",
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
          avatar: FavoriteImage,
          role: "UI/UX Designer",
          online: true,
        },
        {
          id: 2,
          name: "Jane Wilson",
          avatar: FavoriteImage,
          role: "Creative Director",
          online: true,
        },
      ],
    },
  },

  2: {
    header: {
      name: "#Designers",
      avatar: UserM,
      members: 8,
      online: true,
    },

    messages: [
      // Designers messages
    ],

    profile: {
      name: "#Designers",
      avatar: UserM,
      role: "Design Team",

      info: {
        email: "designers@gmail.com",
        phone: "+1 987 654 321",
        birthday: "20 July, 1996",
        location: "California",
      },

      files: [
        {
          id: 1,
          name: "Brand Guide.pdf",
          size: "2.5 MB",
        },
      ],

      photos: [
        {
          id: 1,
          image: AttachmentOne,
        },
        {
          id: 2,
          image: AttachmentThree,
        },
      ],

      members: [
        {
          id: 1,
          name: "Regina Cooper",
          avatar: FavoriteImage,
          role: "Project Manager",
          online: true,
        },
        {
          id: 2,
          name: "Brandon Pena",
          avatar: FavoriteImage,
          role: "Frontend Developer",
          online: false,
        },
      ],
    },
  },
};