import { X } from "lucide-react";

const CalendarModalHeader = ({ onClose }) => {
  return (
    <div className="flex items-center justify-between border-b border-[#E9EDF5] px-6 py-5">
      <h2 className="text-[28px] font-medium text-[#3F434A]">
        New Calendar
      </h2>

      <button
        type="button"
        onClick={onClose}
        className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F5F6FA] text-[#8A9099] transition-all duration-200 hover:bg-[#E9EDF5] hover:text-[#3F434A]"
      >
        <X size={18} strokeWidth={2.5} />
      </button>
    </div>
  );
};

export default CalendarModalHeader;