import { taskDetails } from "../TasksDetailsModal/taskDetailsData";

import TaskTitle from "../TasksDetailsModal/TaskTitle";
import TaskAssignees from "../TasksDetailsModal/TaskAssignees";
import TaskLabels from "../TasksDetailsModal/TaskLabels";
import TaskDueDate from "../TasksDetailsModal/TaskDueDate";
import TaskDescription from "../TasksDetailsModal/TaskDescription";
import TaskChecklistSection from "../TasksDetailsModal/TaskChecklistSection";
import TaskAttachments from "../TasksDetailsModal/TaskAttachments";

const TaskListRightPanel = () => {
  return (
    <div className="w-[420px] border-l border-[#EEF2F7] bg-white p-6">

      <TaskTitle title={taskDetails.title} />

      <TaskAssignees
        assignedTo={taskDetails.assignedTo}
        createdBy={taskDetails.createdBy}
      />

      <TaskLabels labels={taskDetails.labels} />

      <TaskDueDate dueDate={taskDetails.dueDate} />

      <TaskDescription
        description={taskDetails.description}
      />

      <TaskChecklistSection
        checklist={taskDetails.checklist}
        progress={taskDetails.checklistProgress}
      />

      <TaskAttachments
        attachments={taskDetails.attachments}
      />

    </div>
  );
};

export default TaskListRightPanel;