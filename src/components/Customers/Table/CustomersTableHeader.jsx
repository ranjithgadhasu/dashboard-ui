import CustomerCheckbox from "./CustomerCheckbox";
import { BiSolidDownArrow } from "react-icons/bi";
import "./tableheader.css"

const CustomersTableHeader = ({ checked, onChange }) => {
  return (
    <thead>
      <tr className="h-[56px] border-b border-[#EEF2F6] bg-[#FAFBFC] tableheader-row">

        {/* Select All */}
        <th className="w-[60px] pl-6 customer-header-checkbox">
          <CustomerCheckbox
            checked={checked}
            onChange={onChange}
          />
        </th>

        {/* Customer */}
        <th className="text-left customer-header-cell customer-header-customer">
          <span className="flex text-[12px] font-semibold uppercase tracking-[0.08em] text-[#8A9099] customer-header-title">
            Customer Name <BiSolidDownArrow size={10} className="mt-1 ml-2 customer-header-arrow"/>
          </span>

        </th>

        {/* Location */}
        <th className="text-left customer-header-cell customer-header-location">
          <span className="flex text-[12px] font-semibold uppercase tracking-[0.08em] text-[#8A9099] customer-header-title">
            Location<BiSolidDownArrow size={10} className="mt-1 ml-2 customer-header-arrow"/>
          </span>
        </th>

        {/* Phone */}
        <th className="text-left customer-header-cell customer-header-phone">
          <span className=" flex text-[12px] font-semibold uppercase tracking-[0.08em] text-[#8A9099] customer-header-title">
            Phone<BiSolidDownArrow size={10} className="mt-1 ml-2"/>
          </span>
        </th>

        {/* Date */}
        <th className="text-left customer-header-cell customer-header-date">
          <span className="flex text-[12px] font-semibold uppercase tracking-[0.08em] text-[#8A9099] customer-header-title">
            Date<BiSolidDownArrow size={10} className="mt-1 ml-2 customer-header-arrow"/>
          </span>
        </th>

        {/* Status */}
        <th className="text-left customer-header-cell customer-header-status">
          <span className="flex text-[12px] font-semibold uppercase tracking-[0.08em] text-[#8A9099] customer-header-title">
            Status<BiSolidDownArrow size={10} className="mt-1 ml-2 customer-header-arrow"/>
          </span>
        </th>

        {/* Action */}
        <th className="w-[70px] text-center customer-header-action">
          <span className="sr-only">Actions</span>
        </th>
      </tr>
    </thead>
  );
};

export default CustomersTableHeader;