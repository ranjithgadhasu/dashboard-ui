import { X } from "lucide-react";

const EventModalHeader = ({ onClose }) => {
  return (
    <div className="flex items-center justify-between px-7 pt-7">

      <h2 className="text-[28px] font-medium text-[#3F434A]">
        New Event
      </h2>

      <button
        onClick={onClose}
        className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F6F7F9]"
      >
        <X size={18} />
      </button>

    </div>
  );
};
export default EventModalHeader;