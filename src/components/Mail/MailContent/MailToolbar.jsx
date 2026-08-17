import {
  Reply,
  ReplyAll,
  Forward,
  Archive,
  Trash2,
  MailOpen,
  Star,
  Printer,
} from "lucide-react";

const MailToolbar = ({
  mail,
  onReply,
  onReplyAll,
  onForward,
  onArchive,
  onDelete,
  onToggleStar,
  onMarkUnread,
  onPrint,
}) => {
  const actions = [
    {
      label: "Reply",
      icon: Reply,
      onClick: onReply,
    },
    {
      label: "Reply All",
      icon: ReplyAll,
      onClick: onReplyAll,
    },
    {
      label: "Forward",
      icon: Forward,
      onClick: onForward,
    },
    {
      label: "Archive",
      icon: Archive,
      onClick: onArchive,
    },
    {
      label: "Delete",
      icon: Trash2,
      onClick: onDelete,
      danger: true,
    },
    {
      label: "Unread",
      icon: MailOpen,
      onClick: onMarkUnread,
    },
    {
      label: mail?.starred ? "Unstar" : "Star",
      icon: Star,
      onClick: onToggleStar,
      active: mail?.starred,
    },
    {
      label: "Print",
      icon: Printer,
      onClick: onPrint,
    },
  ];

  return (
    <div className="rounded-xl border border-[#E9EDF5] bg-white p-4 shadow-sm">
  
      <div className="flex flex-wrap gap-3">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <button
              key={action.label}
              type="button"
              onClick={action.onClick}
              className={`
                flex items-center gap-2
                rounded-lg
                border
                px-4 py-2.5
                text-sm font-medium
                transition-all duration-200

                ${
                  action.danger
                    ? "border-red-200 text-red-600 hover:bg-red-50"
                    : action.active
                    ? "border-yellow-200 bg-yellow-50 text-yellow-600"
                    : "border-[#E9EDF5] text-[#525C60] hover:border-[#22963F] hover:bg-[#EEF8F1] hover:text-[#22963F]"
                }
              `}
            >
              <Icon
                size={18}
                fill={
                  action.label === "Unstar"
                    ? "#F4C542"
                    : "none"
                }
              />

              <span>{action.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default MailToolbar;