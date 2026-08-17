const OutsideMonthCell = ({ day }) => {
  return (
    <div className="relative flex h-[140px] flex-col border-r border-b border-[#E9EDF5] bg-[#FAFBFD] p-2 last:border-r-0 overflow-hidden">
      {/* Diagonal Pattern */}
      <div
        className="absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 8px,
              #EEF1F6 8px,
              #EEF1F6 10px
            )
          `,
        }}
      />

      {/* Date */}
      <div className="relative flex justify-end">
        <span className="text-sm font-medium text-[#C2C7D0]">
          {day}
        </span>
      </div>
    </div>
  );
};

export default OutsideMonthCell;