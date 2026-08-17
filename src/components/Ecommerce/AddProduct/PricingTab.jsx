//import { Link } from "lucide-react";

const PricingTab = () => {
  return (
    <div>
      <h2 className="mb-8 text-[28px] font-medium text-[#374151]">
        Pricing
      </h2>

      {/* Tax Excluded Price */}
      <div className="mb-6">
        <label className="mb-2 block text-[14px] font-normal text-[#6B7280]">
          Tax Excluded Price
        </label>

        <div className="flex h-[40px] items-center rounded-xl border border-[#E5E7EB] px-4">
          <span className="mr-3 text-[22px] text-[#374151]">$</span>

          <input
            type="number"
            placeholder="2.500"
            className="w-full border-none bg-transparent text-[16px] outline-none"
          />
        </div>
      </div>

      {/* Tax Included Price */}
      <div className="mb-6">
        <label className="mb-2 block text-[14px] font-normal text-[#6B7280]">
          Tax Included Price
        </label>

        <div className="flex h-[40px] items-center rounded-xl border border-[#E5E7EB] px-4">
          <span className="mr-3 text-[22px] text-[#374151]">$</span>

          <input
            type="number"
            placeholder="0.00"
            className="w-full border-none bg-transparent text-[16px] outline-none"
          />
        </div>
      </div>

      {/* Tax Rule */}
      <div className="mb-6">
        <div className="mb-2 flex items-center justify-between">
          <label className="text-[14px] font-normal text-[#6B7280]">
            Tax Rule
          </label>

          <button
            type="button"
            className="text-[14px] font-normal text-[#22963F] hover:underline"
          >
            Create New Tax
          </button>
        </div>

        <select className="h-[40px] w-full rounded-xl border border-[#E5E7EB] px-4 outline-none">
          <option>US-AL Rate (4%)</option>
          <option>GST 18%</option>
          <option>VAT 10%</option>
        </select>
      </div>

      {/* Unit Price */}
      <div className="mb-8 flex items-end gap-4">

        <div className="flex-1">
          <label className="mb-2 block text-[14px] font-normal text-[#6B7280]">
            Unit Price
          </label>

          <div className="flex h-[40px] items-center rounded-xl border border-[#E5E7EB] px-4">
            <span className="mr-3 text-[22px]">$</span>

            <input
              type="number"
              placeholder="0.00"
              className="w-full border-none bg-transparent outline-none"
            />
          </div>
        </div>

        <div className="pb-3 text-[#D1D5DB] text-xl">
          –
        </div>

        <div className="w-[220px]">
          <label className="mb-2 block text-[14px] text-[#6B7280]">
            Per
          </label>

          <input
            type="number"
            placeholder="0"
            className="h-[40px] w-full rounded-xl border border-[#E5E7EB] px-4 outline-none"
          />
        </div>

      </div>

      {/* Buttons */}
      <div className="flex gap-4">
        <button className="rounded-lg h-[40px] w-[110px] text-[15px] font-medium bg-[#22963F] px-8 py-3 text-white hover:bg-[#1d7f35]">
          Save
        </button>

        <button className="rounded-lg  h-[40px] w-[110px] text-[15px] font-medium border border-[#D1D5DB] px-8 py-3 text-[#374151] hover:bg-gray-50">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default PricingTab;