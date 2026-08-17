import { CalendarDays, Pin } from "lucide-react";

const NoteCard = ({ note, onClick }) => {
  return (
    <div onClick={onClick} className="relative overflow-hidden rounded-2xl bg-white min-h-[215px]">
      {/* Yellow top-left corner */}
      <div
        className="
          absolute
          top-0
          left-0
          w-[35px]
          h-[34px]
          bg-[#FFC928]
          rounded-br-[90px]
        "
      />
      {/* Card Header */}
      <div
        className="
          flex
          items-center
          justify-between
          px-4
          py-4
          border-b
          border-dashed
          border-gray-200
        "
      >
        <div className="flex ml-4 items-center gap-1.5 text-[14px] font-normal
         text-gray-500">
          <CalendarDays size={13} strokeWidth={1.8} />
          <span>{note.date}</span>
        </div>

        <button
          type="button"
          className="
            text-gray-500
            hover:text-gray-800
            transition
          "
        >
          <Pin
            size={14}
            strokeWidth={2}
            className="rotate-40"
            fill={note.pinned ? "currentColor" : "none"}
          />
        </button>
      </div>

      {/* Content */}
      <div className="px-4 pt-3 pb-5">
        <h3 className="text-[20px] font-medium text-[#3F4149] mb-1.5">
          {note.title}
        </h3>

        <p className="text-[14px] font-normal leading-[20px] text-[#5F636B]">
          {note.description}
        </p>
      </div>
    </div>
  );
};

export default NoteCard;