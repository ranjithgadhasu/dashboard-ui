import { useState } from "react";

import DashboardFiveSidebar from "../../components/dashboardFiveLayout/DashboardFiveSidebar";
import Header from "../../components/layout/Header";
import TaskListBoard from "../../components/Tasks/TaskListVersion/TaskListBoard";

import "./TaskListVersion.css";

const TaskListVersion = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div
      className={`task-list-version ${
        sidebarOpen ? "task-sidebar-is-open" : "task-sidebar-is-closed"
      }`}
    >
      {/* Sidebar */}
      <DashboardFiveSidebar open={sidebarOpen} setOpen={setSidebarOpen} />

      {/* Content */}
      <div className="task-version-content">
        {/* Header */}
        <div className="task-version-header">
          <Header setOpen={setSidebarOpen} />
        </div>

        {/* Task List */}
        <div className="task-version-board">
          <TaskListBoard />
        </div>
      </div>
    </div>
  );
};

export default TaskListVersion;
