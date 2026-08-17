import { Plus } from "lucide-react";
import AttachmentItem from "./AttachmentItem";

const TaskAttachments = ({
  attachments = [],
}) => {
  return (
    <div className="mb-10">

      {/* Heading */}
      <h4 className="mb-5 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#667085]">
        Attachments
      </h4>

      {/* Files */}
      <div className="space-y-4">

        {attachments.map((attachment) => (
          <AttachmentItem
            key={attachment.id}
            attachment={attachment}
          />
        ))}

      </div>

      {/* Add Attachment */}
      <button
        type="button"
        className="
          mt-5
          flex
          items-center
          gap-2
          text-[14px]
          font-medium
          text-[#22983A]
          transition
          hover:text-[#1B7A30]
        "
      >
        <Plus size={16} />

        Add Attachment
      </button>

    </div>
  );
};

export default TaskAttachments;