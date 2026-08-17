import { CalendarDays, ChevronDown } from "lucide-react";
import { useState } from "react";

const options = [
  "Due anytime",
  "Today",
  "Tomorrow",
  "This Week",
  "Next Week",
  "Overdue",
];

const FilterDueDate = () => {
  const [selected, setSelected] = useState("Due anytime");
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* Title */}
      <h4 className="mb-1 text-[14px] font-normal text-[#98A2B3]">
        Due Date
      </h4>
      <div className="relative">
        {/* Select */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="
            flex
            h-[40px]
            w-[343px]
            items-center
            justify-between
            rounded-xl
            border
            border-[#E4E7EC]
            bg-white
            px-4
            transition-all
            hover:border-[#22C55E]
          "
        >
          <div className="flex items-center gap-3">
            <CalendarDays
              size={18}
              className="text-[#667085]"
            />

            <span className="text-[14px] text-[#344054]">
              {selected}
            </span>
          </div>

          <ChevronDown
            size={18}
            className={`text-[#98A2B3] transition ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* Dropdown */}
        {open && (
          <div
            className="
              absolute
              left-0
              top-14
              z-50
              w-full
              overflow-hidden
              rounded-xl
              border
              border-[#EEF2F7]
              bg-white
              shadow-xl
            "
          >
            {options.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => {
                  setSelected(item);
                  setOpen(false);
                }}
                className="
                  w-full
                  px-4
                  py-3
                  text-left
                  text-[14px]
                  text-[#344054]
                  transition
                  hover:bg-[#F8FAFC]
                "
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterDueDate;