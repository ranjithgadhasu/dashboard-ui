import { ChevronDown, SlidersHorizontal, Plus } from "lucide-react";
import { ganttData } from "../ganttData";
import"./GanttHeader.css"

const GanttHeader = () => {
  const { header } = ganttData;

  return (
    <div
      className="
        flex
        items-center
        justify-between
        border-b
        border-[#EEF2F7]
        bg-white
        px-8
        py-5
        gantt-header-bar
      "
    >
      {/* Left */}
      <button
        className="
          flex
          items-center
          gap-2
          text-[22px]
          font-medium
          text-[#344054]
          gantt-header-title-wrapper
        "
      >
        <span className="gantt-header-title">{header.title}</span>

        <ChevronDown
          size={18}
          className="text-[#98A2B3] gantt-header-title-icon"
        />
      </button>

      {/* Center */}
      <div className="flex items-end gap-2 gantt-header-date">
        <h2
          className="
            text-[22px]
            font-medium
            text-[#344054]
            gantt-header-month
          "
        >
          {header.month}
        </h2>

        <span
          className="
            mb-1
            text-[15px]
            text-[#98A2B3]
            gantt-header-year
          "
        >
          {header.year}
        </span>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4 gantt-header-actions">
        {/* Filter */}
        <button
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-xl
            border
            border-[#EEF2F7]
            bg-white
            transition
            hover:bg-[#F8FAFC]
            gantt-header-filter
          "
        >
          <SlidersHorizontal size={18} className="text-[#667085]" />
        </button>

        {/* Add Project */}
        <button
          className="
            flex
            h-11
            items-center
            gap-2
            rounded-xl
            bg-[#22C55E]
            px-5
            text-[14px]
            font-medium
            text-white
            transition
            hover:bg-[#16A34A]
            gantt-header-add
          "
        >
          <Plus size={18} />

          <span>Add Project</span>
        </button>
      </div>
    </div>
  );
};

export default GanttHeader;
