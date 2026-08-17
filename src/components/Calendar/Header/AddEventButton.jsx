import { Plus } from "lucide-react";

const AddEventButton = ({ onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex h-11 items-center gap-2 rounded-lg bg-[#22963F] px-5 text-[14px] font-medium text-white shadow-sm transition-all duration-200 hover:bg-[#1D8137] active:scale-95"
    >
      <Plus size={16} strokeWidth={2.5} />
      <span>Add Event</span>
    </button>
  );
};

export default AddEventButton;