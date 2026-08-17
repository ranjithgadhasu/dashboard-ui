import TaskListHeader from "./TaskListHeader";
import TaskProgressItem from "./TaskProgressItem";
import AddTaskRow from "./AddTaskRow";

const TaskProgressSection = ({ title, count, tasks }) => {
  return (
    <div className="mb-10">

      <TaskListHeader
        title={title}
        count={count}
      />

      <div className="space-y-3">
        {tasks.map((task) => (
          <TaskProgressItem
            key={task.id}
            task={task}
          />
        ))}
      </div>

      <AddTaskRow />

    </div>
  );
};

export default TaskProgressSection;