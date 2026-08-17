const MirroredTooltip = ({ active, payload, label }) => {
  if (!active || !payload || payload.length === 0) return null;

  const income = payload.find((item) => item.dataKey === "income");
  const expense = payload.find((item) => item.dataKey === "expense");

  return (
    <div className="min-w-[170px] rounded-2xl border border-[#E9EEF5] bg-white px-5 py-4 shadow-xl">
      <div className="flex items-center justify-between">

        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#21943A]" />

          <span className="text-sm font-medium text-[#3F434A]">
            {income ? income.value : 0}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#45C9B2]" />

          <span className="text-sm font-medium text-[#3F434A]">
            {expense ? Math.abs(expense.value) : 0}
          </span>
        </div>

      </div>

      <p className="mt-3 text-center text-xs text-[#8A9099]">
        Day {label}
      </p>
    </div>
  );
};

export default MirroredTooltip;