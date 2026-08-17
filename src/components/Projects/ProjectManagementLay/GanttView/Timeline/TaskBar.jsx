import { useState } from "react";
import ResizeHandle from "./ResizeHandle";
import TaskTooltip from "./TaskTooltip";

const DAY_WIDTH = 62;

const TaskBar = ({ task }) => {
  const [hover, setHover] = useState(false);

  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
  });

  const left = (task.start - 1) * DAY_WIDTH;
  const width = task.duration * DAY_WIDTH;

  return (
    <div
      className="absolute top-1/2 -translate-y-1/2"
      style={{
        left,
        width,
      }}
      onMouseEnter={(e) => {
        setHover(true);

        setMouse({
          x: e.clientX,
          y: e.clientY,
        });
      }}
      onMouseMove={(e) => {
        setMouse({
          x: e.clientX,
          y: e.clientY,
        });
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      {hover && (
        <TaskTooltip
          task={task}
          mouse={mouse}
        />
      )}

      <div
        className={`
          relative
          h-[28px]
          rounded-md
          overflow-hidden
          ${
            task.active
              ? "border-2 border-[#2CBF60]"
              : ""
          }
        `}
        style={{
          background: `${task.color}20`,
        }}
      >
        <div
          className="absolute left-0 top-0 h-full"
          style={{
            width: `${task.progress}%`,
            background: task.color,
          }}
        />

        <div
          className="
            relative
            z-10
            flex
            h-full
            items-center
            justify-between
            px-3
            text-[12px]
            font-medium
          "
        >
          <span>{task.name}</span>

          <span>{task.progress}%</span>
        </div>

        {task.active && (
          <>
            <ResizeHandle position="left" />
            <ResizeHandle position="right" />
          </>
        )}
      </div>
    </div>
  );
};

export default TaskBar;