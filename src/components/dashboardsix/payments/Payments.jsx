import { MoreHorizontal } from "lucide-react";

import { paymentsData } from "./paymentsData";
import PaymentItem from "./PaymentItem";
import "./payments.css"

const Payments = () => {
  return (
    <div className="flex h-[455px] flex-col rounded-[20px] border border-[#E9EEF5] bg-white p-8 payments-size">

      {/* Header */}

      <div className="mb-8 flex items-center justify-between">

        <h2 className="text-[20px] font-medium text-[#3F434A]">
          Payments
        </h2>

        <MoreHorizontal
          size={20}
          className="text-[#8A9099]"
        />

      </div>

      {/* List */}

      <div className="flex flex-1 flex-col justify-between">

        {paymentsData.map((item) => (
          <PaymentItem
            key={item.id}
            item={item}
          />
        ))}

      </div>

    </div>
  );
};
export default Payments;