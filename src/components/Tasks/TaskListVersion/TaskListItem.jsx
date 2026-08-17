import {
  CalendarDays,
  Circle,
  CheckCircle2,
  GripVertical,
  Paperclip,
  MessageSquare,
  CheckSquare,
} from "lucide-react";

const TaskListItem = ({ task }) => {
  return (
    <div
      className="
        flex
        items-center
        justify-between
        rounded-[22px]
        border
        border-[#EEF2F7]
        bg-white
        px-6
        py-5
        transition-all
        hover:shadow-sm
      "
    >
      {/* Left */}
      <div className="flex items-center gap-4">

        {/* Drag Handle (Only In Progress) */}
        {task.draggable && (
          <GripVertical
            size={18}
            className="text-[#98A2B3]"
          />
        )}

        {/* Checkbox / Completed */}
        {task.completed ? (
          <CheckCircle2
            size={24}
            className="text-[#22C55E]"
          />
        ) : (
          <Circle
            size={24}
            className="text-[#E4E7EC]"
          />
        )}

        {/* Title + Meta */}
        <div>

          <h4
            className={`text-[17px] font-medium ${
              task.completed
                ? "text-[#667085] line-through"
                : "text-[#344054]"
            }`}
          >
            {task.title}
          </h4>

          {/* Only show for In Progress */}
          {(task.attachments > 0 ||
            task.comments > 0 ||
            task.totalChecklist > 0) && (

            <div className="mt-2 flex items-center gap-6 text-[#98A2B3]">

              {task.attachments > 0 && (
                <div className="flex items-center gap-1">

                  <Paperclip size={15} />

                  <span className="text-[15px]">
                    {task.attachments}
                  </span>

                </div>
              )}

              {task.comments > 0 && (
                <div className="flex items-center gap-1">

                  <MessageSquare size={15} />

                  <span className="text-[15px]">
                    {task.comments}
                  </span>

                </div>
              )}

              {task.totalChecklist > 0 && (
                <div className="flex items-center gap-1">

                  <CheckSquare size={15} />

                  <span className="text-[15px]">
                    {task.completedChecklist}/{task.totalChecklist}
                  </span>

                </div>
              )}

            </div>

          )}

        </div>

      </div>

      {/* Right */}
      <div className="flex items-center gap-10">

        {/* Date */}
        <div className="flex items-center gap-2">

          <CalendarDays
            size={16}
            className="text-[#98A2B3]"
          />

          <span className="text-[15px] text-[#475467]">
            {task.date}
          </span>

        </div>

        {/* Status Dots */}
        <div className="flex items-center gap-2">

          {task.statusColors?.map((color, index) => (
            <span
              key={index}
              className="h-3.5 w-3.5 rounded-full"
              style={{
                backgroundColor: color,
              }}
            />
          ))}

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

export default TaskListItem;