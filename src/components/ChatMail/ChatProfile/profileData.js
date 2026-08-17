import FavoriteImage from "../../../assets/images/FavoriteImage.png";
import BG from "../../../assets/images/BG.png";

// Media Images
import AttachmentOne from "../../../assets/images/AttachmentOne.png";
import AttachmentTwo from "../../../assets/images/AttachmentTwo.png";
import AttachmentThree from "../../../assets/images/AttachmentThree.png";
import AttachmentFour from "../../../assets/images/AttachmentFour.png";
import AttachmentFive from "../../../assets/images/AttachmentFive.png";
import AttachmentSix from "../../../assets/images/AttachmentSix.png";
import AvatarFemail from "../../../assets/images/AvatarFemail.png";

export const profileData = {
  id: 1,

  // Profile
  background: BG,
  avatarIllustration: AvatarFemail,
  avatar: FavoriteImage,
  name: "Jane Wilson",
  designation: "Creative Director",
  online: true,

  // Contact Info
  info: {
    email: "example@gmail.com",
    phone: "+123-4567-8800",
    birthday: "17 March, 1995",
    location: "New York, NY",
  },

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
      role: "Project Manager",
      avatar: FavoriteImage,
      online: false,
    },
  ],


  // Shared Media
  media: [
    {
      id: 1,
      image: AttachmentOne,
      title: "Image 1",
    },
    {
      id: 2,
      image: AttachmentTwo,
      title: "Image 2",
    },
    {
      id: 3,
      image: AttachmentThree,
      title: "Image 3",
    },
    {
      id: 4,
      image: AttachmentFour,
      title: "Image 4",
    },
    {
      id: 5,
      image: AttachmentFive,
      title: "Image 5",
    },
    {
      id: 6,
      image: AttachmentSix,
      title: "Image 6",
    },
  ],
};
 