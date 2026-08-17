const TaskItem = ({ task }) => {
  return (
    <div
      className={`
        flex
        items-center
        justify-between
        border-b
        border-[#EEF2F7]
        py-4
        pl-14
        pr-5
        transition-all
        duration-200
        hover:bg-[#F8FAFC]
        ${
          task.active
            ? "border-l-[4px] border-[#22C55E] bg-[#F8FFF9]"
            : ""
        }
      `}
    >
      {/* Task Name */}
      <span
        className={`
          text-[14px]
          ${
            task.active
              ? "font-medium text-[#344054]"
              : "text-[#667085]"
          }
        `}
      >
        {task.name}
      </span>
    </div>
  );
};

export default TaskItem;