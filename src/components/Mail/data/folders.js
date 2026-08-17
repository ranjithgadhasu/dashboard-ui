import {
  Inbox,
  Send,
  FileText,
  Archive,
  Trash2,
} from "lucide-react";

export const folders = [
  {
    id: "inbox",
    label: "Inbox",
    icon: Inbox,
    count: 18,
  },
  {
    id: "sent",
    label: "Sent",
    icon: Send,
    count: 5,
  },
  {
    id: "draft",
    label: "Draft",
    icon: FileText,
    count: 3,
  },
  {
    id: "archive",
    label: "Archive",
    icon: Archive,
    count: 12,
  },
  {
    id: "trash",
    label: "Trash",
    icon: Trash2,
    count: 2,
  },
];