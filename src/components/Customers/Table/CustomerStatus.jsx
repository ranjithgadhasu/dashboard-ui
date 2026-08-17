const statusStyles = {
  Active: {
    badge: "bg-[#EAF8F0] text-[#22963F]",
    dot: "bg-[#22963F]",
  },
  Blocked: {
    badge: "bg-[#FDECEC] text-[#E74C3C]",
    dot: "bg-[#E74C3C]",
  },
};

const CustomerStatus = ({ status }) => {
  const style = statusStyles[status] || {
    badge: "bg-[#F3F4F6] text-[#6B7280]",
    dot: "bg-[#6B7280]",
  };

  return (
    <span
      className={`inline-flex h-[30px] items-center gap-2 rounded-full px-3 text-[13px] font-medium customer-status-badge ${style.badge}`}
    >
      <span
        className={`h-2 w-2 rounded-full customer-status-dot ${style.dot}`}
      />

      <span className="customer-status-text">
        {status}
      </span>
    </span>
  );
};

export default CustomerStatus;