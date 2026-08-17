import {
  CalendarDays,
  CheckCircle2,
} from "lucide-react";
import TaskStatusDots from "./TaskStatusDots";

const TaskCompletedItem = ({ task }) => {
  return (
    <div
      className="
        flex
        items-center
        justify-between
        rounded-[22px]
        border
        border-[#E9EEF5]
        bg-white
        px-6
        py-5
        transition-all
        duration-200
        hover:border-[#DDE5EE]
        hover:shadow-sm
      "
    >
      {/* Left */}
      <div className="flex items-center gap-5">

        {/* Completed Icon */}
        <CheckCircle2
          size={24}
          className="text-[#22C55E]"
        />

        {/* Title */}
        <h4
          className="
            text-[16px]
            font-medium
            text-[#98A2B3]
            line-through
          "
        >
          {task.title}
        </h4>

      </div>

      {/* Right */}
      <div className="flex items-center gap-10">

        {/* Date */}
        <div className="flex items-center gap-2">

          <CalendarDays
            size={16}
            className="text-[#98A2B3]"
          />

          <span className="text-[15px] text-[#667085]">
            {task.date}
          </span>

        </div>

        {/* Status Dots */}
<div className="ml-12">
  <TaskStatusDots
    colors={task.statusColors}
  />
</div>

        {/* Members */}
        <div className="-space-x-2 flex">

          {task.members?.map((avatar, index) => (
            <img
              key={index}
              src={avatar}
              alt=""
              className="
                h-9
                w-9
                rounded-full
                border-2
                border-white
                object-cover
              "
            />
          ))}

        </div>

      </div>

    </div>
  );
};

export default TaskCompletedItem;