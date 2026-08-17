import { useState } from "react";
import { FaCaretLeft } from "react-icons/fa";
import {
  Pencil,
  Trash2,
  Clock3,
  CalendarDays,
  AlignLeft,
  MoreHorizontal,
  X,
} from "lucide-react";
import DeleteEventModal from "./DeleteEventModal";
import "./eventpopup.css"

const EventDetailsPopup = ({
  open,
  title,
  description,
  date,
  time,
  calendar,
  color,
  onClose,
}) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  if (!open) return null;
  return (
<>
    <div className="absolute left-35 top-[-40px] z-50 w-[470px] rounded-2xl bg-white p-6 shadow-2xl event-details-popup">
      <div className="relative ml-[-44px] mt-2 text-white event-popup-arrow">
        <FaCaretLeft size={30} />
      </div>
      {/* Header */}
      <div className="mb-6 flex items-center justify-end gap-4 event-popup-actions">
        <Pencil className="h-4 w-4 cursor-pointer event-popup-icon" />
        <Trash2
          className="h-4 w-4 cursor-pointer event-popup-icon"
          onClick={() => setShowDeleteModal(true)}
        />
        <MoreHorizontal className="h-4 w-4 cursor-pointer event-popup-icon" />
        <X className="h-4 w-4 cursor-pointer event-popup-icon" onClick={onClose} />
      </div>
      {/* Title */}
      <div className="mb-4 flex items-center gap-3 event-popup-title">
        <span className="h-3 w-3 rounded-sm event-popup-color" style={{ background: color }} />
        <h3 className="text-[20px] text-[#2D4058] font-medium event-popup-title-text">{title}</h3>
      </div>
      {/* Time */}
      <div className="mb-4 flex items-center gap-4 event-popup-row">
        <Clock3 size={18}  className="event-popup-row-icon"/>

        <span className="text-[14px] text-[#2D4058] event-popup-row-text">
          {date} · {time}
        </span>
      </div>

      {/* Description */}

      <div className="mb-5 flex gap-4 event-popup-description">
        <AlignLeft size={18} className="event-popup-row-icon"  />

        <p className="text-[#737791] event-popup-description-text">{description}</p>
      </div>

      {/* Calendar */}

      <div className="flex items-center gap-4 event-popup-row">
        <CalendarDays size={18}  className="event-popup-row-icon" />

        <span className="text-[#2D4058] text-[14px] event-popup-row-text">{calendar}</span>
      </div>
    </div>
    <DeleteEventModal
  open={showDeleteModal}
  onClose={() => setShowDeleteModal(false)}
  onDelete={() => {
    console.log("Delete Event");

    setShowDeleteModal(false);
    onClose();
  }}
/>
</>
  );
};

export default EventDetailsPopup;
