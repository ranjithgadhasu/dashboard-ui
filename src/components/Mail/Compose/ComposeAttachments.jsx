import {
  FileText,
  File,
  X,
} from "lucide-react";
import "./mailcoompose.css"

const ComposeAttachments = () => {
  return (
    <div className="space-y-4">

      {/* Attached Files */}
      <div className="grid grid-cols-2 gap-4 compose-attachments-grid">

        {/* PDF File */}
        <div className="compose-attachment-card flex h-[74px] w-[273px] items-center justify-between rounded-xl border border-[#E5E7EB] bg-white p-4">

          <div className="flex items-center gap-3 min-w-0">

            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-[#FEE2E2]">
              <FileText
                size={24}
                className="text-[#EF4444]"
              />
            </div>

            <div className="min-w-0">
              <h4 className="truncate text-sm font-semibold text-[#344054]">
                Resume.pdf
              </h4>

              <p className="mt-1 text-xs text-[#98A2B3]">
                570 KB
              </p>
            </div>

          </div>

          <button className="flex-shrink-0 rounded-md p-2 transition hover:bg-[#F3F4F6]">
            <X
              size={18}
              className="text-[#98A2B3]"
            />
          </button>

        </div>

        {/* Uploading File */}
        <div className="compose-attachment-card h-[74px] w-[273px] rounded-xl border border-[#E5E7EB] bg-white p-4">

          <div className="flex items-start justify-between">

            <div className="flex min-w-0 items-center gap-3">

              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-[#E8F5E9]">
                <File
                  size={22}
                  className="text-[#22C55E]"
                />
              </div>

              <div className="min-w-0">

                <h4 className="truncate text-sm font-semibold text-[#344054]">
                  Uploading File...
                </h4>

                <p className="mt-1 text-xs text-[#98A2B3]">
                  40%
                </p>

              </div>

            </div>

            <button className="flex-shrink-0 rounded-md p-2 transition hover:bg-[#F3F4F6]">
              <X
                size={18}
                className="text-[#98A2B3]"
              />
            </button>

          </div>

          {/* Progress Bar */}
          <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-[#EEF2F7]">

            <div
              className="h-full rounded-full bg-[#22C55E]"
              style={{ width: "40%" }}
            />

          </div>

        </div>

      </div>

    </div>
  );
};

export default ComposeAttachments;