import Checkbox from "./Checkbox";
import StatusBadge from "./StatusBadge";
import TableMenu from "./TableMenu";

const OrderRow = ({ order, onCheckboxChange, onOpenOrder }) => {
  return (
    <tr className="h-[72px] border-b border-[#F3F4F6] transition-colors hover:bg-[#FAFAFA]">
      {/* Checkbox */}
    <td className="px-4">
  <div className="flex items-center justify-center">
    <Checkbox
      checked={order.selected}
      onChange={() => onCheckboxChange(order.id)}
    />
  </div>
</td>

      {/* Order Number */}
     <td className="px-4">
  <button
    onClick={() => onOpenOrder(order)}
    className="text-[14px] font-semibold text-[#374151] hover:text-[#22963F] hover:underline transition"
  >
    {order.orderNo}
  </button>
</td>

      {/* Customer */}
      <td className="px-4">
        <span className="text-[14px] font-medium text-[#374151]">
          {order.customer}
        </span>
      </td>

      {/* Date */}
      <td className="px-4">
        <span className="text-[14px] text-[#6B7280]">
          {order.date}
        </span>
      </td>

      {/* Total */}
      <td className="px-4">
        <span className="text-[14px] font-semibold text-[#374151]">
          {order.total}
        </span>
      </td>

      {/* Payment */}
      <td className="px-4">
        <span className="text-[14px] text-[#6B7280]">
          {order.payment}
        </span>
      </td>

      {/* Status */}
      <td className="px-4">
        <StatusBadge status={order.status} />
      </td>

      {/* Menu */}
      <td className="px-4 text-right">
        <TableMenu />
      </td>
    </tr>
  );
};

export default OrderRow;