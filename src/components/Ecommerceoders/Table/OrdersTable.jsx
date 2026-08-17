import { useState } from "react";
import OrdersTableHeader from "./OrdersTableHeader";
import OrderRow from "./OrderRow";
import ordersData from "./ordersData";
import OrderDetailsModal from "../OrderDetails/OrderDetailsModal";
import orderDetailsData from "../OrderDetails/orderDetailsData";
import "./order.css"

const OrdersTable = ({ search }) => {
  const [orders, setOrders] = useState(ordersData);
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  // Select / Unselect single row
  const handleCheckboxChange = (id) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === id ? { ...order, selected: !order.selected } : order,
      ),
    );
  };

const handleOpenOrder = () => {
  setSelectedOrder(orderDetailsData);
  setShowOrderModal(true);
};

  // Header checkbox state
  const allSelected = orders.length > 0 && orders.every((o) => o.selected);

  // Select / Unselect all
  const handleSelectAll = () => {
    setOrders((prev) =>
      prev.map((order) => ({
        ...order,
        selected: !allSelected,
      })),
    );
  };

  const filteredOrders = orders.filter((order) =>
    order.customer.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <>
      <div className="overflow-hidden rounded-xl border border-[#E5E7EB] bg-white orders-table-wrapper">
        <div className="orders-table-scroll">

        <table className="w-full orders-table">
          <OrdersTableHeader checked={allSelected} onChange={handleSelectAll} />

          <tbody>
            {filteredOrders.map((order) => (
  <OrderRow
    key={order.id}
    order={order}
    onCheckboxChange={handleCheckboxChange}
    onOpenOrder={handleOpenOrder}
  />
))}
          </tbody>
        </table>
       </ div>
      </div>
      <OrderDetailsModal
        open={showOrderModal}
        order={selectedOrder}
        onClose={() => setShowOrderModal(false)}
      />
    </>
  );
};

export default OrdersTable;
