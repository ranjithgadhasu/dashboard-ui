import {
  Download,
  Trash2,
  FileArchive,
} from "lucide-react";

const AttachmentItem = ({ attachment }) => {
  return (
    <div className="flex items-center justify-between rounded-xl py-2">

      {/* Left */}
      <div className="flex items-center gap-4">

        {/* Preview */}
        <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl border border-[#EEF2F7] bg-[#FAFAFA]">

          {attachment.type === "image" ? (
            <img
              src={attachment.preview}
              alt=""
              className="h-full w-full object-cover"
            />
          ) : (
            <FileArchive
              size={24}
              className="text-[#98A2B3]"
            />
          )}

        </div>

        {/* Info */}
        <div>

          <h4 className="text-[14px] font-medium text-[#344054]">
            {attachment.name}
          </h4>

          <p className="mt-1 text-[12px] text-[#98A2B3]">
            {attachment.uploaded}
          </p>

          <p className="mt-1 text-[12px] text-[#98A2B3]">
            {attachment.size}
          </p>

        </div>

      </div>

      {/* Right */}
      <div className="flex items-center gap-3">

        <button className="text-[#98A2B3] transition hover:text-[#22983A]">
          <Download size={16} />
        </button>

        <button className="text-[#98A2B3] transition hover:text-red-500">
          <Trash2 size={16} />
        </button>

      </div>

    </div>
  );
};

export default AttachmentItem;