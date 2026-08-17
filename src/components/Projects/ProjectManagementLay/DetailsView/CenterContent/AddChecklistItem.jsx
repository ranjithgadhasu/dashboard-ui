import { Plus } from "lucide-react";

const AddChecklistItem = ({ onAdd }) => {
  return (
    <button
      onClick={onAdd}
      className="
        mt-5
        flex
        h-[54px]
        w-full
        items-center
        justify-center
        gap-3
        rounded-2xl
        border-2
        border-dashed
        border-[#D0D5DD]
        bg-[#FCFCFD]
        text-[#667085]
        transition-all
        duration-300
        hover:border-[#22983A]
        hover:bg-[#F3FFF5]
        hover:text-[#22983A]
      "
    >
      <div
        className="
          flex
          h-8
          w-8
          items-center
          justify-center
          rounded-full
          bg-white
          shadow-sm
        "
      >
        <Plus size={18} strokeWidth={2.5} />
      </div>

      <span className="text-[15px] font-semibold">
        Add Checklist Item
      </span>
    </button>
  );
};

export default AddChecklistItem;