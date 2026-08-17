const IconButton = ({
  icon: Icon,
  onClick,
  size = "md",
  variant = "default",
  rounded = "lg",
  disabled = false,
  title,
  ariaLabel,
  className = "",
}) => {
  const sizes = {
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-12 w-12",
  };

  const variants = {
    default:
      "bg-white text-[#525C60] border border-[#E9EDF5] hover:bg-[#F5F7FA]",
    primary:
      "bg-[#22963F] text-white hover:bg-[#1C7C35]",
    danger:
      "bg-[#EF4444] text-white hover:bg-[#DC2626]",
    ghost:
      "bg-transparent text-[#525C60] hover:bg-[#F5F7FA]",
    light:
      "bg-[#F8F9FC] text-[#525C60] hover:bg-[#EEF2F7]",
  };

  const radius = {
    none: "rounded-none",
    sm: "rounded",
    md: "rounded-md",
    lg: "rounded-lg",
    full: "rounded-full",
  };

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      title={title}
      aria-label={ariaLabel || title}
      className={`
        inline-flex
        items-center
        justify-center
        transition
        duration-200
        ${sizes[size]}
        ${variants[variant]}
        ${radius[rounded]}
        ${
          disabled
            ? "cursor-not-allowed opacity-50"
            : ""
        }
        ${className}
      `}
    >
      {Icon && <Icon size={18} />}
    </button>
  );
};

export default IconButton;