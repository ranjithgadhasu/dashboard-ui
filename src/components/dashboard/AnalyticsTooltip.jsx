const AnalyticsTooltip = ({ active, payload }) => {
  if (!active || !payload || !payload.length) return null;

  return (
    <div className="rounded-2xl border border-[#E9EEF5] bg-white px-6 py-4 shadow-xl">

      <h3 className="text-center text-[15px] font-normal text-[#3F434A]">
        $1.000
      </h3>

      <p className="mt-2 text-[14px] font-normal text-center text-[#8A9099]">
        22 August, 2019
      </p>

    </div>
  );
};

export default AnalyticsTooltip;