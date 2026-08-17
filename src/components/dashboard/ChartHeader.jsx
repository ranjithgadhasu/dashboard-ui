import { useEffect, useRef, useState } from "react";
import { CalendarDays, ChevronDown } from "lucide-react";

const options = [
  "19 Aug - 25 Aug",
  "26 Aug - 01 Sep",
  "02 Sep - 08 Sep",
];

const ChartHeader = ({ title }) => {
  const [selected, setSelected] = useState(options[0]);
  const [open, setOpen] = useState(false);

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="mb-6 flex items-center justify-between">
      <h2 className="text-[20px] font-medium text-[#3F434A]">
        {title}
      </h2>

      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-3 rounded-xl border border-[#ECECEC] bg-white px-5 py-3"
        >
          <CalendarDays
            size={18}
            className="text-[#8A9099]"
          />

          <span className="text-sm text-[#3F434A]">
            {selected}
          </span>

          <ChevronDown
            size={16}
            className={`transition ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>

        {open && (
          <div className="absolute right-0 z-50 mt-2 w-52 overflow-hidden rounded-xl border border-[#ECECEC] bg-white shadow-xl">
            {options.map((option) => (
              <button
                key={option}
                onClick={() => {
                  setSelected(option);
                  setOpen(false);
                }}
                className="w-full px-5 py-3 text-left text-sm text-[#3F434A] transition hover:bg-[#B9EB8E]"
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChartHeader;