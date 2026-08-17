import {
  CalendarDays,
  ClipboardList,
  User,
} from "lucide-react";
import { createPortal } from "react-dom";

const TaskTooltip = ({ task, mouse }) => {
  if (!task || !mouse) return null;

  return createPortal(
    <div
      className="fixed z-[99999]"
      style={{
        left: mouse.x + 24,
        top: mouse.y + 24,
      }}
    >
      {/* Arrow */}
      <div
        className="
          absolute
          -top-2
          left-10
          h-4
          w-4
          rotate-45
          border-l
          border-t
          border-[#EEF2F7]
          bg-white
        "
      />

      {/* Card */}
      <div
        className="
          w-[302px]
          rounded-[28px]
          border
          border-[#EEF2F7]
          bg-white
          p-8
          shadow-[0_25px_60px_rgba(0,0,0,0.15)]
        "
      >
        {/* Header */}
        <div className="flex items-center gap-4">
          <div
            className="h-5 w-5 rounded-md"
            style={{
              background: task.color,
            }}
          />

          <h2 className="text-[20px] font-medium text-[#37393D]">
            {task.name}
          </h2>
        </div>

        {/* Date */}
        <div className="mt-2 flex items-center gap-4">
          <CalendarDays
            size={22}
            className="text-[#8C95A3]"
          />

          <span className="text-[14px] text-[#5E6673]">
            {task.startDate} — {task.endDate}
          </span>
        </div>

        {/* Tasks */}
        <div className="mt-5 flex items-center gap-4">
          <ClipboardList
            size={22}
            className="text-[#8C95A3]"
          />

          <span className="text-[17px] text-[#5E6673]">
            Tasks:
            <strong className="ml-2 text-[#37393D]">
              {task.completedTasks}/{task.totalTasks}
            </strong>
          </span>
        </div>

        {/* Members */}
        <div className="mt-5 flex items-center gap-4">
          <User
            size={22}
            className="text-[#8C95A3]"
          />

          <div className="flex gap-3">
            {(task.members || []).map((member) => (
              <img
                key={member.id}
                src={member.avatar}
                alt={member.name || "Member"}
                className="
                  h-11
                  w-11
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
    </div>,
    document.body
  );
};

export default TaskTooltip;