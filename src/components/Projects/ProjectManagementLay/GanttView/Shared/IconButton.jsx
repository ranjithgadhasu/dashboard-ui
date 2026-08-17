const IconButton = ({
  icon: Icon,
  onClick,
  active = false,
  size = 18,
  rounded = "xl",
  className = "",
  title = "",
}) => {
  return (
    <button
      title={title}
      onClick={onClick}
      className={`
        flex
        h-11
        w-11
        items-center
        justify-center
        rounded-${rounded}
        border
        border-[#EEF2F7]
        transition-all
        duration-200
        ${
          active
            ? "bg-[#22C55E] border-[#22C55E] text-white shadow-sm"
            : "bg-white text-[#98A2B3] hover:bg-[#F8FAFC] hover:text-[#22C55E]"
        }
        ${className}
      `}
    >
      <Icon size={size} />
    </button>
  );
};

export default IconButton;