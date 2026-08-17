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
        onClick={(e) => e.stopPropagation()}
        className={`
          modal-container
          relative
          bg-white
          rounded-2xl
          shadow-2xl
          ${width}
          ${height}
          overflow-y-auto
        `}
      >

        {/* Header */}

        <div
          className="
            modal-header
            sticky
            top-0
            z-10
            flex
            items-center
            justify-between
            bg-white
            px-6
            py-5
            border-b
            border-gray-200
            rounded-t-2xl
          "
        >

          <h2 className="modal-title text-[28px] font-medium text-[#3E4453]">
            {title}
          </h2>

          <button
            type="button"
            onClick={onClose}
            className="
              modal-close
              flex
              h-9
              w-9
              shrink-0
              items-center
              justify-center
              rounded-lg
              bg-gray-100
              transition
              hover:bg-gray-200
            "
          >
            <X size={18} />
          </button>

        </div>


        {/* Body */}

        <div className="modal-body px-6 py-6">
          {children}
        </div>

      </div>
    </div>
  );
};

export default Modal;