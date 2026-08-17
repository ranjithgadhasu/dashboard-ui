const SalesLegend = () => {
  return (
    <div className="mt-8 space-y-4">

      {/* Current Week */}

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-2">

          <span className="h-2.5 w-2.5 rounded-full bg-[#21943A]"></span>

          <span className="text-sm font-normal text-[#8A9099]">
            Current Week
          </span>

        </div>

        <span className="text-sm mr-[20px] font-medium text-[#3F434A]">
          2.500
        </span>

        <span className="text-sm font-medium text-[#22C55E]">
          ↑ 8.8%
        </span>

      </div>

      <div className="border-b border-[#EEF2F7]"></div>

      {/* Last Week */}

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-2">

          <span className="h-2.5 w-2.5 rounded-full bg-[#45C9B2]"></span>

          <span className="text-sm font-normal text-[#8A9099]">
            Last Week
          </span>

        </div>

        <span className="text-sm font-medium text-[#3F434A]">
          1.000
        </span>

        <span className="text-sm font-medium text-[#FF5B5B]">
          ↓ 5.8%
        </span>

      </div>

    </div>
  );
};

export default SalesLegend;