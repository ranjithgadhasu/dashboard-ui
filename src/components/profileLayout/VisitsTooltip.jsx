const VisitsTooltip = ({ active, payload }) => {
  if (!active || !payload?.length) return null;

  return (
    <div className="rounded-2xl w-[150px] h-[60px] px-4 py-1 border border-[#E9EEF5] bg-white shadow-xl">

      <h3 className="text-center text-[15px] font-normal text-[#3F434A]">
        Visitors: {payload[0].value.toLocaleString()}
      </h3>

      <p className="mt-2 text-center text-[14px] font-normal text-[#8A9099]">
        21 August, 2019
      </p>

    </div>
  );
};

export default VisitsTooltip;