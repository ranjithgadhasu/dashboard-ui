import { useState } from "react";
import CalendarModalHeader from "./CalendarModalHeader";
import CalendarForm from "./CalendarForm";
import CalendarFooter from "./CalendarFooter";
import"./calendarmodal.css"

const CalendarModal = ({ open, onClose }) => {
  const [loading, setLoading] = useState(false);

  const handleCreate = () => {
    setLoading(true);

    // Replace with your API call
    setTimeout(() => {
      setLoading(false);
      onClose();
    }, 1000);
  };

  return (
    <>
      {/* Overlay (Only covers content area after sidebar) */}
      <div
        onClick={onClose}
        className={`fixed top-0 right-0 bottom-0 left-[290px] z-40 bg-black/20 transition-all duration-300 calendar-modal-overlay ${
          open
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      />

      {/* Drawer */}
      <div
        className={`fixed top-16 left-[290px] h-full bottom-0 z-50 w-[380px] bg-white shadow-2xl transition-opacity duration-200 calendar-modal-drawer ${
          open
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="flex h-[615px] flex-col calendar-modal-container">
          {/* Header */}
          <CalendarModalHeader onClose={onClose} />

          {/* Body */}
          <div className="flex-1 overflow-y-auto px-6 py-5 calendar-modal-body">
            <CalendarForm />
          </div>

          {/* Footer */}
          <CalendarFooter
            onCancel={onClose}
            onCreate={handleCreate}
            loading={loading}
          />
        </div>
      </div>
    </>
  );
};

export default CalendarModal;
