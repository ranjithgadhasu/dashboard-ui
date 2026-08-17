import { 
  Inbox,
  Star,
  Send,
  Trash2,
} from "lucide-react";
import Edit from "../../../assets/icons/Edit.png"
import ImportantMail from "../../../assets/icons/ImportantMail.png"


export const mailFolders = [
  {
    id: 1,
    name: "Inbox",
    icon: Inbox,
    count: 5,
    active: true,
  },
  {
    id: 2,
    name: "Marked",
    icon: Star,
    count: 0,
    active: false,
  },
  {
    id: 3,
    name: "Drafts",
    image: Edit,
    count: 0,
    active: false,
  },
  {
    id: 4,
    name: "Sent",
    icon: Send,
    count: 0,
    active: false,
  },
  {
    id: 5,
    name: "Important",
    image: ImportantMail,
    count: 4,
    active: false,
  },
  {
    id: 6,
    name: "Deleted",
    icon: Trash2,
    count: 0,
    active: false,
  },
];

export const mailLabels = [
  {
    id: 1,
    name: "Personal",
    color: "#33D69F",
  },
  {
    id: 2,
    name: "Work",
    color: "#2D9CFF",
  },
  {
    id: 3,
    name: "Friends",
    color: "#3BCB4A",
  },
  {
    id: 4,
    name: "Family",
    color: "#F6C343",
  },
  {
    id: 5,
    name: "Social",
    color: "#42C96A",
  },
];