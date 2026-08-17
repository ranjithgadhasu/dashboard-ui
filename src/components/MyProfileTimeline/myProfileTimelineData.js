import FavoriteImage from "../../assets/images/FavoriteImage.png";
import ImageComment from "../../assets/images/ImageComment.png";
import ImageBeach from "../../assets/images/ImageBeach.png";
import ImageWater from "../../assets/images/ImageWater.png";
import ImageLand from "../../assets/images/ImageLand.png";
import VideoBurds from "../../assets/images/VideoBurds.png";

import AttachmentTwo from "../../assets/images/AttachmentTwo.png";
import AttachmentOne from "../../assets/images/AttachmentOne.png";
import AttachmentFive from "../../assets/images/AttachmentFive.png";

export const timelineAuthors = {
  dustin: {
    id: 1,
    name: "Dustin Williamson",
    username: "dustin.williamson",
    avatar: FavoriteImage,
  },

  judith: {
    id: 2,
    name: "Judith Black",
    username: "judith.black",
    avatar: FavoriteImage,
  },

  nathan: {
    id: 3,
    name: "Nathan Fox",
    username: "nathan.fox",
    avatar: FavoriteImage,
  },

  calvin: {
    id: 4,
    name: "Calvin Flores",
    username: "calvin.flores",
    avatar: FavoriteImage,
  },

  regina: {
    id: 5,
    name: "Regina Cooper",
    username: "regina.cooper",
    avatar: FavoriteImage,
  },

  ronald: {
    id: 6,
    name: "Ronald Robertson",
    username: "ronald.robertson",
    avatar: FavoriteImage,
  },
};

// ============================================================
// TODAY - LEFT POST
// ============================================================

const todayLeftPostOne = {
  id: 1,

  author: timelineAuthors.dustin,

  date: "Jun 17, 2020",

  media: {
    type: "image",
    image: ImageComment,
    alt: "City buildings",
  },

  content:
    "Above all, think of life as a prototype. We can conduct experiments, make discoveries, and change our perspectives. We can look for opportunities to turn processes into projects that have tangible outcomes.",

  likes: 50,

  commentsCount: 14,

  comments: [
    {
      id: 101,

      name: "Judith Black",

      avatar: timelineAuthors.judith.avatar,

      time: "1 min ago",

      text: "Very interesting and informative article. I learned a lot of new and interesting. 😳",

      likes: 5,

      replies: [
        {
          id: 1011,

          name: "Nathan Fox",

          avatar: timelineAuthors.nathan.avatar,

          time: "5 min ago",

          text: "Hello! I agree, a very interesting article. Thank you very much!",

          likes: 0,

          replies: [],
        },
      ],
    },

    {
      id: 102,

      name: "Calvin Flores",

      avatar: timelineAuthors.calvin.avatar,

      time: "5 min ago",

      text: "Thanks for the good article. Looking forward to new ones. 🤓",

      likes: 3,

      replies: [],
    },
  ],
};

// ============================================================
// TODAY - RIGHT POST
// ============================================================

const todayRightPostOne = {
  id: 2,

  author: timelineAuthors.dustin,

  date: "Jun 17, 2020",

  media: {
    type: "image",
    image: ImageWater,
    alt: "Ocean and beach",
  },

  content:
    "Creativity is to discover a question that has never been asked. If one brings up an idiosyncratic question, the answer he gives will necessarily be unique as well.",

  likes: 24,

  commentsCount: 18,

  comments: [
    {
      id: 201,

      name: "Regina Cooper",

      avatar: timelineAuthors.regina.avatar,

      time: "4 min ago",

      text: "Very interesting and informative. I learned a lot of new and interesting things.",

      likes: 8,

      replies: [],
    },

    {
      id: 202,

      name: "Ronald Robertson",

      avatar: timelineAuthors.ronald.avatar,

      time: "10 min ago",

      text: "Hello! I agree, a very interesting article. Thank you very much!",

      likes: 1,

      replies: [],
    },
  ],
};

// ============================================================
// YESTERDAY - LEFT POST 1
// ============================================================

const yesterdayLeftPostOne = {
  id: 3,

  author: timelineAuthors.dustin,

  date: "Jun 17, 2020",

  media: {
    type: "image",
    image: ImageBeach,
    alt: "Desert landscape",
  },

  content:
    "Above all, think of life as a prototype. We can conduct experiments, make discoveries, and change our perspectives. We can look for opportunities to turn processes into projects that have tangible outcomes.",

  likes: 75,

  commentsCount: 8,

  comments: [
    {
      id: 301,

      name: "Nathan Fox",

      avatar: timelineAuthors.nathan.avatar,

      time: "1 day ago",

      text: "Very interesting and informative article. I learned a lot of new and interesting. 😳",

      likes: 0,

      replies: [],
    },

    {
      id: 302,

      name: "Calvin Flores",

      avatar: timelineAuthors.calvin.avatar,

      time: "1 day ago",

      text: "Thanks for the good article. Looking forward to new ones.",

      likes: 3,

      replies: [],
    },
  ],
};

// ============================================================
// YESTERDAY - RIGHT POST 1
// ============================================================

const yesterdayRightPostOne = {
  id: 4,

  author: timelineAuthors.dustin,

  date: "Jun 17, 2020",

  media: {
    type: "image",
    image: ImageLand,
    alt: "Coast and ocean",
  },

  content:
    "Creativity is to discover a question that has never been asked. If one brings up an idiosyncratic question, the answer he gives will necessarily be unique as well.",

  likes: 37,

  commentsCount: 10,

  comments: [
    {
      id: 401,

      name: "Judith Black",

      avatar: timelineAuthors.judith.avatar,

      time: "1 day ago",

      text: "Very interesting and informative. I learned a lot of new and interesting things.",

      likes: 8,

      replies: [],
    },

    {
      id: 402,

      name: "Nathan Fox",

      avatar: timelineAuthors.nathan.avatar,

      time: "1 day ago",

      text: "Hello! I agree, a very interesting article. Thank you very much!",

      likes: 1,

      replies: [],
    },
  ],
};

// ============================================================
// YESTERDAY - LEFT VIDEO POST
// ============================================================

const yesterdayLeftVideoPost = {
  id: 5,

  author: timelineAuthors.dustin,

  date: "Jun 17, 2020",

  media: {
    type: "video",

    image: VideoBurds,

    alt: "Video thumbnail",

    duration: "02:14",
  },

  content:
    "Creativity is to discover a question that has never been asked. If one brings up an idiosyncratic question, the answer he gives will necessarily be unique as well.",

  likes: 82,

  commentsCount: 14,

  comments: [
    {
      id: 501,

      name: "Ronald Robertson",

      avatar: timelineAuthors.ronald.avatar,

      time: "1 day ago",

      text: "Very interesting and informative article. I learned a lot of new and interesting. 😳",

      likes: 8,

      replies: [],
    },
  ],
};

// ============================================================
// YESTERDAY - RIGHT GALLERY POST
// ============================================================

const yesterdayRightGalleryPost = {
  id: 6,

  author: timelineAuthors.dustin,

  date: "Jun 17, 2020",

  media: {
    type: "gallery",

    images: [AttachmentTwo, AttachmentOne, AttachmentFive],
  },

  content:
    "We can look for opportunities to turn processes into projects that have tangible outcomes.",

  likes: 54,

  commentsCount: 4,

  comments: [
    {
      id: 601,

      name: "Calvin Flores",

      avatar: timelineAuthors.calvin.avatar,

      time: "1 day ago",

      text: "Very interesting and informative. I learned a lot of new and interesting things.",

      likes: 4,

      replies: [],
    },

    {
      id: 602,

      name: "Regina Cooper",

      avatar: timelineAuthors.regina.avatar,

      time: "1 day ago",

      text: "Hello! I agree, a very interesting article. Thank you very much!",

      likes: 1,

      replies: [],
    },
  ],
};

// ============================================================
// TIMELINE DATA
// ============================================================

export const timelineData = {
  // ==========================================================
  // TODAY
  // ==========================================================

  today: {
    left: [todayLeftPostOne],

    right: [todayRightPostOne],
  },

  // ==========================================================
  // YESTERDAY
  // ==========================================================

  yesterday: {
    left: [yesterdayLeftPostOne, yesterdayLeftVideoPost],

    right: [yesterdayRightPostOne, yesterdayRightGalleryPost],
  },
};

// ============================================================
// ALL POSTS
// Useful if you later want filtering/search/pagination
// ============================================================

export const allTimelinePosts = [
  todayLeftPostOne,
  todayRightPostOne,
  yesterdayLeftPostOne,
  yesterdayRightPostOne,
  yesterdayLeftVideoPost,
  yesterdayRightGalleryPost,
];

// ============================================================
// DEFAULT EXPORT
// ============================================================

export default timelineData;
