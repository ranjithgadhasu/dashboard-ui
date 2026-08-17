import {
  CalendarDays,
  Circle,
  GripVertical,
  Paperclip,
  MessageSquare,
  CheckSquare,
} from "lucide-react";
import TaskStatusDots from "./TaskStatusDots";

const TaskProgressItem = ({ task }) => {
  return (
   <div
  className={`
    flex
    items-center
    justify-between
    rounded-[22px]
    border
    border-[#E9EEF5]
    ${task.active ? "bg-[#F8FAFC]" : "bg-white"}
    px-6
    py-5
    transition-all
    duration-200
    hover:border-[#DDE5EE]
    hover:shadow-sm
  `}
>
      {/* Left */}
      <div className="flex items-center gap-4">

        {/* Drag */}
        <GripVertical
          size={18}
          className="text-[#98A2B3]"
        />

        {/* Checkbox */}
        <Circle
          size={22}
          className="text-[#E4E7EC]"
        />

        {/* Title + Meta */}
        <div>

          <h4 className="text-[16px] font-medium text-[#344054]">
            {task.title}
          </h4>

          <div className="mt-2 flex items-center gap-6">

            <div className="flex items-center gap-1.5">
              <Paperclip
                size={15}
                className="text-[#98A2B3]"
              />
              <span className="text-[14px] text-[#667085]">
                {task.attachments}
              </span>
            </div>

            <div className="flex items-center gap-1.5">
              <MessageSquare
                size={15}
                className="text-[#98A2B3]"
              />
              <span className="text-[14px] text-[#667085]">
                {task.comments}
              </span>
            </div>

            <div className="flex items-center gap-1.5">
              <CheckSquare
                size={15}
                className="text-[#98A2B3]"
              />
              <span className="text-[14px] text-[#667085]">
                {task.completedChecklist}/{task.totalChecklist}
              </span>
            </div>

          </div>

        </div>

      </div>

      {/* Right */}
      <div className="ml-auto flex items-center">

        {/* Date */}
        <div className="flex min-w-[95px] items-center gap-2">

          <CalendarDays
            size={16}
            className="text-[#98A2B3]"
          />

          <span className="text-[15px] text-[#475467]">
            {task.date}
          </span>

        </div>

        {/* Status */}
<div className="ml-12">
  <TaskStatusDots
    colors={task.statusColors}
  />
</div>

        {/* Members */}
        <div className="ml-10 flex -space-x-2">

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

export default TaskProgressItem;