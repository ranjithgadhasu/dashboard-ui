import { taskVersionData } from "./taskVersion";

import TaskTodoSection from "./TaskTodoSection";
import TaskProgressSection from "./TaskProgressSection";
import TaskCompletedSection from "./TaskCompletedSection";
import TaskListRightPanel from "./TaskListRightPanel";
import TaskListTopBar from "./TaskListTopBar";

import "./TaskListBoard.css";

const TaskListBoard = () => {
  return (
    <div
      className="
        flex
        ml-0
        h-[calc(100vh-120px)]
        bg-[#F8FAFC]
        task-list-board
      "
    >
      {/* Left Side */}
      <div className="flex flex-1 flex-col task-list-main">
        {/* Top Header */}
        <div className="task-list-topbar">
          <TaskListTopBar />
        </div>

        {/* Task Sections */}
        <div
          className="
            flex-1
            overflow-y-auto
            border-r
            border-[#EEF2F7]
            p-6
            task-list-content
          "
        >
          <div className="task-list-todo">
            <TaskTodoSection
              title="ToDo"
              count={taskVersionData.todo.length}
              tasks={taskVersionData.todo}
            />
          </div>

          <div className="task-list-progress">
            <TaskProgressSection
              title="In Progress"
              count={taskVersionData.progress.length}
              tasks={taskVersionData.progress}
            />
          </div>

          <div className="task-list-completed">
            <TaskCompletedSection
              title="Completed"
              count={taskVersionData.completed.length}
              tasks={taskVersionData.completed}
            />
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="task-list-right-panel">
        <TaskListRightPanel />
      </div>
    </div>
  );
};

export default TaskListBoard;
