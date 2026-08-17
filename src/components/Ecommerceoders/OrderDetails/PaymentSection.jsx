import FulfillmentStatus from "./FulfillmentStatus";
import orderDetailsData from "./orderDetailsData";
import "./payment.css"

const PaymentSection = ({ order }) => {
  const data = order || orderDetailsData;

  return (
    <div className="grid grid-cols-[300px_300px_1fr] gap-10  payment-section">
      {/* Payment Method */}
            <div className="payment-method">
        <h3 className="mb-5 text-[20px] font-medium text-[#3F434A] payment-title">
          Payment method
        </h3>
        <select className="mb-6 h-11 w-[180px] h-[40px] rounded-xl border border-[#E5E7EB] bg-white px-4 text-[14px] text-[#3F434A] outline-none font-medium payment-select">
          <option>{data.payment.type}</option>
        </select>

        <div className="space-y-3 text-[14px] font-normal payment-details">
          <p>
            <span className="font-medium text-[#3F434A]">
              Transaction ID:
            </span>{" "}
            <span className="text-[#6B7280]">
              {data.payment.transactionId}
            </span>
          </p>

          <p>
            <span className="font-medium text-[14px] text-[#3F434A]">Amount:</span>{" "}
            <span className="text-[#6B7280]">
              {data.payment.amount}
            </span>
          </p>
        </div>
      </div>

      {/* Shipping */}
       <div className="shipping-method">
        <h3 className="mb-5 text-[20px] font-medium text-[#3F434A] shipping-title">
          Shipping method
        </h3>
        <select className="mb-6 h-11 w-[180px]  h-[40px] rounded-xl border border-[#E5E7EB] bg-white px-4 text-[15px] text-[#3F434A] outline-none shipping-select">
          <option>{data.shipping.company}</option>
        </select>
        <div className="space-y-3 text-[14px] font-normal shipping-details">
          <p>
            <span className="font-medium text-[#3F434A]">
              Tracking Code:
            </span>{" "}
            <span className="text-[#6B7280]">
              {data.shipping.trackingNumber}
            </span>
          </p>

          <p>
            <span className="font-medium text-[#3F434A]">Date:</span>{" "}
            <span className="text-[#6B7280]">
              {data.shipping.date}
            </span>
          </p>
        </div>
      </div>

        <div className="fulfillment-section">
        <FulfillmentStatus fulfillment={data.fulfillment} />
      </div>
    </div>
  );
};

export default PaymentSection;