import { useState } from "react";
import { Check, ChevronDown } from "lucide-react";

const statusOptions = [
  {
    id: 1,
    label: "Any Status",
  },
  {
    id: 2,
    label: "To Do",
  },
  {
    id: 3,
    label: "In Progress",
  },
  {
    id: 4,
    label: "Completed",
  },
];

const FilterStatus = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Completed");

  return (
    <div>
      {/* Title */}
      <h4 className="mb-1 text-[14px] font-normal text-[#98A2B3]">
        Status
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
            duration-200
            hover:border-[#22C55E]
          "
        >
          <div className="flex items-center gap-3">

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
            {statusOptions.map((status) => (
              <button
                key={status.id}
                type="button"
                onClick={() => {
                  setSelected(status.label);
                  setOpen(false);
                }}
                className="
                  flex
                  w-full
                  items-center
                  justify-between
                  px-4
                  py-3
                  text-left
                  transition
                  hover:bg-[#F8FAFC]
                "
              >
                <span className="text-[14px] text-[#344054]">
                  {status.label}
                </span>

                {selected === status.label && (
                  <Check
                    size={16}
                    className="text-[#22C55E]"
                  />
                )}

              </button>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

export default FilterStatus;