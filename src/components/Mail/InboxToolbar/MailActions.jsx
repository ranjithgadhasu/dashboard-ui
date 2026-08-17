

import {
  MdArchive,
  MdReport,
  MdDeleteOutline,
  MdMarkEmailRead,
  MdAccessTime,
  MdDriveFileMove,
  MdLabelOutline,
  MdMoreVert,
} from "react-icons/md";

const actions = [
  { icon: MdArchive, label: "Archive" },
  { icon: MdReport, label: "Report Spam" },
  { icon: MdDeleteOutline, label: "Delete" },
  { icon: MdMarkEmailRead, label: "Mark as Read" },
  { icon: MdAccessTime, label: "Snooze" },
  { icon: MdDriveFileMove, label: "Move" },
  { icon: MdLabelOutline, label: "Labels" },
];

const MailActions = () => {
  return (
    <div className="flex items-center justify-between border-b border-gray-200 bg-white px-4 py-2">
      {/* Left Actions */}
      <div className="flex items-center gap-1">
        {actions.map(({ icon: Icon, label }) => (
          <button
            key={label}
            title={label}
            className="rounded-full p-2 text-gray-600 transition hover:bg-gray-100 hover:text-gray-900"
          >
            <Icon size={20} />
          </button>
        ))}
      </div>

      {/* Right Action */}
      <button
        title="More"
        className="rounded-full p-2 text-gray-600 transition hover:bg-gray-100 hover:text-gray-900"
      >
        <MdMoreVert size={20} />
      </button>
    </div>
  );
};

export default MailActions;