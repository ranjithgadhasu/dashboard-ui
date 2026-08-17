import EventModalHeader from "./EventModalHeader";
import EventForm from "./EventForm";
import EventFooter from "./EventFooter";
import "./eventmodel.css"

const EventModal = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-40 bg-black/30 event-modal-overlay"
        onClick={onClose}
      />
      {/* Modal */}
      <div className="fixed mt-[-10px] inset-0 z-50 flex items-center justify-center p-6 event-modal-wrapper">
        <div className="w-full max-w-[470px] h-[680px] rounded-[24px] bg-white shadow-2xl event-modal">

          <EventModalHeader onClose={onClose} />

          <div className="px-7 py-6 event-modal-body">
            <EventForm />
          </div>

          <EventFooter />
        </div>
      </div>
    </>
  );
};

export default EventModal;