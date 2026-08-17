const Badge = ({
  children,
  variant = "default",
  size = "md",
  rounded = "full",
  dot = false,
  className = "",
}) => {
  const variants = {
    default: "bg-[#F3F4F6] text-[#374151]",
    primary: "bg-[#E8F6EB] text-[#22963F]",
    success: "bg-[#DCFCE7] text-[#15803D]",
    warning: "bg-[#FEF3C7] text-[#B45309]",
    danger: "bg-[#FEE2E2] text-[#DC2626]",
    info: "bg-[#DBEAFE] text-[#2563EB]",
    purple: "bg-[#F3E8FF] text-[#7E22CE]",
    dark: "bg-[#374151] text-white",
  };

  const sizes = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-3 py-1 text-sm",
    lg: "px-4 py-1.5 text-base",
  };

  const radius = {
    none: "rounded-none",
    sm: "rounded",
    md: "rounded-md",
    lg: "rounded-lg",
    full: "rounded-full",
  };

  return (
    <span
      className={`
        inline-flex
        items-center
        gap-1.5
        font-medium
        whitespace-nowrap
        ${variants[variant]}
        ${sizes[size]}
        ${radius[rounded]}
        ${className}
      `}
    >
      {dot && (
        <span
          className="h-2 w-2 rounded-full bg-current"
        />
      )}

      {children}
    </span>
  );
};

export default Badge;