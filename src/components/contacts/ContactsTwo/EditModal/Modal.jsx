import { X } from "lucide-react";
import "./Modal.css";

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  width = "w-[498px]",
  height = "h-[720px]",
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 p-4"
      onClick={onClose}
    >
      <div
        className={`
          modal-container
          ${width}
          ${height}
          relative
          overflow-hidden
          rounded-2xl
          bg-white
          shadow-2xl
        `}
        onClick={(e) => e.stopPropagation()}
      >

        {/* Header */}

        <div className="modal-header flex items-center justify-between border-b border-gray-200 px-6 py-5">

          <h2 className="modal-title text-[28px] font-medium text-[#3E4453]">
            {title}
          </h2>

          <button
            type="button"
            onClick={onClose}
            className="
              modal-close-button
              flex
              h-8
              w-8
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-gray-100
              transition
              hover:bg-gray-200
            "
          >
            <X size={18} />
          </button>

        </div>


        {/* Body */}

        <div className="modal-body h-[calc(100%-72px)] overflow-y-auto px-6 py-6">

          {children}

        </div>

      </div>
    </div>
  );
};

export default Modal;