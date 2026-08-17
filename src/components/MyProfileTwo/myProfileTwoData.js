import FavoriteImage from "../../assets/images/FavoriteImage.png";


import AttachmentOne from "../../assets/images/AttachmentOne.png";
import AttachmentTwo from "../../assets/images/AttachmentTwo.png";
import AttachmentThree from "../../assets/images/AttachmentThree.png";
import AttachmentFour from "../../assets/images/AttachmentFour.png";
import AttachmentFive from "../../assets/images/AttachmentFive.png";
import AttachmentSix from "../../assets/images/AttachmentSix.png";



export const profileData = {
  id: 1,

  name: "Jane Wilso",

  firstName: "Jane",

  username: "jane.wilson",

  role: "Creative Director",

  profileImage: FavoriteImage,

  email: "block@example.com",

  phone: "+1 (070) 123-8459",

  birthday: "17 October, 1996",

  location: "New York, NY",
};


export const friends = [
  {
    id: 1,
    name: "Ronald Robertson",
    role: "Product Designer",
    image: FavoriteImage,

  },

  {
    id: 2,
    name: "Regina Cooper",
    role: "Project Manager",
    image: FavoriteImage,

  },

  {
    id: 3,
    name: "Judith Black",
    role: "Creative Director",
    image: FavoriteImage,

  },

  {
    id: 4,
    name: "Dustin Williamson",
    role: "Web Developer",
    image: FavoriteImage,

  },
   {
    id: 5,
    name: "Nathan Fox",
    role: "Business Analyst",
    image: FavoriteImage,

  },
   {
    id: 6,
    name: "Calvin Flores",
    role: "Designer",
    image: FavoriteImage,

  },
   {
    id: 7,
    name: "Brandon Pena",
    role: "Product Designer",
    image: FavoriteImage,

  },
   {
    id: 8,
    name: "Courtney Nguyen",
    role: "Designer",
    image: FavoriteImage,

  },
   {
    id: 9,
    name: "Kathryn Cooper",
    role: "Developer",
    image: FavoriteImage,

  },
   {
    id: 10,
    name: "Cody Lane",
    role: "Web Developer",
    image: FavoriteImage,

  },
];


export const photos = [
  {
    id: 1,
    title: "Photo 1",
    image: AttachmentOne,
  },

  {
    id: 2,
    title: "Photo 2",
    image: AttachmentTwo,
  },

  {
    id: 3,
    title: "Photo 3",
    image: AttachmentThree,
  },

  {
    id: 4,
    title: "Photo 4",
    image: AttachmentFour,
  },

  {
    id: 5,
    title: "Photo 5",
    image: AttachmentFive,
  },

  {
    id: 6,
    title: "Photo 6",
    image: AttachmentSix,
  },
];


export const posts = [
  {
    id: 1,

    author: {
      id: 10,
      name: "Dustin Williamson",
      username: "dustin",
      avatar: FavoriteImage,
    },

    time: "Jun 17, 2020",

    content:
      "Above all, think of life as a prototype. We can conduct experiments, make discoveries, and change our perspectives. We can look for opportunities to turn processes into projects that have tangible outcomes.",

    image: FavoriteImage,

    imageAlt: "City",

    likes: 50,

    commentsCount: 14,

    comments: [
      {
        id: 1,
        name: "Judith Black",
        avatar: FavoriteImage,
        time: "1 day ago",
        text:
          "Very interesting and informative article. I learned a lot of new and interesting. 😳",
        likes: 5,

        replies: [
          {
            id: 11,
            name: "Nathan Fox",
            avatar: FavoriteImage,
            time: "5 min ago",
            text:
              "Hello! I agree, a very interesting article. Thank you very much!",
            likes: 0,
            replies: [],
          },
        ],
      },

      {
        id: 2,
        name: "Calvin Flores",
        avatar: FavoriteImage,
        time: "2 day ago",
        text:
          "Thanks for the good article. Looking forward to new ones. 🤓",
        likes: 3,
        replies: [],
      },
    ],
  },

  {
    id: 2,

    author: {
      id: 10,
      name: "Dustin Williamson",
      username: "dustin",
      avatar: FavoriteImage,
    },

    time: "Jun 18, 2020",

    content:
      "Creativity is to discover a question that has never been asked. If we bring up an electronic question, the answer we give will necessarily be unique as well.",

    image: FavoriteImage,

    imageAlt: "Video",

    likes: 50,

    commentsCount: 14,

    comments: [],
  },
];