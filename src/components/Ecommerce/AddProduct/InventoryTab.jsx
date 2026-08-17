const InventoryTab = () => {
  return (
    <div className="h-[406px]">
      {/* Title */}
      <h2 className="mb-8 text-[28px] font-medium text-[#374151]">
        Inventory
      </h2>

      {/* SKU */}
      <div className="mb-6">
        <label className="mb-2 block text-[14px] font-normal text-[#6B7280]">
          SKU
        </label>

        <input
          type="text"
          placeholder="0"
          className="h-[40px] w-full rounded-xl border border-[#E5E7EB] px-4 text-[15px] font-medium text-[#374151] outline-none transition-all focus:border-[#22963F]"
        />
      </div>

      {/* Quantity */}
      <div className="mb-10">
        <label className="mb-2 block text-[14px] font-normal text-[#6B7280]">
          Quantity
        </label>

        <input
          type="number"
          placeholder="0"
          className="h-[40px] w-full rounded-xl border border-[#E5E7EB] px-4 text-[15px] font-medium text-[#374151] outline-none transition-all focus:border-[#22963F]"
        />
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

export default InventoryTab;