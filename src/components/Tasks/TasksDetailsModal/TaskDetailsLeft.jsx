import { taskDetails } from "./taskDetailsData";

import TaskTitle from "./TaskTitle";
import TaskDescription from "./TaskDescription";
import TaskChecklistSection from "./TaskChecklistSection";
import TaskAttachments from "./TaskAttachments";
import TaskActivityTabs from "./TaskActivityTabs";
import TaskComments from "./TaskComments";

const TaskDetailsLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pr-8">

      <TaskTitle
        title={taskDetails.title}
      />

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

      <TaskActivityTabs />

      <TaskComments
        comments={taskDetails.comments}
      />

    </div>
  );
};

export default TaskDetailsLeft;