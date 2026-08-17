import { MoreVertical } from "lucide-react";

const TableMenu = ({ onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
        flex
        h-8
        w-8
        items-center
        justify-center
        rounded-lg
        text-[#9CA3AF]
        transition-all
        duration-200
        hover:bg-[#F3F4F6]
        hover:text-[#4B5563]
      "
    >
      <MoreVertical size={18} strokeWidth={2} />
    </button>
  );
};

export default TableMenu;