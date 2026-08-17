import { MoreHorizontal } from "lucide-react";
import { transactions } from "../../data/ordersData";
import "./transaction.css"

const Transactions = () => {
  return (
    <div className="rounded-3xl border border-[#E9EEF5] bg-white p-6 transaction-sizes">

      {/* Header */}
      <div className="mb-7 flex items-center justify-between">
        <h2 className="text-[20px] font-medium text-[#3F434A]">
          Transactions
        </h2>

        <button>
          <MoreHorizontal
            size={24}
            className="text-[#8A9099]"
          />
        </button>
      </div>
      {/* List */}
      <div className="space-y-7">

        {transactions.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between"
          >

            {/* Left */}

            <div className="flex items-center gap-4">

              <img
                src={item.image}
                alt={item.name}
                className="h-12 w-12 rounded-full object-cover"
              />

              <div>

                <h3 className="text-[14px] font-normal text-[#3F434A]">
                  {item.name}
                </h3>

                <p className="mt-1 text-[14px] font-light text-[#8A9099]">
                  {item.time}
                  <span className="mx-2">—</span>
                  {item.date}
                </p>

              </div>

            </div>
            {/* Right */}
            <div className="text-right">
              <p
                className={`text-[14px] font-normal ${
                  item.status === "success"
                    ? "text-[#2AC670]"
                    : "text-[#FF5A5A]"
                }`}
              >
                {item.amount}
              </p>
              <p className="mt-1 text-[14px] font-normal text-[#8A9099]">
                {item.type}
              </p>
            </div>
          </div>
        ))}

      </div>

    </div>
  );
};

export default Transactions;