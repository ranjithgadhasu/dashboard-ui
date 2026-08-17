import {
  ChevronDown,
  MoreHorizontal,
} from "lucide-react";

import TaskListItem from "./TaskListItem";
import AddTaskRow from "./AddTaskRow";

const TaskListSection = ({
  title,
  count,
  tasks,
}) => {
  return (
    <div className="mb-10">

      {/* Header */}
      <div className="mb-5 flex items-center justify-between">

        <div className="flex items-center gap-2">

          <ChevronDown
            size={16}
            className="text-[#98A2B3]"
          />

          <h3 className="text-[18px] font-medium text-[#344054]">
            {title}
          </h3>

          <span className="text-[18px] text-[#98A2B3]">
            ({count})
          </span>

        </div>

        <button className="rounded-lg p-2 hover:bg-[#F8FAFC]">
          <MoreHorizontal
            size={18}
            className="text-[#98A2B3]"
          />
        </button>

      </div>

      {/* Tasks */}
      <div className="space-y-4">

        {tasks.map((task) => (
          <TaskListItem
            key={task.id}
            task={task}
          />
        ))}

      </div>

      <AddTaskRow />

    </div>
  );
};

export default TaskListSection;