import { useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  MoreHorizontal,
} from "lucide-react";

const TaskListHeader = ({
  title,
  count,
  onMenuClick,
  defaultOpen = true,
  onToggle,
}) => {
  const [open, setOpen] = useState(defaultOpen);

  const handleToggle = () => {
    const value = !open;
    setOpen(value);

    if (onToggle) {
      onToggle(value);
    }
  };

  return (
    <div className="mb-5 flex items-center justify-between">

      {/* Left */}
      <button
        type="button"
        onClick={handleToggle}
        className="
          flex
          items-center
          gap-3
          rounded-lg
          px-2
          py-1
          transition
          hover:bg-[#F8FAFC]
        "
      >
        {open ? (
          <ChevronDown
            size={18}
            className="text-[#98A2B3]"
          />
        ) : (
          <ChevronRight
            size={18}
            className="text-[#98A2B3]"
          />
        )}

        <h3
          className="
            text-[18px]
            font-semibold
            uppercase
            tracking-[0.04em]
            text-[#344054]
          "
        >
          {title}
        </h3>

        <span
          className="
            rounded-md
            bg-[#F2F4F7]
            px-2
            py-0.5
            text-[13px]
            font-medium
            text-[#667085]
          "
        >
          {count}
        </span>

      </button>

      {/* Right */}
      <button
        type="button"
        onClick={onMenuClick}
        className="
          rounded-lg
          p-2
          transition
          hover:bg-[#F8FAFC]
        "
      >
        <MoreHorizontal
          size={18}
          className="text-[#98A2B3]"
        />
      </button>

    </div>
  );
};

export default TaskListHeader;