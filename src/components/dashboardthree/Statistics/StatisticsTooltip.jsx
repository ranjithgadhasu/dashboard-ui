const StatisticsTooltip = ({ active, payload }) => {
  if (!active || !payload?.length) return null;

  return (
    <div className="rounded-[18px] bg-white px-6 py-4 shadow-xl">

      <div className="flex items-center gap-6">

        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#21943A]" />
          <span className="text-[15px]">{payload[0].value}</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#45C9B2]" />
          <span className="text-[15px]">{payload[1].value}</span>
        </div>

      </div>

      <p className="mt-3 text-center text-[#8A9099]">
        23 August, 2020
      </p>

    </div>
  );
};

export default StatisticsTooltip;