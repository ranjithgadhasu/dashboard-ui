import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { calendarOptions } from "./EventData";

const EventCalendarSelect = () => {
  const [selected, setSelected] = useState(calendarOptions[0]);
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <label className="mb-2 block text-[14px] text-[#8A9099]">
        Calendar
      </label>

      {/* Selected */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex h-14 w-full items-center justify-between rounded-2xl border border-[#E9EDF5] bg-white px-5"
      >
        <div className="flex items-center gap-4">
          <span
            className="h-5 w-5 rounded-md"
            style={{ backgroundColor: selected.color }}
          />
          <span className="text-[14px] text-[#3F434A]">
            {selected.name}
          </span>
        </div>

        <ChevronDown size={18} />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute left-0 right-0 top-full z-20 mt-1 rounded-2xl border border-[#E9EDF5] bg-white shadow-lg">
          {calendarOptions.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => {
                setSelected(item);
                setOpen(false);
              }}
              className="flex w-full items-center gap-4 px-5 py-3 text-left hover:bg-gray-50"
            >
              <span
                className="h-5 w-5 rounded-md"
                style={{ backgroundColor: item.color }}
              />
              <span>{item.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default EventCalendarSelect;