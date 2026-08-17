const CustomTooltip = ({ active, payload }) => {
  if (!active || !payload || payload.length === 0) return null;

  const data = payload[0].payload;

  return (
    <div className="rounded-2xl border border-[#E9EEF5] bg-white px-5 py-4 shadow-xl">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#23983A]"></span>

          <span className="text-sm text-[#3F434A]">{data.income}</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#48CFCB]"></span>

          <span className="text-sm text-[#3F434A]">{data.expense}</span>
        </div>
      </div>

      <p className="mt-2 text-center text-sm text-[#8A9099]">23 August, 2020</p>
    </div>
  );
};

export default CustomTooltip;
