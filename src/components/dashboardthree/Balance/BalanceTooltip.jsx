const BalanceTooltip = ({ active, payload }) => {
  if (!active || !payload || !payload.length) {
    return null;
  }

  return (
    <div className="rounded-[14px] bg-white px-4 py-3 shadow-xl">

      <p className="text-[12px] font-medium text-[#21943A]">
        $250
      </p>

   

    </div>
  );
};

export default BalanceTooltip;