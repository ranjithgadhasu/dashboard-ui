import { useState } from "react";

const FulfillmentStatus = ({ fulfillment }) => {
  const [orderStatus, setOrderStatus] = useState(
    fulfillment?.orderStatus || "Delivered"
  );

  const [paymentStatus, setPaymentStatus] = useState(
    fulfillment?.paymentStatus || "Paid"
  );

  return (
    <div className="w-[349px] h-[120px] rounded-2xl bg-[#F8F9FB] p-6">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-[14px] font-medium text-[#3F434A]">
          Fulfilment status
        </span>

        <select
          value={orderStatus}
          onChange={(e) => setOrderStatus(e.target.value)}
          className="h-11 w-[170px] h-[40px] rounded-xl border border-[#E5E7EB] bg-white px-4 text-[14px] outline-none"
        >
          <option>Pending</option>
          <option>Processing</option>
          <option>Packed</option>
          <option>Shipped</option>
          <option>Delivered</option>
          <option>Cancelled</option>
        </select>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-[14px] font-medium text-[#3F434A]">
          Payment status
        </span>

        <select
          value={paymentStatus}
          onChange={(e) => setPaymentStatus(e.target.value)}
          className="h-11 w-[170px] h-[40px] rounded-xl border border-[#E5E7EB] bg-white px-4 text-[14px] outline-none"
        >
          <option>Pending</option>
          <option>Paid</option>
          <option>Failed</option>
          <option>Refunded</option>
        </select>
      </div>
    </div>
  );
};

export default FulfillmentStatus;