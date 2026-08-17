import { MoreVertical } from "lucide-react";
import CustomerCheckbox from "./CustomerCheckbox";
import CustomerStatus from "./CustomerStatus";
import "./tablerow.css"


const CustomerRow = ({ customer, onCheckboxChange, onCustomerClick }) => {
  return (
    <tr className="h-[76px] border-b border-[#EEF2F6] transition-colors hover:bg-[#FAFBFC] customer-row-size">
      {/* Checkbox */}
      <td className="pl-6 customer-checkbox-cell">
        <CustomerCheckbox
          checked={customer.selected}
          onChange={() => onCheckboxChange(customer.id)}
        />
      </td>
      {/* Customer */}
      <td className="customer-info-cell">
        <div className="flex items-center gap-3 customer-info">
          <img
            src={customer.avatar}
            alt={customer.name}
            onClick={() => onCustomerClick(customer)}
            className="h-11 w-11 rounded-full object-cover customer-avatar"
          />
           <div className="customer-details">
            <h4 className="text-[15px] font-normal text-[#3F434A] customer-name">
              {customer.name}
            </h4>

            <p className="mt-0.5 text-[13px] text-[#8A9099] customer-email">
              {customer.email}
            </p>
          </div>
        </div>
      </td>

      {/* Location */}
      <td className="customer-location-cell">
        <span className="text-[14px] text-[#8A9099] customer-location">
          {customer.location}
        </span>
      </td>

      {/* Phone */}
       <td className="customer-phone-cell">
        <span className="text-[14px] text-[#3F434A] customer-phone">
          {customer.phone}
        </span>
      </td>

      {/* Date */}
      <td className="customer-date-cell">
        <span className="text-[14px] text-[#8A9099] customer-date">
          {customer.date}
        </span>
      </td>

      {/* Status */}
       <td className="customer-status-cell">
        <CustomerStatus status={customer.status} />
      </td>

      {/* Actions */}
       <td className="text-center customer-actions-cell">
        <button
          className="rounded-lg p-2 text-[#8A9099] transition-colors hover:bg-[#F3F4F6] hover:text-[#3F434A] customer-action-button"
          aria-label="Customer actions"
        >
          <MoreVertical size={18} />
        </button>
      </td>
    </tr>
  );
};

export default CustomerRow;