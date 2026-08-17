const StatisticsTooltip = ({ active, payload }) => {
  if (!active || !payload?.length) return null;

  const value =
    payload[1]?.value || payload[0]?.value;

  return (
    <div className="rounded-2xl w-[66px] bg-white px-6 py-3 shadow-xl">

      <h3 className="text-[12px] font-normal text-[#3F434A]">
        {value}
      </h3>

    </div>
  );
};

export default StatisticsTooltip;