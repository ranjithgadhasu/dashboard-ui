import TaskHeader from "../../components/Tasks/TaskHeader";
import TaskBoard from "../../components/Tasks/TaskBoard";

const TaskList = () => {
  return (
    <div className="h-full bg-[#F8FAFC]">

      {/* Header */}
      <TaskHeader />

      {/* Board */}
      <div className="px-6 pb-6">
        <TaskBoard />
      </div>

    </div>
  );
};

export default TaskList;