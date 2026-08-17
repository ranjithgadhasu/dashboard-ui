import { Plus } from "lucide-react";

const AddTaskButton = ({ onClick }) => {
  return (
    <div className="mt-6 flex justify-center">
      <button
        type="button"
        onClick={onClick}
        className="
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-full
          text-[#22C55E]
          transition-all
          duration-200
        bg-[#22C55E]
        text-white
          hover:scale-105
        "
      >
        <Plus size={18} strokeWidth={2.5} />
      </button>
    </div>
  );
};

export default AddTaskButton;