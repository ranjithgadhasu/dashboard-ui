import { X } from "lucide-react";

const EventPopover = ({ title, events, onClose }) => {
  return (
    <div className="absolute top-0 left-full z-50 ml-2 w-[170px] rounded-xl border border-[#ECECEC] bg-white shadow-xl">

      <div className="flex items-center justify-between border-none px-4 py-3">
        <h4 className="text-sm font-medium text-[#3F434A]">
          {title}
        </h4>

        <button onClick={onClose}>
          <X size={14} />
        </button>
      </div>

      <div className="space-y-2 p-3">
        {events.map((event) => (
          <div
            key={event.id}
            className={`flex h-[28px] items-center justify-between rounded-sm border-l-[3px] px-2
              ${event.bg}
              ${event.border}`}
          >
            <span className="truncate text-[11px]">
              {event.title}
            </span>

            <span className="text-[10px]">
              {event.time}
            </span>
          </div>
        ))}
      </div>

    </div>
  );
};

export default EventPopover;