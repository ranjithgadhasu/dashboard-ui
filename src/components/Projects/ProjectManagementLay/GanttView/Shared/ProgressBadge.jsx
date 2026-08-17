const ProgressBadge = ({
  label,
  color = "green",
  size = "md",
}) => {
  const colors = {
    green: "bg-[#ECFDF3] text-[#16A34A]",
    yellow: "bg-[#FFF7ED] text-[#F59E0B]",
    red: "bg-[#FEF3F2] text-[#EF4444]",
    blue: "bg-[#EFF8FF] text-[#2563EB]",
    gray: "bg-[#F2F4F7] text-[#667085]",
    purple: "bg-[#F4F3FF] text-[#7C3AED]",
  };

  const sizes = {
    sm: "px-2.5 py-1 text-[11px]",
    md: "px-3 py-1.5 text-[12px]",
    lg: "px-4 py-2 text-[14px]",
  };

  return (
    <span
      className={`
        inline-flex
        items-center
        justify-center
        rounded-full
        font-medium
        ${colors[color]}
        ${sizes[size]}
      `}
    >
      {label}
    </span>
  );
};

export default ProgressBadge;