const StatusBadge = ({ status }) => {
  const badgeStyles = {
    Shipped: {
      bg: "bg-[#EEF9F1]",
      text: "text-[#22963F]",
    },
    Processing: {
      bg: "bg-[#FFF7ED]",
      text: "text-[#F97316]",
    },
    Cancelled: {
      bg: "bg-[#FEF2F2]",
      text: "text-[#EF4444]",
    },
    Pending: {
      bg: "bg-[#FEFCE8]",
      text: "text-[#CA8A04]",
    },
    Refunded: {
      bg: "bg-[#EEF2FF]",
      text: "text-[#4F46E5]",
    },
  };

  const style = badgeStyles[status] || {
    bg: "bg-[#F3F4F6]",
    text: "text-[#6B7280]",
  };

  return (
    <span
      className={`
        inline-flex
        items-center
        justify-center
        min-w-[82px]
        h-[28px]
        rounded-full
        px-3
        text-[12px]
        font-medium
        ${style.bg}
        ${style.text}
      `}
    >
      {status}
    </span>
  );
};

export default StatusBadge;