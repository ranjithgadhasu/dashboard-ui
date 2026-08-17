const statusConfig = {
  Unread: {
    label: "Unread",
    bg: "bg-[#E8F5EC]",
    text: "text-[#22963F]",
  },
  Read: {
    label: "Read",
    bg: "bg-[#F3F4F6]",
    text: "text-[#6B7280]",
  },
  Important: {
    label: "Important",
    bg: "bg-[#FFF4E5]",
    text: "text-[#F59E0B]",
  },
  Draft: {
    label: "Draft",
    bg: "bg-[#F3E8FF]",
    text: "text-[#9333EA]",
  },
  Sent: {
    label: "Sent",
    bg: "bg-[#E0F2FE]",
    text: "text-[#0284C7]",
  },
  Deleted: {
    label: "Deleted",
    bg: "bg-[#FEE2E2]",
    text: "text-[#DC2626]",
  },
};

const MailStatus = ({ status }) => {
  const config = statusConfig[status];

  if (!config) return null;

  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${config.bg} ${config.text}`}
    >
      {config.label}
    </span>
  );
};

export default MailStatus;