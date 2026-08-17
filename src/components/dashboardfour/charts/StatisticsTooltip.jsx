const StatisticsTooltip = ({ active, payload }) => {
  if (!active || !payload) return null;

  return (
    <div className="rounded-[18px] bg-white px-6 py-5 shadow-xl">

      <div className="flex items-center gap-3">
        <span className="h-3 w-3 rounded-full bg-[#21943A]" />
        <span className="text-[16px] text-[#3F434A]">
          15.650
        </span>
      </div>

      <div className="mt-3 flex items-center gap-3">
        <span className="h-3 w-3 rounded-full bg-[#4BC7BB]" />
        <span className="text-[16px] text-[#3F434A]">
          2.550
        </span>
      </div>

      <div className="mt-3 flex items-center gap-3">
        <span className="h-3 w-3 rounded-full bg-[#F7D9BC]" />
        <span className="text-[16px] text-[#3F434A]">
          2.400
        </span>
      </div>

    </div>
  );
};

export default StatisticsTooltip;