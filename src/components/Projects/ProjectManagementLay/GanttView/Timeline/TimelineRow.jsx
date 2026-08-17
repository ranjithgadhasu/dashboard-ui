import TaskBar from "./TaskBar";

const TimelineRow = ({ task }) => {
  return (
    <>
      {/* Parent Task */}
      <div
        className="
          relative
          h-[40px]
          mb-[6px]
          border-b
          border-[#EEF2F7]
        "
      >
        <TaskBar task={task} />
      </div>
      {/* Child Tasks */}
      {task.children?.map((child) => (
        <div
          key={child.id}
          className="
            relative
            h-[40px]
            mb-[6px]
            border-b
            border-[#EEF2F7]
          "
        >
          <TaskBar task={child} />
        </div>
      ))}
    </>
  );
};

export default TimelineRow;