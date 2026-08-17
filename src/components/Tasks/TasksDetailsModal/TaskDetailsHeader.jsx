import {
  Check,
  Eye,
  ChevronDown,
  Link2,
  MoreHorizontal,
} from "lucide-react";

const TaskDetailsHeader = ({ task }) => {
  return (
    <div className="mb-4 flex items-center justify-between">

      {/* Left */}
      <div className="flex items-center gap-3">

        {/* Status */}
        <button
          type="button"
          className="
            flex
            h-[40px]
            w-[130px]
            items-center
            gap-2
            rounded-xl
            bg-[#22983A]
            px-4
            text-[15px]
            font-normal
            text-white
          "
        >
          <Check
            size={15}
            strokeWidth={3}
          />

          Complete
        </button>

        {/* Views */}
        <button
          type="button"
          className="
            flex
            h-9
            items-center
            gap-2
            rounded-xl
            bg-[#F8F9FB]
            px-4
            text-[#667085]
          "
        >
          <Eye size={16} />

          <span className="text-[13px] font-medium">
            {task.views}
          </span>

          <ChevronDown size={14} />
        </button>

      </div>

      {/* Right */}
      <div className="flex items-center gap-3">

        {/* Link */}
        <button
          type="button"
          className="
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            transition
            hover:bg-[#F8F9FB]
          "
        >
          <Link2
            size={18}
            className="text-[#667085]"
          />
        </button>

        {/* Menu */}
        <button
          type="button"
          className="
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            transition
            hover:bg-[#F8F9FB]
          "
        >
          <MoreHorizontal
            size={18}
            className="text-[#667085]"
          />
        </button>

      </div>

    </div>
  );
};

export default TaskDetailsHeader;