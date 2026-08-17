import { MoreVertical, Check } from "lucide-react";
import CalendarMenu from "./CalendarMenu";

const CalendarItem = ({
  calendar,
  open,
  onToggle,
}) => {
  return (
    <div className="relative flex items-center justify-between rounded-lg px-2 py-2 hover:bg-gray-50">
      <div className="flex items-center gap-3">

        {/* Checkbox */}
        <span
          className="flex h-5 w-5 items-center justify-center rounded-md"
          style={{ backgroundColor: calendar.color }}
        >
          <Check
            size={13}
            strokeWidth={3}
            className="text-white"
          />
        </span>

        {/* Calendar Name */}
        <span className="text-[15px] font-medium text-[#3F434A]">
          {calendar.name}
        </span>

      </div>

      <button
        onClick={onToggle}
        className="rounded-md p-1 hover:bg-gray-100"
      >
        <MoreVertical
          size={18}
          className="text-[#8A9099]"
        />
      </button>

      {open && <CalendarMenu />}
    </div>
  );
};

export default CalendarItem;