import { FileText, Download } from "lucide-react";

const MessageFileMail = ({ message }) => {
  const isSent = message.type === "sent";

  return (
   <div className={`flex ${isSent ? "justify-start" : "justify-end"}`}>
      <div className="max-w-[420px]">

        {/* File Card */}
        <div
          className={`flex items-center gap-4 rounded-2xl border border-[#E8EDF3] bg-white p-4 shadow-sm ${
            isSent ? "ml-auto" : ""
          }`}
        >
          {/* File Icon */}
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F3F7F4]">
            <FileText size={24} className="text-[#22C55E]" />
          </div>

          {/* File Details */}
          <div className="min-w-0 flex-1">
            <h4 className="truncate text-[14px] font-semibold text-[#344054]">
              {message.fileName}
            </h4>

            <p className="mt-1 text-xs text-[#98A2B3]">
              {message.size}
            </p>
          </div>

          {/* Download Button */}
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#E8EDF3] text-[#667085] transition hover:bg-[#F8FAFC] hover:text-[#22C55E]"
            aria-label={`Download ${message.fileName}`}
          >
            <Download size={18} />
          </button>
        </div>

        {/* Time */}
        <p
          className={`mt-2 text-[11px] text-[#98A2B3] ${
            isSent ? "text-right" : "text-left"
          }`}
        >
          {message.time}
        </p>

      </div>
    </div>
  );
};

export default MessageFileMail;