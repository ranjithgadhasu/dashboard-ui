import { X } from "lucide-react";

const TaskModal = ({
  open,
  onClose,
  title = "New Task",
  children,
  footer,
}) => {
  if (!open) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-40 bg-black/40"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-6">

        <div className="w-full max-w-2xl rounded-3xl bg-white shadow-2xl">

          {/* Header */}
          <div className="flex items-center justify-between border-b border-[#EEF2F7] px-8 py-6">

            <h2 className="text-[26px] font-semibold text-[#344054]">
              {title}
            </h2>

            <button
              onClick={onClose}
              className="rounded-full p-2 transition hover:bg-[#F3F4F6]"
            >
              <X
                size={22}
                className="text-[#667085]"
              />
            </button>

          </div>

          {/* Body */}
          <div className="max-h-[70vh] overflow-y-auto p-8">
            {children}
          </div>

          {/* Footer */}
          {footer && (
            <div className="flex justify-end gap-3 border-t border-[#EEF2F7] px-8 py-6">
              {footer}
            </div>
          )}

        </div>

      </div>
    </>
  );
};

export default TaskModal;