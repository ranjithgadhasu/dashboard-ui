import TaskListHeader from "./TaskListHeader";
import TaskCompletedItem from "./TaskCompletedItem";
import AddTaskRow from "./AddTaskRow";

const TaskCompletedSection = ({ title, count, tasks }) => {
  return (
    <div className="mb-10">

      <TaskListHeader
        title={title}
        count={count}
      />

      <div className="space-y-3">
        {tasks.map((task) => (
          <TaskCompletedItem
            key={task.id}
            task={task}
          />
        ))}
      </div>

      <AddTaskRow />

    </div>
  );
};

export default TaskCompletedSection;