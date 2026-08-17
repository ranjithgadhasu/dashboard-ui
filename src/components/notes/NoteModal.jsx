import {
  CalendarDays,
  Pencil,
  Trash2,
  Ellipsis,
  X,
} from "lucide-react";

import AlignLeft from "../../assets/images/AlignLeft.png";

import "./notemodel.css";

const NoteModal = ({ open, onClose, note }) => {
  if (!open) return null;

  return (
    <div className="note-modal-overlay fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">

      <div
        className="
          note-modal-box
          relative
          w-[510px]
          h-[354px]
          max-w-3xl
          rounded-2xl
          bg-white
          shadow-2xl
        "
      >

        {/* Header Icons */}

        <div className="note-modal-actions absolute right-6 top-6 flex items-center gap-6 text-gray-500">

          <button
            type="button"
            className="hover:text-black transition"
          >
            <Pencil size={22} />
          </button>

          <button
            type="button"
            className="hover:text-red-500 transition"
          >
            <Trash2 size={22} />
          </button>

          <button
            type="button"
            className="hover:text-black transition"
          >
            <Ellipsis size={22} />
          </button>

          <button
            type="button"
            onClick={onClose}
            className="
              note-modal-close
              ml-2
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              bg-gray-100
              hover:bg-gray-200
            "
          >
            <X size={24} />
          </button>

        </div>


        {/* Body */}

        <div className="note-modal-body p-10 pr-28">

          {/* Title */}

          <div className="note-modal-title mb-2 mt-4 flex items-center gap-5">

            <div className="h-5 w-5 rounded bg-yellow-400 flex-shrink-0"></div>

            <h2 className="text-[20px] font-medium text-gray-700">
              {note.title}
            </h2>

          </div>


          {/* Date */}

          <div className="note-modal-date mb-5 flex items-center gap-5 text-gray-600">

            <CalendarDays
              size={24}
              className="flex-shrink-0"
            />

            <span className="text-[14px] font-normal">
              {note.date}
            </span>

          </div>


          {/* Description */}

          <div className="note-modal-description flex items-start gap-5">

            <img
              src={AlignLeft}
              alt="Description"
              className="
                mt-2
                h-[26px]
                w-[26px]
                flex-shrink-0
                object-contain
              "
            />

            <p className="text-[14px] font-normal leading-6 text-gray-600">
              {note.description}
            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default NoteModal;