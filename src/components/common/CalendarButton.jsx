import { useState } from "react";
import { CalendarDays, ChevronDown } from "lucide-react";

const options = [
 "19 Aug – 25 Aug",
 "19 Aug – 01 Sep",
  "02 Sep – 08 Sep",
];

const CalendarButton = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("19 Aug – 25 Aug");

  return (
    <div className="relative">

      <button
        onClick={() => setOpen(!open)}
        className="flex h-[46px] items-center gap-3 rounded-[16px] border border-[#E9EEF5] bg-white px-5 transition hover:bg-[#F8F9FB]"
      >
        <CalendarDays
          size={18}
          className="text-[#8A9099]"
        />

        <span className="text-[16px] font-medium text-[#3F434A]">
          {selected}
        </span>

        <ChevronDown
          size={16}
          className={`text-[#8A9099] transition ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="absolute right-0 z-50 mt-2 w-56 overflow-hidden rounded-2xl border border-[#E9EEF5] bg-white shadow-xl">

          {options.map((item) => (
            <button
              key={item}
              onClick={() => {
                setSelected(item);
                setOpen(false);
              }}
              className={`w-full px-5 py-3 text-left text-[15px] transition hover:bg-[#EEF9F1] hover:text-[#21943A] ${
                selected === item
                  ? "bg-[#EEF9F1] text-[#21943A]"
                  : "text-[#3F434A]"
              }`}
            >
              {item}
            </button>
          ))}

        </div>
      )}

    </div>
  );
};

export default CalendarButton;