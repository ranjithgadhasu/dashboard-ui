import { Plus } from "lucide-react";

const AddChecklistItem = () => {
  return (
    <button
      className="
        mt-6
        flex
        items-center
        gap-3
        text-[14px]
        font-normal
        text-[#22983A]
        transition
        hover:opacity-80
      "
    >
      <Plus size={22} />

      Add Checklist Item
    </button>
  );
};

export default AddChecklistItem;