import TaskDueDate from "./TaskDueDate";

const DueDateCard = ({ dueDate }) => {
  return (
    <div className="mb-8">

      <TaskDueDate
        dueDate={dueDate}
      />

    </div>
  );
};

export default DueDateCard;