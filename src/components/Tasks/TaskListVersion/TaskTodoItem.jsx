import { CalendarDays, Circle } from "lucide-react";

import TaskStatusDots from "./TaskStatusDots";

import "./TaskTodoItem.css";

const TaskTodoItem = ({ task }) => {
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
        task-todo-item
      "
    >
      {/* LEFT */}
      <div className="flex items-center gap-5 task-todo-left">
        {/* Checkbox */}
        <Circle size={22} className="text-[#E4E7EC] task-todo-checkbox" />

        {/* Title */}
        <h4 className="text-[16px] font-medium text-[#344054] task-todo-title">
          {task.title}
        </h4>
      </div>

      {/* RIGHT */}
      <div className="ml-auto flex items-center task-todo-right">
        {/* Date */}
        <div className="flex min-w-[95px] items-center gap-2 task-todo-date">
          <CalendarDays
            size={16}
            className="text-[#98A2B3] task-todo-date-icon"
          />

          <span className="text-[15px] text-[#475467] task-todo-date-text">
            {task.date}
          </span>
        </div>

        {/* Status */}
        <div className="ml-12 task-todo-status">
          <TaskStatusDots colors={task.statusColors} />
        </div>

        {/* Members */}
        <div className="ml-10 flex gap-2 task-todo-members">
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
                task-todo-member
              "
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskTodoItem;
