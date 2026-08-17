import CustomerInfo from "../CustomerInfo";
import PaymentSection from "../PaymentSection";
import AddressAccordion from "../AddressAccordion";

const OrderDetailsContent = ({ order }) => {
  return (
    <div className="space-y-8 p-8">
      <CustomerInfo order={order} />

      <PaymentSection order={order} />

      <AddressAccordion order={order} />
    </div>
  );
};

export default OrderDetailsContent;