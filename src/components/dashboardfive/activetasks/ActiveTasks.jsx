import { useState } from "react";
import TaskItem from "./TaskItem";
import { activeTasksData } from "./activeTasksData";
import "./active.css"

const tabs = ["Day", "Week", "Month"];

const ActiveTasks = () => {
  const [activeTab, setActiveTab] = useState("Day");

  const [tasks, setTasks] = useState(activeTasksData);

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  return (
    <div className="rounded-[20px] border border-[#E9EEF5] bg-white p-6 active-tasks-card">

      {/* Header */}

      <div className="mb-4 flex items-center justify-between active-tasks-header">

        <h2 className="text-[20px] font-medium text-[#3F434A]">
          Active Tasks
        </h2>

        <div className="flex rounded-2xl border border-[#E9EEF5] bg-white p-1 shadow-sm active-tasks-tabs">

          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`min-w-[85px] cursor-pointer rounded-xl py-2 text-[14px] font-medium font-medium ${
                activeTab === tab
                  ? "bg-[#22963F] text-white"
                  : "text-[#8A9099]"
              }`}
            >
              {tab}
            </button>
          ))}

        </div>

      </div>

      {/* Tasks */}

      <div className="space-y-8 active-tasks-list">

        {tasks.map((item) => (
          <TaskItem
            key={item.id}
            item={item}
            onToggle={() => toggleTask(item.id)}
          />
        ))}

      </div>

    </div>
  );
};

export default ActiveTasks;