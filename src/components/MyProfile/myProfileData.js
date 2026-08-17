import FavoriteImage from "../../assets/images/FavoriteImage.png";
import ImageComment from "../../assets/images/ImageComment.png";
import VideoImg from "../../assets/images/VideoImg.png"

export const profileData = {
  id: 1,

  name: "Ronald Robertson",

  username: "ronald.robertson",

  firstName: "Ronald",

  lastName: "Robertson",

  role: "CEO & Founder",

  designation: "Chief Executive Officer",

  company: "Tower Technologies",

  bio: "Building products, teams and experiences that make a difference.",

  about:
    "I am a product-focused technology leader who enjoys building great products, working with talented people and creating meaningful digital experiences.",

  location: "New York, USA",

  city: "New York",

  country: "United States",

  email: "ronald.robertson@example.com",

  phone: "+1 202 555 0125",

  website: "www.towertechnologies.com",

  joined: "May 2024",

  birthday: "October 12, 1988",

  relationship: "Married",

  coverImage:
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",

  profileImage: FavoriteImage,

  online: true,

  verified: true,

  followers: 2486,

  following: 421,

  friendsCount: 186,

  postsCount: 128,
};

// ============================================================
// PROFILE STATS
// ============================================================

export const profileStats = [
  {
    id: 1,
    label: "Posts",
    value: "128",
  },

  {
    id: 2,
    label: "Friends",
    value: "186",
  },

  {
    id: 3,
    label: "Followers",
    value: "2.4K",
  },

  {
    id: 4,
    label: "Following",
    value: "421",
  },
];

// ============================================================
// PROFILE MENU
// ============================================================

export const profileMenu = [
  {
    id: 1,
    label: "Timeline",
    value: "timeline",
  },

  {
    id: 2,
    label: "About",
    value: "about",
  },

  {
    id: 3,
    label: "Friends",
    value: "friends",
  },

  {
    id: 4,
    label: "Photos",
    value: "photos",
  },

  {
    id: 5,
    label: "Videos",
    value: "videos",
  },

  {
    id: 6,
    label: "Posts",
    value: "posts",
  },
];

// ============================================================
// SIDEBAR MENU
// ============================================================

export const sidebarMenu = [
  {
    id: 1,
    label: "Dashboard",
    icon: "dashboard",
    path: "/dashboard",
    active: false,
  },

  {
    id: 2,
    label: "My Profile",
    icon: "profile",
    path: "/my-profile",
    active: true,
  },

  {
    id: 3,
    label: "Connections",
    icon: "users",
    path: "/connections",
    active: false,
  },

  {
    id: 4,
    label: "Messages",
    icon: "message",
    path: "/messages",
    active: false,
    badge: 4,
  },

  {
    id: 5,
    label: "Events",
    icon: "calendar",
    path: "/events",
    active: false,
  },

  {
    id: 6,
    label: "Files",
    icon: "file",
    path: "/files",
    active: false,
  },

  {
    id: 7,
    label: "Photos",
    icon: "image",
    path: "/photos",
    active: false,
  },

  {
    id: 8,
    label: "Notifications",
    icon: "notification",
    path: "/notifications",
    active: false,
    badge: 7,
  },

  {
    id: 9,
    label: "Settings",
    icon: "settings",
    path: "/settings",
    active: false,
  },
];
// =========
// FRIENDS
// ========

export const friends = [
  {
    id: 1,
    name: "Ronald Robertson",
    username: "david.robinson",
    role: "Product Designer",
    image: FavoriteImage,
  },

  {
    id: 2,
    name: "Regina Cooper",
    username: "brigitte.cooper",
    role: "Project Manager",
    image: FavoriteImage,
  },

  {
    id: 3,
    name: "Judith Black",
    username: "justin.kross",
    role: "Judith Black",
    image:FavoriteImage,
  },

  {
    id: 4,
    name: "Dustin Williamson",
    username: "bobby.washington",
    role: "Web Developer",
    image: FavoriteImage,

  },

  {
    id: 5,
    name: "Nathan Fox",
    username: "matthew.fox",
    role: "Business Analyst",
    image:FavoriteImage,

  },

  {
    id: 6,
    name: "Calvin Flores",
    username: "kevin.fox",
    role: "Designer",
    image: FavoriteImage,
 
  },

  {
    id: 7,
    name: "Brandon Pena",
    username: "calvin.jones",
    role: "Product Designer",
    image: FavoriteImage,

  },

  {
    id: 8,
    name: "Courtney Nguyen",
    username: "brandon.ross",
    role: "Designer",
     image: FavoriteImage,
  },

  {
    id: 9,
    name: "Kathryn Cooper",
    username: "david.taylor",
    role: "Developer",
    image: FavoriteImage,
  },

  {
    id: 10,
    name: "Cody Lane",
    username: "kathleen.cooper",
    role: "Web Developer",
    image: FavoriteImage,
  },
];

// ============================================================
// PHOTOS
// ============================================================

export const photos = [
  {
    id: 1,
    title: "City View",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=500&q=80",
    type: "image",
  },

  {
    id: 2,
    title: "Mountain Trip",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=500&q=80",
    type: "image",
  },

  {
    id: 3,
    title: "Nature",
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=500&q=80",
    type: "image",
  },

  {
    id: 4,
    title: "Forest",
    image:
      "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=500&q=80",
    type: "image",
  },

  {
    id: 5,
    title: "Green Forest",
    image:
      "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=500&q=80",
    type: "image",
  },

  {
    id: 6,
    title: "Trees",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=500&q=80",
    type: "image",
  },

  {
    id: 7,
    title: "Landscape",
    image:
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=500&q=80",
    type: "image",
  },

  {
    id: 8,
    title: "Ocean",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=500&q=80",
    type: "image",
  },

  {
    id: 9,
    title: "Aerial View",
    image:
      "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=500&q=80",
    type: "image",
  },
];


// POST COMMENTS//
export const comments = {
  1: [
    {
      id: 1,
      name: "Judith Black",
      avatar: FavoriteImage,
      text: "Very interesting and informative article. I learned a lot of new and interesting.",
      time: "1 day ago",
    },
    {
      id: 2,
      name: "Calvin Flores",
      avatar: FavoriteImage,
      text: "Thanks for the good article. Looking forward to new ones.",
      time: "45 min ago",
    },
  ],

  2: [
    {
      id: 3,
      name: "David Robinson",
      avatar: "https://i.pravatar.cc/100?img=11",
      text: "Beautiful place!",
      time: "2 hours ago",
    },

    {
      id: 4,
      name: "Emily Larson",
      avatar: "https://i.pravatar.cc/100?img=21",
      text: "I really like this.",
      time: "1 hour ago",
    },
  ],

  3: [
    {
      id: 5,
      name: "Regina Cooper",
      avatar: FavoriteImage,
      text: "Very interesting and informative. I learned a lot of new and interesting things.",
      time: "30 min ago",
    },
    {
      id: 6,
      name: "Ronald Robertson",
      avatar: FavoriteImage,
      text: "Hello! I agree, a very interesting. Thank you very much!",
      time: "20 min ago",
    },
  ],
};

// ============================================================
// POSTS
// ============================================================

export const posts = [
  {
    id: 1,

    author: {
      id: 1,
      name: "Dustin Williamson",
      username: "ronald.robertson",
      avatar: FavoriteImage,
      verified: true,
    },

    time: "Jan 17, 2020",

    privacy: "Public",

    content:
      "Above all, think of life as a prototype. We can conduct experiments, make discoveries, and change our perspectives. We can look for opportunities to turn processes into projects that have tangible outcomes. We can learn how to take joy in the things we create whether they take the form of a fleeting experience or an heirloom that will last for generations.",

    image: ImageComment,

    imageAlt: "City architecture",

    likes: 24,

    commentsCount: 8,

    shares: 3,

    liked: false,

    bookmarked: false,

    comments: comments[1],
  },

  {
    id: 2,

    author: {
      id: 3,
      name: "Charlie Wilson",
      username: "charlie.wilson",
      avatar: FavoriteImage,
      verified: true,
    },

    time: "Yesterday",

    privacy: "Public",

    content:
      "Creativity is to discover a question that has never been asked. If one brings up an idiosyncratic question, the answer he gives will necessarily be unique as well. ",

    image:VideoImg,

    imageAlt: "Ocean and beach",

    likes: 32,

    commentsCount: 11,

    shares: 6,

    liked: false,

    bookmarked: true,

    comments: comments[3],
  },
];

// ====
// VIDEOS
// =====

export const videos = [
  {
    id: 1,

    title: "Weekend Trip",

    thumbnail:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",

    duration: "02:45",

    views: 1240,

    author: "Ronald Robertson",

    date: "Yesterday",
  },

  {
    id: 2,

    title: "City Tour",

    thumbnail:
      "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=900&q=80",

    duration: "04:12",

    views: 842,

    author: "Ronald Robertson",

    date: "3 days ago",
  },

  {
    id: 3,

    title: "Team Event",

    thumbnail:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=80",

    duration: "06:32",
    views: 2150,
    author: "Ronald Robertson",
    date: "1 week ago",
  },
];
// ============================================================
// NOTIFICATIONS
// ============================================================
export const notifications = [
  {
    id: 1,
    type: "like",
    title: "Brigitte Cooper liked your post",
    message: "Your recent post received a new like.",
    avatar: "https://i.pravatar.cc/100?img=32",
    time: "5 min ago",
    read: false,
  },
  {
    id: 2,
    type: "comment",
    title: "Justin Kross commented on your post",
    message: "Great experience. Thanks for sharing.",
    avatar: "https://i.pravatar.cc/100?img=13",
    time: "20 min ago",
    read: false,
  },
  {
    id: 3,
    type: "friend",
    title: "David Robinson sent you a friend request",
    message: "David wants to connect with you.",
    avatar: "https://i.pravatar.cc/100?img=11",
    time: "1 hour ago",
    read: true,
  },
  {
    id: 4,
    type: "follow",
    title: "Emily Larson started following you",
    message: "You have a new follower.",
    avatar: "https://i.pravatar.cc/100?img=21",
    time: "2 hours ago",
    read: true,
  },
  {
    id: 5,
    type: "event",
    title: "Upcoming event tomorrow",
    message: "Product Design Meetup starts at 10:00 AM.",
    avatar: "https://i.pravatar.cc/100?img=22",
    time: "Yesterday",
    read: true,
  },
];
// ============================================================
// SUGGESTED FRIENDS
// ============================================================
export const suggestedFriends = [
  {
    id: 1,
    name: "Michael Anderson",
    image: "https://i.pravatar.cc/100?img=25",
    mutualFriends: 8,
  },
  {
    id: 2,
    name: "Jessica Morgan",
    image: "https://i.pravatar.cc/100?img=26",
    mutualFriends: 14,
  },
  {
    id: 3,
    name: "Robert Miller",
    image: "https://i.pravatar.cc/100?img=27",
    mutualFriends: 5,
  },
  {
    id: 4,
    name: "Sophia Taylor",
    image: "https://i.pravatar.cc/100?img=28",
    mutualFriends: 11,
  },
  {
    id: 5,
    name: "Daniel Thomas",
    image: "https://i.pravatar.cc/100?img=29",
    mutualFriends: 7,
  },
];
// ============================================================
// ABOUT INFORMATION
// ============================================================
export const aboutData = [
  {
    id: 1,
    label: "Full Name",
    value: "Ronald Robertson",
  },
  {
    id: 2,
    label: "Email",
    value: "ronald.robertson@example.com",
  },
  {
    id: 3,
    label: "Phone",
    value: "+1 202 555 0125",
  },
  {
    id: 4,
    label: "Location",
    value: "New York, USA",
  },
  {
    id: 5,
    label: "Company",
    value: "Tower Technologies",
  },

  {
    id: 6,
    label: "Designation",
    value: "CEO & Founder",
  },

  {
    id: 7,
    label: "Joined",
    value: "May 2024",
  },

  {
    id: 8,
    label: "Website",
    value: "www.towertechnologies.com",
  },
];

// ============================================================
// SOCIAL LINKS
// ============================================================

export const socialLinks = [
  {
    id: 1,
    name: "LinkedIn",
    username: "ronald-robertson",
    url: "#",
  },

  {
    id: 2,
    name: "Twitter",
    username: "@ronaldrobertson",
    url: "#",
  },

  {
    id: 3,
    name: "Instagram",
    username: "@ronald.robertson",
    url: "#",
  },

  {
    id: 4,
    name: "Facebook",
    username: "ronald.robertson",
    url: "#",
  },
];

// ============================================================
// RECENT ACTIVITY
// ============================================================

export const recentActivity = [
  {
    id: 1,
    type: "post",
    text: "Ronald created a new post",
    time: "2 hours ago",
  },

  {
    id: 2,
    type: "like",
    text: "Ronald liked Brigitte's post",
    time: "3 hours ago",
  },

  {
    id: 3,
    type: "friend",
    text: "Ronald became friends with David Robinson",
    time: "Yesterday",
  },

  {
    id: 4,
    type: "photo",
    text: "Ronald added 4 new photos",
    time: "2 days ago",
  },

  {
    id: 5,
    type: "comment",
    text: "Ronald commented on Justin's post",
    time: "3 days ago",
  },
];

// ============================================================
// PAGE HEADER
// ============================================================

export const pageHeader = {
  title: "My Profile",

  subtitle: "Manage your profile and view your activity.",

  breadcrumb: [
    {
      label: "Home",
      path: "/dashboard",
    },

    {
      label: "My Profile",
      path: "/my-profile",
    },
  ],
};

// ============================================================
// CREATE POST OPTIONS
// ============================================================

export const postOptions = [
  {
    id: 1,
    label: "Photo",
    value: "photo",
    icon: "image",
  },

  {
    id: 2,
    label: "Video",
    value: "video",
    icon: "video",
  },

  {
    id: 3,
    label: "Feeling",
    value: "feeling",
    icon: "smile",
  },

  {
    id: 4,
    label: "Location",
    value: "location",
    icon: "map-pin",
  },
];

// ============================================================
// USER SETTINGS
// ============================================================

export const profileSettings = {
  notifications: true,

  emailNotifications: true,

  privateProfile: false,

  showOnlineStatus: true,

  allowFriendRequests: true,

  allowMessages: true,
};

// ============================================================
// EXPORT ALL DATA TOGETHER
// ============================================================

export const myProfileData = {
  profile: profileData,

  stats: profileStats,

  menu: profileMenu,

  sidebar: sidebarMenu,

  friends,

  photos,

  posts,

  videos,

  notifications,

  suggestedFriends,

  about: aboutData,

  socialLinks,

  recentActivity,

  pageHeader,

  postOptions,

  settings: profileSettings,
};
