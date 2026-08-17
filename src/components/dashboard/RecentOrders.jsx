import { MoreVertical } from "lucide-react";
import { recentOrders } from "../../data/ordersData";
import ChartHeader from "./ChartHeader";


const RecentOrders = () => {
  return (
    <div className="rounded-3xl border border-[#E9EEF5] bg-white p-6">

      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-[20px] font-medium text-[#3F434A]">
          Last Orders
        </h2>

       <ChartHeader />
      </div>

      {/* Table Heading */}
      <div className="mb-3 grid grid-cols-12 px-4 text-[14px] font-normal text-[#8A9099]">
        <div className="col-span-4">Customer Name</div>
        <div className="col-span-2">Order No.</div>
        <div className="col-span-2">Amount</div>
        <div className="col-span-2">Payment Type</div>
        <div className="col-span-2">Date</div>
      </div>

      {/* Rows */}
      <div className="space-y-3">
        {recentOrders.map((order) => (
          <div
            key={order.id}
            className="grid grid-cols-12 items-center rounded-2xl bg-[#F8F9FB] px-4 py-2 transition hover:bg-[#F2F4F7]"
          >
            {/* Customer */}
            <div className="col-span-4 flex items-center gap-4">
              <img
                src={order.image}
                alt={order.customer}
                className="h-12 w-12 rounded-full object-cover"
              />

              <span className="text-[14px] font-normal text-[#3F434A]">
                {order.customer}
              </span>
            </div>

            {/* Order Number */}
            <div className="col-span-2 font-normal text-[14px] text-[#8A9099]">
              {order.orderNo}
            </div>

            {/* Amount */}
            <div className="col-span-2 text-[14px] font-normal text-[#3F434A]">
              {order.amount}
            </div>

            {/* Payment */}
            <div className="col-span-2 text-[14px] font-normal text-[#8A9099]">
              {order.payment}
            </div>

            {/* Date + Menu */}
            <div className="col-span-2 flex items-center justify-between">
              <span className="text-[14px] font-normal text-[#3F434A]">
                {order.date}
              </span>

              <button>
                <MoreVertical
                  size={18}
                  className="text-[#8A9099]"
                />
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default RecentOrders;