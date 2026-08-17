import { ChevronDown } from "lucide-react";
import Checkbox from "./Checkbox";

const OrdersTableHeader = ({ checked, onChange }) => {
  return (
    <thead className="bg-white">
      <tr className="h-[52px] border-b border-[#E5E7EB]">
        {/* Checkbox */}
      <th className="w-[48px] px-4 text-left">
  <Checkbox
    checked={checked}
    onChange={onChange}
  />
</th>

        {/* Order No */}
        <th className="px-4 text-left">
          <button className="flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wide text-[#8B909A]">
            ORDER NO.
            <ChevronDown size={12} strokeWidth={2} />
          </button>
        </th>

        {/* Customer */}
        <th className="px-4 text-left">
          <button className="flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wide text-[#8B909A]">
            CUSTOMER
            <ChevronDown size={12} strokeWidth={2} />
          </button>
        </th>

        {/* Date */}
        <th className="px-4 text-left">
          <button className="flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wide text-[#8B909A]">
            DATE
            <ChevronDown size={12} strokeWidth={2} />
          </button>
        </th>

        {/* Total */}
        <th className="px-4 text-left">
          <button className="flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wide text-[#8B909A]">
            TOTAL
            <ChevronDown size={12} strokeWidth={2} />
          </button>
        </th>

        {/* Payment */}
        <th className="px-4 text-left">
          <button className="flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wide text-[#8B909A]">
            PAYMENT
            <ChevronDown size={12} strokeWidth={2} />
          </button>
        </th>

        {/* Status */}
        <th className="px-4 text-left">
          <button className="flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wide text-[#8B909A]">
            STATUS
            <ChevronDown size={12} strokeWidth={2} />
          </button>
        </th>

        {/* Menu */}
        <th className="w-[60px]"></th>
      </tr>
    </thead>
  );
};

export default OrdersTableHeader;
