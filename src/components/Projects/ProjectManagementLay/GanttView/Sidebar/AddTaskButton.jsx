import { Plus } from "lucide-react";

const AddTaskButton = ({ onClick }) => {
  return (
    <div className="border-t border-[#EEF2F7] p-5">

      <button
        onClick={onClick}
        className="
          flex
          w-full
          items-start
          justify-start
          gap-2
          px-4
          py-3
          text-[14px]
          font-medium
          text-[#22C55E]
          transition-all
          duration-200
          hover:bg-[#22C55E]
          hover:text-white
        "
      >
        <Plus size={18} />

        Add List

      </button>

    </div>
  );
};

export default AddTaskButton;