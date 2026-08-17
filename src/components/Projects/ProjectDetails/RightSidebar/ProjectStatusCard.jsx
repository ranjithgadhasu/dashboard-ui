import { useState } from "react";
import {
  Check,
  ChevronDown,
} from "lucide-react";

const STATUS_OPTIONS = [
  {
    id: "Started",
    color: "#F9C73D",
  },
  {
    id: "On Hold",
    color: "#27C2E0",
  },
  {
    id: "Completed",
    color: "#43C466",
  },
];

const ProjectStatusCard = ({ project }) => {
  const [open, setOpen] = useState(false);

  const [selected, setSelected] = useState(
    project?.status || "Started"
  );

  const current = STATUS_OPTIONS.find(
    item => item.id === selected
  );

  return (
    <div className="relative">

      {/* Selected */}
      <button
        onClick={() => setOpen(!open)}
        className="
          flex
          h-[48px]
          w-full
          items-center
          justify-between
          rounded-2xl
          border
          border-[#EEF2F7]
          bg-[#FCFCFD]
          px-5
        "
      >
        <div className="flex items-center gap-3">

          <Check
            size={18}
            className="text-[#344054]"
          />

          <span className="text-[15px] font-medium text-[#344054]">
            {current.id}
          </span>

        </div>

        <ChevronDown
          size={18}
          className={`
            text-[#98A2B3]
            transition
            ${open ? "rotate-180" : ""}
          `}
        />

      </button>

      {/* Dropdown */}
      {open && (
        <div
          className="
            absolute
            top-[58px]
            z-50
            w-full
            overflow-hidden
            rounded-3xl
            bg-white
            py-3
            shadow-[0_20px_45px_rgba(16,24,40,.12)]
          "
        >
          {STATUS_OPTIONS.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setSelected(item.id);
                setOpen(false);
              }}
              className="
                flex
                h-[48px]
                w-full
                items-center
                justify-between
                px-8
                transition
                hover:bg-[#F8FAFC]
              "
            >
              <div className="flex items-center gap-4">

                <div
                  className="h-4 w-4 rounded-md"
                  style={{
                    background: item.color,
                  }}
                />

                <span className="text-[15px] text-[#4B5563]">
                  {item.id}
                </span>

              </div>

              {selected === item.id && (
                <Check
                  size={18}
                  className="text-[#22983A]"
                />
              )}
            </button>
          ))}
        </div>
      )}

    </div>
  );
};

export default ProjectStatusCard;