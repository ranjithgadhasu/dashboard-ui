const ShippingTab = () => {
  return (
    <div>
      {/* Title */}
      <h2 className="mb-8 text-[28px] font-medium text-[#374151]">
        Shipping
      </h2>

      {/* Width / Height */}
      <div className="mb-6 grid grid-cols-2 gap-6">
        <div>
          <label className="mb-2 block text-[14px] font-normal text-[#6B7280]">
            Width
          </label>

          <div className="flex h-[40px] items-center rounded-xl border border-[#E5E7EB] px-4">
            <input
              type="number"
              placeholder="0"
              className="w-full border-none bg-transparent text-[15px] font-medium text-[#374151] outline-none"
            />
            <span className="ml-2 text-[15px] text-[#9CA3AF]">cm</span>
          </div>
        </div>

        <div>
          <label className="mb-2 block text-[14px] font-normal text-[#6B7280]">
            Height
          </label>

          <div className="flex h-[40px] items-center rounded-xl border border-[#E5E7EB] px-4">
            <input
              type="number"
              placeholder="0"
              className="w-full border-none bg-transparent text-[15px] font-medium text-[#374151] outline-none"
            />
            <span className="ml-2 text-[15px] text-[#9CA3AF]">cm</span>
          </div>
        </div>
      </div>

      {/* Depth / Weight */}
      <div className="mb-6 grid grid-cols-2 gap-6">
        <div>
          <label className="mb-2 block text-[14px] font-normal text-[#6B7280]">
            Depth
          </label>

          <div className="flex h-[40px] items-center rounded-xl border border-[#E5E7EB] px-4">
            <input
              type="number"
              placeholder="0"
              className="w-full border-none bg-transparent text-[15px] font-medium text-[#374151] outline-none"
            />
            <span className="ml-2 text-[15px] text-[#9CA3AF]">cm</span>
          </div>
        </div>

        <div>
          <label className="mb-2 block text-[14px] font-normal text-[#6B7280]">
            Weight
          </label>

          <div className="flex h-[40px] items-center rounded-xl border border-[#E5E7EB] px-4">
            <input
              type="number"
              placeholder="0"
              className="w-full border-none bg-transparent text-[15px] font-medium text-[#374151] outline-none"
            />
            <span className="ml-2 text-[15px] text-[#9CA3AF]">kg</span>
          </div>
        </div>
      </div>

      {/* Extra Shipping Fee */}
      <div className="mb-8">
        <label className="mb-2 block text-[14px] font-normal text-[#6B7280]">
          Extra Shipping Fee
        </label>

        <div className="flex h-[40px] items-center rounded-xl border border-[#E5E7EB] px-4">
          <span className="mr-3 text-[22px] text-[#374151]">$</span>

          <input
            type="number"
            placeholder="0.00"
            className="w-full border-none bg-transparent text-[15px] font-medium text-[#374151] outline-none"
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-4">
        <button
          type="button"
          className="flex h-[40px] w-[110px] items-center justify-center rounded-lg bg-[#22963F] text-[15px] font-medium text-white transition hover:bg-[#1C7E35]"
        >
          Save
        </button>

        <button
          type="button"
          className="flex h-[40px] w-[110px] items-center justify-center rounded-lg border border-[#D1D5DB] bg-white text-[15px] font-medium text-[#4B5563] transition hover:bg-gray-50"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ShippingTab;