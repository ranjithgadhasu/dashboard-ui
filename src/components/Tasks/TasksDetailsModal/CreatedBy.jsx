const CreatedBy = ({ createdBy, onOpenProfile }) => {
  return (
    <div className="mb-8">

      <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#98A2B3]">
        Created By
      </p>

      <button
        type="button"
        onClick={onOpenProfile}
        className="
          flex
          w-full
          items-center
          gap-3
          rounded-xl
          p-2
          text-left
          transition
          hover:bg-[#F8F9FB]
        "
      >
        <img
          src={createdBy.avatar}
          alt={createdBy.name}
          className="
            h-10
            w-10
            rounded-full
            object-cover
            border
            border-[#EEF2F7]
          "
        />

        <div>
          <h4 className="text-[15px] font-medium text-[#344054]">
            {createdBy.name}
          </h4>

          <p className="mt-0.5 text-[13px] text-[#98A2B3]">
            {createdBy.role}
          </p>
        </div>
      </button>

    </div>
  );
};

export default CreatedBy;