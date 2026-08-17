const StatusBadge = ({ status }) => {
  const isAvailable = status === "Available";

  return (
    <span
      className={`inline-flex items-center justify-center rounded-full px-4 py-[6px] text-[13px] font-medium ${
        isAvailable
          ? "bg-[#ECF9F1] text-[#22963F]"
          : "bg-[#FFF5ED] text-[#F97316]"
      }`}
    >
      {status}
    </span>
  );
};

export default StatusBadge;