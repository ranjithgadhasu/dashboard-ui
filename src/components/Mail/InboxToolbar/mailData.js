// src/data/mailData.js

// ===============================
// Inbox Toolbar Actions
// ===============================
import FavoriteImage from "../../../assets/images/FavoriteImage.png"

export const inboxToolbarActions = {
  left: [
    {
      id: "select",
      type: "checkbox",
    },
    {
      id: "dropdown",
      type: "dropdown",
      icon: "ChevronDown",
    },
    {
      id: "delete",
      icon: "Trash2",
      label: "Delete",
    },
    {
      id: "report",
      icon: "AlertCircle",
      label: "Report",
    },
    {
      id: "trash",
      icon: "Trash",
      label: "Move to Trash",
    },
    {
      id: "archive",
      icon: "Archive",
      label: "Archive",
    },
    {
      id: "mail",
      icon: "Mail",
      label: "Mark as Read",
    },
  ],

  center: {
    type: "search",
    placeholder: "Search...",
  },

  right: {
    page: 1,
    totalPages: 200,

    actions: [
      {
        id: "previous",
        icon: "ChevronLeft",
      },
      {
        id: "next",
        icon: "ChevronRight",
      },
      {
        id: "filter",
        icon: "SlidersHorizontal",
      },
      {
        id: "settings",
        icon: "Settings2",
      },
    ],
  },
};

// ===============================
// Inbox Mail Data
// ===============================

export const inboxMails = [
  {
    id: 1,
    sender: "Regina Cooper",
    subject: "Creative Director Resume",
    preview:
      "The Arts play a large role in the expression of inner thoughts and beauty...",
    time: "10:45",
    avatar: FavoriteImage,
    starred: true,
    bookmarked: true,
    unread: false,
    checked: false,
    attachment: true,
  },

  {
    id: 2,
    sender: "Dustin Williamson",
    subject: "Meeting with friends",
    preview:
      "We use the Arts as a means of touching that part of us that we cannot reach...",
    time: "10:45",
    avatar: FavoriteImage,
    starred: false,
    bookmarked: false,
    unread: false,
    checked: false,
    attachment: true,
  },

  {
    id: 3,
    sender: "Jane Wilson",
    subject: "UX Conference in New York",
    preview:
      "The arts allow us to be as specific or as abstract as we please...",
    time: "10:45",
    avatar: FavoriteImage,
    starred: false,
    bookmarked: false,
    unread: true,
    checked: true,
    attachment: true,
  },

  {
    id: 4,
    sender: "Brandon Pena",
    subject: "Muzli's weekly design #236",
    preview:
      "From dance and music to abstract art our concept of life is shown...",
    time: "10:45",
    avatar: FavoriteImage,
    starred: false,
    bookmarked: true,
    unread: false,
    checked: true,
    attachment: true,
  },

  {
    id: 5,
    sender: "Jacob Hawkins",
    subject: "Weekly project report",
    preview:
      "The arts teach us how to communicate through creative expressions...",
    time: "10:45",
    avatar: FavoriteImage,
    starred: false,
    bookmarked: false,
    unread: true,
    checked: true,
    attachment: true,
  },
];