import { Plus } from "lucide-react";

const AddTaskRow = () => {
  return (
    <button
      className="
        mt-4
        flex
        h-[74px]
        w-full
        items-center
        gap-3
        rounded-[22px]
        border
        border-dashed
        border-[#E4E7EC]
        bg-white
        px-7
        hover:bg-[#F8FFF9]
      "
    >
      <Plus
        size={18}
        className="text-[#22983A]"
      />

      <span className="text-[18px] font-medium text-[#22983A]">
        Add Task
      </span>
    </button>
  );
};

export default AddTaskRow;