const IconButton = ({
  icon,
  onClick,
  active = false,
}) => {

  return (
    <button
      onClick={onClick}
      className={`
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-xl
        transition-all
        ${
          active
            ? "bg-[#22C55E] text-white"
            : "bg-white text-[#667085] hover:bg-[#F5F7FA]"
        }
      `}
    >
      {icon}
    </button>
  );
};

export default IconButton;