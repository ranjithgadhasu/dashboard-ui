import { ChevronDown } from "lucide-react";

const AddressTab = ({ customer }) => {
  return (
    <div className="px-6 py-5">
      {/* Title */}
      <h2 className="mb-10 text-[28px] font-medium text-[#3F434A]">
        Address
      </h2>

      {/* Address Line 1 */}
      <div className="mb-6">
        <label className="mb-2 block text-[14px] text-[#8A9099]">
          Address Line 1
        </label>

        <input
          type="text"
          defaultValue={customer?.address1 || "993 E. Brewer St. Holtsville"}
          className="h-[48px] w-full rounded-2xl border border-[#E5E7EB] px-4 text-[15px] text-[#3F434A] outline-none focus:border-[#22963F]"
        />
      </div>

      {/* Address Line 2 */}
      <div className="mb-6">
        <label className="mb-2 block text-[14px] text-[#8A9099]">
          Address Line 2
        </label>

        <input
          type="text"
          defaultValue={customer?.address2 || ""}
          placeholder="Optional"
          className="h-[48px] w-full rounded-2xl border border-[#E5E7EB] px-4 text-[15px] text-[#3F434A] placeholder:text-[#B8BEC8] outline-none focus:border-[#22963F]"
        />
      </div>

      {/* City */}
      <div className="mb-6">
        <label className="mb-2 block text-[14px] text-[#8A9099]">
          City
        </label>

        <input
          type="text"
          defaultValue={customer?.city || "New York"}
          className="h-[48px] w-full rounded-2xl border border-[#E5E7EB] px-4 text-[15px] text-[#3F434A] outline-none focus:border-[#22963F]"
        />
      </div>

      {/* Country */}
      <div className="mb-6">
        <label className="mb-2 block text-[14px] text-[#8A9099]">
          Country
        </label>

        <div className="relative">
          <select
            defaultValue={customer?.country || "United States"}
            className="h-[48px] w-full appearance-none rounded-2xl border border-[#E5E7EB] bg-white px-4 text-[15px] text-[#3F434A] outline-none focus:border-[#22963F]"
          >
            <option>United States</option>
            <option>Canada</option>
            <option>India</option>
            <option>Australia</option>
          </select>

          <ChevronDown
            size={18}
            className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#8A9099]"
          />
        </div>
      </div>

      {/* State + Postcode */}
      <div className="mb-8 grid grid-cols-2 gap-5">
        <div>
          <label className="mb-2 block text-[14px] text-[#8A9099]">
            State/Region
          </label>

          <input
            type="text"
            defaultValue={customer?.state || "New York"}
            className="h-[48px] w-full rounded-2xl border border-[#E5E7EB] px-4 text-[15px] text-[#3F434A] outline-none focus:border-[#22963F]"
          />
        </div>

        <div>
          <label className="mb-2 block text-[14px] text-[#8A9099]">
            Postcode
          </label>

          <input
            type="text"
            defaultValue={customer?.postcode || "11742"}
            className="h-[48px] w-full rounded-2xl border border-[#E5E7EB] px-4 text-[15px] text-[#3F434A] outline-none focus:border-[#22963F]"
          />
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="mt-4 flex items-center justify-between">
        <button className="h-[44px] rounded-xl border border-[#E5E7EB] bg-white px-7 text-[15px] font-medium text-[#4B5563] transition hover:bg-[#F8F9FB]">
          Previous
        </button>

        <button className="h-[44px] rounded-lg bg-[#22963F] px-7 text-[15px] font-medium text-white transition hover:bg-[#1E8538]">
          Next Step
        </button>
      </div>
    </div>
  );
};
export default AddressTab;