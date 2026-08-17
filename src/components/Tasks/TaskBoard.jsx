import { useState } from "react";
import { taskColumns, taskData } from "./taskData";
import TaskColumn from "./TaskColumn";
import AddColumnCard from "./AddColumnCard";
import AddColumnModal from "./AddColumnModal";



const TaskBoard = () => {
  const [openColumnModal, setOpenColumnModal] = useState(false);

  return (
    <>
      <div className="mt-4">

        <div className="grid grid-cols-1 gap-6 xl:grid-cols-4">

          {taskColumns.map((column) => (
            <TaskColumn
              key={column.id}
              column={column}
              tasks={taskData[column.id]}
            />
          ))}

          {/* Add Column */}
          <AddColumnCard
            onClick={() => setOpenColumnModal(true)}
          />

        </div>

      </div>

      {/* Modal */}
      <AddColumnModal
        open={openColumnModal}
        onClose={() => setOpenColumnModal(false)}
      />
    </>
  );
};
export default TaskBoard;