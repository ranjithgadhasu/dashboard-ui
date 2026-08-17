import { FileText, Download } from "lucide-react";

const TaskAttachment = ({ attachments = [] }) => {
  if (!attachments.length) return null;

  return (
    <div className="mt-5">

      {/* Header */}
      <div className="mb-3 flex items-center justify-between">

        <h4 className="text-[13px] font-semibold text-[#344054]">
          Attachments
        </h4>

        <span className="text-xs text-[#98A2B3]">
          {attachments.length} Files
        </span>

      </div>

      {/* Attachment List */}
      <div className="space-y-3">

        {attachments.map((file) => (
          <div
            key={file.id}
            className="
              flex
              items-center
              justify-between
              rounded-xl
              border
              border-[#EEF2F7]
              bg-[#F9FAFB]
              p-3
              transition
              hover:bg-white
            "
          >
            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#EEF2F7]">
                <FileText
                  size={18}
                  className="text-[#667085]"
                />
              </div>

              <div>

                <h5 className="text-sm font-medium text-[#344054]">
                  {file.name}
                </h5>

                <p className="text-xs text-[#98A2B3]">
                  {file.size}
                </p>

              </div>

            </div>

            <button
              type="button"
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-lg
                text-[#98A2B3]
                transition
                hover:bg-[#EEF2F7]
                hover:text-[#22C55E]
              "
            >
              <Download size={17} />
            </button>

          </div>
        ))}

      </div>

    </div>
  );
};

export default TaskAttachment;