const DateInfo = ({
  created,
  updated,
}) => {
  return (
    <div className="space-y-8">

      {/* Created */}
      <div>

        <p className="mb-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#98A2B3]">
          Created
        </p>

        <div className="space-y-1">

          <p className="text-[15px] font-medium text-[#344054]">
            {created.date}
          </p>

          <p className="text-[13px] text-[#98A2B3]">
            {created.time}
          </p>

        </div>

      </div>

      {/* Updated */}
      <div>

        <p className="mb-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#98A2B3]">
          Updated
        </p>

        <div className="space-y-1">

          <p className="text-[15px] font-medium text-[#344054]">
            {updated.date}
          </p>

          <p className="text-[13px] text-[#98A2B3]">
            {updated.time}
          </p>

        </div>

      </div>

    </div>
  );
};

export default DateInfo;