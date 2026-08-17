import { MoreHorizontal } from "lucide-react";
import TransactionItem from "./TransactionItem";
import { transactionsData } from "./transactionsData";
import "./transactions.css"

const Transactions = () => {
  return (
    <div className="rounded-[20px] border border-[#E9EEF5] bg-white p-8 transactions-card">

      {/* Header */}

      <div className="mb-8 flex items-center justify-between transactions-header">

        <h2 className="text-[20px] font-medium text-[#3F434A]">
          Transactions
        </h2>

        <button>
          <MoreHorizontal
            size={22}
            className="text-[#8A9099]"
          />
        </button>

      </div>

      {/* List */}

      <div className="space-y-8 transactions-list">

        {transactionsData.map((item) => (
          <TransactionItem
            key={item.id}
            item={item}
          />
        ))}

      </div>

    </div>
  );
};

export default Transactions;