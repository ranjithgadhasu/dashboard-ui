import { useState } from "react";
import { Plus } from "lucide-react";
import LabelDropdown from "./LabelDropdown";

const TaskLabels = ({
  labels = [],
}) => {
  const [openLabels, setOpenLabels] = useState(false);

  return (
    <div className="relative mb-8">

      {/* Title */}
      <p className="mb-4 text-[14px] font-medium uppercase tracking-[0.12em] text-[#98A2B3]">
        Labels
      </p>

      {/* Labels */}
      <div className="flex flex-wrap items-center gap-3">

        {labels.map((label) => (
          <div
            key={label.id}
            className="rounded-xl px-4 py-2"
            style={{
              backgroundColor: label.color,
            }}
          >
            <span className="text-[14px] font-medium text-white">
              {label.name}
            </span>
          </div>
        ))}

        {/* Add Label Button */}
        <button
          type="button"
          onClick={() => setOpenLabels((prev) => !prev)}
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-md
            border-[3px]
            border-white
            bg-[#F8F9FB]
            shadow-sm
            transition
            hover:bg-[#EEF2F7]
          "
        >
          <Plus
            size={18}
            className="text-[#98A2B3]"
          />
        </button>

      </div>

      {/* Label Dropdown */}
      {openLabels && (
        <LabelDropdown
          onClose={() => setOpenLabels(false)}
        />
      )}

    </div>
  );
};

export default TaskLabels;