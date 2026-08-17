// ganttData.js
import FavoriteImage from "../../../../assets/images/FavoriteImage.png";

export const ganttData = {
  header: {
    title: "Design Plan",
    month: "September",
    year: "2020",
  },

  timeline: [
    { id: 1, day: "MO", date: 3 },
    { id: 2, day: "TU", date: 4 },
    { id: 3, day: "WE", date: 5 },
    { id: 4, day: "TH", date: 6 },
    { id: 5, day: "FR", date: 7 },
    { id: 6, day: "SA", date: 8, today: true },
    { id: 7, day: "SU", date: 9 },
    { id: 8, day: "MO", date: 10 },
    { id: 9, day: "TU", date: 11 },
    { id: 10, day: "WE", date: 12 },
    { id: 11, day: "TH", date: 13 },
    { id: 12, day: "FR", date: 14 },
    { id: 13, day: "SA", date: 15 },
    { id: 14, day: "SU", date: 16 },
  ],

  tasks: [
    {
      id: 1,
      name: "Planning",
      color: "#47C56B",
      start: 1,
      duration: 4,
      progress: 100,
      level: 0,
      expanded: false,
    },

    {
      id: 2,

      name: "Wireframing",

      color: "#4DD0E1",

      start: 1,

      duration: 5,

      progress: 100,

      level: 0,

      expanded: false,

      startDate: "03 Sep, 2020",

      endDate: "07 Sep, 2020",

      completedTasks: 3,

      totalTasks: 3,

      members: [
        {
          id: 1,
          avatar: FavoriteImage,
        },
        {
          id: 2,
          avatar: FavoriteImage,
        },
        {
          id: 3,
          avatar: FavoriteImage,
        },
      ],
    },
    {
      id: 3,
      name: "Design",
      color: "#FFD54F",
      start: 2,
      duration: 8,
      progress: 60,
      level: 0,
      expanded: true,

      children: [
        {
          id: 31,
          name: "Font Research",
          color: "#FFD54F",
          start: 3,
          duration: 4,
          progress: 100,
        },
        {
          id: 32,
          name: "Color Palette",
          color: "#FFD54F",
          start: 3,
          duration: 5,
          progress: 80,
        },
        {
          id: 33,
          name: "Mockup",
          color: "#FFD54F",
          start: 4,
          duration: 4,
          progress: 25,
        },
        {
          id: 34,
          name: "User Interface",
          color: "#28C76F",
          start: 5,
          duration: 5,
          progress: 50,
          active: true,
        },
        {
          id: 35,
          name: "Illustrations",
          color: "#FFD54F",
          start: 6,
          duration: 4,
          progress: 100,
        },
        {
          id: 36,
          name: "Animated UI Flow",
          color: "#FFD54F",
          start: 3,
          duration: 4,
          progress: 0,
        },
      ],
    },

    {
      id: 4,
      name: "Development",
      color: "#7AD7D0",
      start: 8,
      duration: 6,
      progress: 50,
      level: 0,
      expanded: false,
    },

    {
      id: 5,
      name: "Testing",
      color: "#D69CF8",
      start: 10,
      duration: 5,
      progress: 0,
      level: 0,
      expanded: false,
    },
  ],

  footer: {
    currentView: "Days",

    zoomLevels: ["Hours", "Days", "Weeks", "Months"],
  },
};
