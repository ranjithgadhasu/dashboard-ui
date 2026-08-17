import CreatedBy from "./CreatedBy";
import AssignedTo from "./AssignedTo";
import DueDateCard from "./DueDateCard";
import LabelsCard from "./LabelsCard";
import DateInfo from "./DateInfo";

import { taskDetails } from "./taskDetailsData";

const TaskDetailsRight = ({ onOpenProfile }) => {
  return (
    <div
      className="
        w-[310px]
        h-full
        bg-white
        border-l
        border-[#EEF2F7]
        flex
        flex-col
      "
    >
      {/* Created By */}
      <div className="px-7 py-7">
        <CreatedBy
          createdBy={taskDetails.createdBy}
          onOpenProfile={onOpenProfile}
        />
      </div>

      <div className="border-t border-[#EEF2F7]" />

      {/* Assigned To */}
      <div className="px-7 py-7">
        <AssignedTo
          assignedTo={taskDetails.assignedTo}
        />
      </div>

      <div className="border-t border-[#EEF2F7]" />

      {/* Due Date */}
      <div className="px-7 py-7">
        <DueDateCard
          dueDate={taskDetails.dueDate}
        />
      </div>

      <div className="border-t border-[#EEF2F7]" />

      {/* Labels */}
      <div className="px-7 py-7">
        <LabelsCard
          labels={taskDetails.labels}
        />
      </div>

      <div className="border-t border-[#EEF2F7]" />

      {/* Dates */}
      <div className="px-7 py-7">
        <DateInfo
          created={taskDetails.created}
          updated={taskDetails.updated}
        />
      </div>
    </div>
  );
};

export default TaskDetailsRight;