import { X } from "lucide-react";
import "./addnotemodel.css";

const AddNoteModal = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="add-note-modal fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-5">
      <div
        className="
          add-note-modal-box
          relative
          w-[510px]
          h-[474px]
          max-w-[640px]
          rounded-xl
          bg-white
          shadow-xl
        "
      >
        {/* Close Button */}

        <button
          onClick={onClose}
          className="
            add-note-close
            absolute
            right-6
            top-6
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-xl
            bg-[#F6F6F6]
            transition
            hover:bg-gray-200
          "
        >
          <X size={22} className="text-[#4B4B4B]" />
        </button>

        {/* Content */}

        <div className="add-note-content p-9">
          {/* Heading */}

          <h2
            className="
              text-[28px]
              font-medium
              text-[#41444D]
            "
          >
            Add Note
          </h2>

          {/* Title */}

          <div className="add-note-title mt-9">
            <label
              htmlFor="note-title"
              className="
                mb-3
                block
                text-[14px]
                font-normal
                text-[#8A8F99]
              "
            >
              Title
            </label>

            <input
              id="note-title"
              type="text"
              placeholder="The title of a note"
              className="
                add-note-title-input
                h-[40px]
                w-full
                rounded-[18px]
                border
                border-[#E5E7EB]
                px-5
                text-[16px]
                outline-none
                focus:border-[#218C3A]
              "
            />
          </div>

          {/* Description */}

          <div className="add-note-description mt-4">
            <label
              className="
                mb-2
                block
                text-[14px]
                font-normal
                text-[#8A8F99]
              "
            >
              Description
            </label>

            <textarea
              rows={8}
              placeholder="Type something"
              className="
                add-note-description-input
                w-[450px]
                h-[173px]
                resize-none
                rounded-[18px]
                border
                border-[#E5E7EB]
                p-5
                text-[16px]
                outline-none
                focus:border-[#218C3A]
              "
            />
          </div>

          {/* Button */}

          <div className="add-note-button-wrapper mt-2 flex justify-end">
            <button
              className="
                add-note-create
                h-[40px]
                min-w-[130px]
                rounded-xl
                bg-[#218C3A]
                px-8
                text-[15px]
                font-medium
                text-white
                hover:bg-[#197832]
              "
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddNoteModal;
