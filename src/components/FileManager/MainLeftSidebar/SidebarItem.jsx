const SidebarItem = ({ icon, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`
        relative
        flex
        h-[56px]
        w-[56px]
        items-center
        justify-center
        rounded-2xl
        transition-all
        duration-200
        ${active ? "bg-[#B8F28A]" : "hover:bg-[#F4F6F8]"}
      `}
    >
      {active && (
        <span className="absolute -left-4 h-8 w-1 rounded-r-full bg-[#34C759]" />
      )}

      <img
        src={icon}
        alt="sidebar-icon"
        className="w-6 h-6 object-contain"
      />
    </button>
  );
};

export default SidebarItem;