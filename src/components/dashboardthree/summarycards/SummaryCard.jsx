import { ArrowUp, ArrowDown } from "lucide-react";

const SummaryCard = ({ item }) => {
  return (
    <div className="flex items-center justify-between">

      <div>

        <p className="text-[15px] font-normal text-[#8A9099]">
          {item.title}
        </p>

        <div className="mt-[-5px] flex items-center gap-2">

          <h2 className="text-[30px] font-medium text-[#3F434A]">
            {item.value}
          </h2>

          <span
            className={`flex font-normal items-center gap-1 text-[15px] ${
              item.trend === "up"
                ? "text-[#22C55E]"
                : "text-[#FF5C5C]"
            }`}
          >
            {item.trend === "up" ? (
              <ArrowUp size={12} />
            ) : (
              <ArrowDown size={12} />
            )}

            {item.change}
          </span>

        </div>

      </div>

      <img
        src={item.chart}
        alt=""
        className="h-12 w-35 object-contain"
      />

    </div>
  );
};

export default SummaryCard;