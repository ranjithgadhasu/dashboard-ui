import { X } from "lucide-react";
import { taskDetails } from "./taskDetailsData";

import TaskDetailsHeader from "./TaskDetailsHeader";
import TaskTitle from "./TaskTitle";
import TaskAssignees from "./TaskAssignees";
import TaskLabels from "./TaskLabels";
import TaskDueDate from "./TaskDueDate";
import TaskDescription from "./TaskDescription";
import TaskChecklistSection from "./TaskChecklistSection";
import TaskAttachments from "./TaskAttachments";
import TaskActivityTabs from "./TaskActivityTabs";
import TaskComments from "./TaskComments";
import CommentInput from "./CommentInput";

import "./TaskDetailsDrawer.css";

const TaskDetailsDrawer = ({ open, onClose, onOpenProfile }) => {
  if (!open) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-40 bg-black/20 task-details-overlay"
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className="
          fixed
          right-[360px]
          top-[72px]
          bottom-0
          z-50
          flex
          w-[550px]
          flex-col
          overflow-hidden
          rounded-t-2xl
          bg-white
          shadow-2xl
          task-details-drawer
        "
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="
            absolute
            right-5
            top-5
            z-20
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            bg-[#F8F9FB]
            transition
            hover:bg-[#EEF2F7]
            task-details-close
          "
          aria-label="Close task details"
        >
          <X size={18} className="text-[#98A2B3]" />
        </button>

        {/* Fixed Header */}
        <div
          className="
            border-b
            border-[#EEF2F7]
            bg-white
            px-7
            pt-5
            pb-4
            task-details-header
          "
        >
          <TaskDetailsHeader task={taskDetails} />
        </div>

        {/* Scrollable Content */}
        <div
          className="
            flex-1
            overflow-y-auto
            px-7
            py-6
            task-details-content
          "
        >
          <div className="task-details-title">
            <TaskTitle title={taskDetails.title} />
          </div>

          <div className="task-details-assignees">
            <TaskAssignees
              assignedTo={taskDetails.assignedTo}
              createdBy={taskDetails.createdBy}
              onOpenProfile={onOpenProfile}
            />
          </div>

          <div className="task-details-labels">
            <TaskLabels labels={taskDetails.labels} />
          </div>

          <div className="task-details-due-date">
            <TaskDueDate dueDate={taskDetails.dueDate} />
          </div>

          <div className="task-details-description">
            <TaskDescription description={taskDetails.description} />
          </div>

          <div className="task-details-checklist">
            <TaskChecklistSection
              checklist={taskDetails.checklist}
              progress={taskDetails.checklistProgress}
            />
          </div>

          <div className="task-details-attachments">
            <TaskAttachments attachments={taskDetails.attachments} />
          </div>

          <div className="task-details-activity">
            <TaskActivityTabs />
          </div>

          <div className="task-details-comment-input">
            <CommentInput avatar={taskDetails.createdBy.avatar} />
          </div>

          <div className="task-details-comments">
            <TaskComments
              comments={taskDetails.comments}
              activity={taskDetails.activity}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskDetailsDrawer;
