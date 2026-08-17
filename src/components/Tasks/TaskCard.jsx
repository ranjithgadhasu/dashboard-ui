import { CalendarDays } from "lucide-react";
import TaskChecklist from "./TaskChecklist";
import TaskProgress from "./TaskProgress";
import TaskImageGallery from "./TaskImageGallery";
import TaskFooter from "./TaskFooter";
import TaskLabel from "./TaskLabel";
import TaskAttachment from "./TaskAttachment";

const TaskCard = ({ task }) => {


  return (
    <div className="relative rounded-2xl border border-[#EEF2F7] bg-white p-5 shadow-sm transition-all duration-200 hover:shadow-md">

      {/* Header */}
      <div className="mb-5 flex items-start justify-between">

        <div>

          <TaskLabel labels={task.labels} />

          <h3 className="mt-5 text-[15px] font-medium text-[#344054]">
            {task.title}
          </h3>

        </div>

   <div className="mr-1 flex items-center gap-2 whitespace-nowrap text-[#98A2B3]">
  <CalendarDays
    size={18}
    strokeWidth={2}
  />

  <span className="text-[15px] font-normal">
    {task.date}
  </span>
</div>

      </div>

      {/* Description */}
      {task.description && (
        <p className="mt-2 text-[14px] leading-6 text-[#98A2B3]">
          {task.description}
        </p>
      )}

      {/* Images */}
      <TaskImageGallery
        image={task.image}
        images={task.images}
      />

      {/* Progress */}
      {task.progress > 0 && (
        <TaskProgress progress={task.progress} />
      )}

      {/* Checklist */}
      {task.checklist?.length > 0 && (
        <TaskChecklist checklist={task.checklist} />
      )}

      {/* Attachments */}
      {task.attachmentsData && (
        <TaskAttachment
          attachments={task.attachmentsData}
        />
      )}

      {/* Footer */}
      <TaskFooter
        comments={task.comments}
        attachments={task.attachments}
        members={task.members}
      />

    </div>
  );
};

export default TaskCard;