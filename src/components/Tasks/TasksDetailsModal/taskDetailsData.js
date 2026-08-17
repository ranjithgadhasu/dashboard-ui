// ===============================
// Avatars
// ===============================
import FavoriteImage from "../../../assets/images/FavoriteImage.png";


// ===============================
// Attachments Preview
// ===============================
import AtartchZIP from "../../../assets/images/AtartchZIP.png";
import PictureOne from "../../../assets/images/PictureOne.png";
import PictureTwo from "../../../assets/images/PictureTwo.png";

// ===============================
// Comment Images
// ===============================
import CommentsOne from "../../../assets/images/CommentsOne.png";
import CommentsTwo from "../../../assets/images/CommentsTwo.png";
import CommentsThree from "../../../assets/images/CommentsThree.png";

export const taskDetails = {
  id: 1,

  status: "Complete",

  title: "Template Progress",

  views: 2,

  assignedTo: [
    FavoriteImage,
    FavoriteImage,
    FavoriteImage,
  ],

  createdBy: {
    name: "Shane Black",
    avatar: FavoriteImage,
  },

  labels: [
    {
      id: 1,
      name: "Design",
      color: "#41C96B",
    },
    {
      id: 2,
      name: "Frontend",
      color: "#59D4C4",
    },
    {
      id: 3,
      name: "Backend",
      color: "#FF6E67",
    },
  ],

  dueDate: "Jan 17, 2020, 10:50 AM",

  description:
    "We need to develop several options (Inbox template, Chat template, tasks template, Projects template) of cool user interface design templates - to carefully work out the smallest details.",

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

  checklistProgress: 75,

  attachments: [
    {
      id: 1,
      name: "Wireframe UI Kit.zip",
      preview: AtartchZIP,
      size: "5.8 MB",
      uploaded: "Uploaded on 15.01.2020 at 11:45",
      type: "zip",
    },
    {
      id: 2,
      name: "Picture 01.png",
      preview: PictureOne,
      size: "1.2 MB",
      uploaded: "Uploaded on 15.01.2020 at 11:50",
      type: "image",
    },
    {
      id: 3,
      name: "Picture 02.png",
      preview: PictureTwo,
      size: "1.4 MB",
      uploaded: "Uploaded on 15.01.2020 at 11:50",
      type: "image",
    },
  ],

  comments: [
    {
      id: 1,
      user: "Jane Wilson",
      avatar: FavoriteImage,
      time: "5 min ago",
      message:
        "Hi Cody, any progress on the project? 🙂",
    },

    {
      id: 2,
      user: "Jacob Hawkins",
      avatar: FavoriteImage,
      time: "1 day ago",
      message:
        "Hi Jane! Yes. I just finished developing the 'Chat' template.",

      images: [
        CommentsOne,
        CommentsTwo,
        CommentsThree,
      ],

      moreImages: 3,
    },

    {
      id: 3,
      user: "Regina Cooper",
      avatar: FavoriteImage,
      time: "5 min ago",
      message:
        "Hi Jacob. Will you be able to finish the last item of the task by tomorrow?",
    },
  ],

  activity: [
    {
      id: 1,
      text: "Task created by Shane Black",
      date: "Jan 15, 2020",
    },
    {
      id: 2,
      text: "Checklist updated",
      date: "Jan 16, 2020",
    },
    {
      id: 3,
      text: "Task marked as Complete",
      date: "Jan 17, 2020",
    },
  ],
};