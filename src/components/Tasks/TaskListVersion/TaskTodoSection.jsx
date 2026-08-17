import TaskListHeader from "./TaskListHeader";
import TaskTodoItem from "./TaskTodoItem";
import AddTaskRow from "./AddTaskRow";

const TaskTodoSection = ({
  title,
  count,
  tasks,
}) => {
  return (
    <div className="mb-10">

      {/* Section Header */}
      <TaskListHeader
        title={title}
        count={count}
      />

      {/* Todo Items */}
      <div className="space-y-4">

        {tasks.map((task) => (
          <TaskTodoItem
            key={task.id}
            task={task}
          />
        ))}

      </div>

      {/* Add Task */}
      <AddTaskRow />

    </div>
  );
};

export default TaskTodoSection;