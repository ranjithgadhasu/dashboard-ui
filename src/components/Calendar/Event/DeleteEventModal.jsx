const DeleteEventModal = ({ open, onClose, onDelete }) => {
  if (!open) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-[999] bg-black/25"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-[1000] flex items-center justify-center px-4">
        <div className="w-full max-w-[500px] rounded-2xl bg-white p-8 shadow-2xl">
          <h2 className="text-[20px] font-medium text-[#2D4058]">
            Deleting Event
          </h2>

          <p className="mt-4 text-[14px] text-[#737791]">
            Are you sure you want to delete this event?
          </p>

          <div className="mt-10 flex justify-end gap-5">

            <button
              onClick={onClose}
              className="h-[40px] w-[110px] rounded-2xl border border-[#E6EAF2] bg-white text-[18px] font-medium text-[#2D4058]"
            >
              Cancel
            </button>
            <button
              onClick={onDelete}
              className="h-[40px] w-[110px] rounded-2xl bg-[#FF6B6B] text-[18px] font-semibold text-white hover:bg-[#F45D5D]"
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteEventModal;