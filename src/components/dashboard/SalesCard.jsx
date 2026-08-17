import SalesChart from "./SalesChart";
import SalesLegend from "./SalesLegend";
import { MoreHorizontal } from "lucide-react";

const SalesCard = () => {
  return (
    <div className="rounded-2xl border border-[#E9EEF5] bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-[20px] font-medium text-[#3F434A]">
          Sales
        </h2>

        <button>
          <MoreHorizontal
            size={20}
            className="text-[#8A9099]"
          />
        </button>
      </div>

      <SalesChart />
      <SalesLegend />
    </div>
  );
};

export default SalesCard;