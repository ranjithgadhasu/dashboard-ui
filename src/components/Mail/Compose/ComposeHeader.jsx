import { X } from "lucide-react";

const ComposeHeader = ({
  title = "New Message",
  onClose,
}) => {
  return (
    <div className="flex items-center justify-between rounded-t-2xl border-b border-[#E9EDF5] bg-[#F8F9FC] px-6 py-4">

      {/* Title */}
 <h2
  id="compose-title"
  className="text-[28px] font-medium text-[#2D4058]"
>
  {title}
</h2>
      {/* Actions */}
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="rounded-lg p-2 transition hover:bg-[#FDECEC]"
        >
          <X
            size={18}
            className="text-[#2d2c2c]"
          />
        </button>
      </div>
    </div>
  );
};

export default ComposeHeader;