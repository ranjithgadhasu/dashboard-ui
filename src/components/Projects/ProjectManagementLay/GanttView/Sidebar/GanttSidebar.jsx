import TaskGroup from "./TaskGroup";
import AddTaskButton from "./AddTaskButton";
import { ganttData } from "../ganttData";

import "./GanttSidebar.css";

const GanttSidebar = () => {
  return (
    <div className="gantt-sidebar border-r border-[#EEF2F7] bg-white overflow-y-auto">
      {/* Header */}
      <div className="gantt-sidebar-header flex items-center justify-between border-b border-[#EEF2F7] px-5 py-4">
        <h4 className="gantt-sidebar-title text-[12px] font-semibold uppercase tracking-wide text-[#98A2B3]">
          Project Name
        </h4>
      </div>

      {/* Tasks */}
      <div className="gantt-sidebar-tasks">
        {ganttData.tasks.map((task) => (
          <TaskGroup key={task.id} task={task} />
        ))}
      </div>

      {/* Footer */}
      <div className="gantt-sidebar-footer">
        <AddTaskButton onClick={() => console.log("Add List")} />
      </div>
    </div>
  );
};

export default GanttSidebar;
