import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
} from "recharts";
import BalanceTooltip from "../Balance/BalanceTooltip";
import { Tooltip } from "recharts";

import { MoreHorizontal } from "lucide-react";
import { balanceData } from "./balanceData";

const BalanceCard = () => {
  return (
    <div className="relative overflow-hidden rounded-0 bg-[#21943A] p-7 balance-card">
      {/* Header */}

      <div className="flex items-start justify-between balance-card-header">
        <h2 className="text-[20px] font-medium text-white">Balance</h2>

        <button>
          <MoreHorizontal size={24} className="text-white" />
        </button>
      </div>

      {/* Amount */}

      <h1 className="mt-8 text-[36px] font-normal leading-none text-white balance-card-amount">
        $27,500.00
      </h1>

      {/* Tabs */}

      <div className="mt-8 flex gap-5 balance-card-tabs">
        <button className="rounded-xl bg-white/20 px-5 py-2 text-[12px] font-medium text-white backdrop-blur">
          Income
        </button>

        <button className="text-[12px] font-medium text-white/75">
          Expenses
        </button>
      </div>

      {/* Chart */}

      <div className="mt-10 h-[162px] balance-card-chart">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={balanceData}
            margin={{
              top: 10,
              right: 10,
              left: -30,
              bottom: 10,
            }}
          >
            {/* Add this here */}
            <CartesianGrid
              vertical={false}
              stroke="rgba(255,255,255,0.18)"
              strokeDasharray="5 5"
            />

            {/* Add this here */}
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={false}
            />

            {/* Add this here */}
            <YAxis
              domain={[0, 80]}
              ticks={[0, 20, 40, 60, 80]}
              axisLine={false}
              tickLine={false}
              tick={false}
            />

            {/* Existing line */}
            <Line
              dataKey="value2"
              stroke="rgba(255,255,255,.25)"
              strokeWidth={3}
              dot={false}
              type="monotone"
            />

            {/* Existing line */}
            <Line
              dataKey="value1"
              stroke="#FFFFFF"
              strokeWidth={3}
              dot={false}
              type="monotone"
            />

            {/* Existing ReferenceDot */}
            <Tooltip cursor={false} content={<BalanceTooltip />} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Price Bubble */}



      {/* Bottom Dots */}

      <div className="mt-3 flex justify-center gap-[5px] balance-card-dots">
        {Array.from({ length: 42 }).map((_, index) => (
          <span
            key={index}
            className="h-[6px] w-[2px] rounded-full bg-white/50"
          />
        ))}
      </div>

      {/* Footer */}

      <div className="mt-8 flex justify-between balance-card-footer">
        <p className="text-[14px] font-normal text-[#FFFFFF] balance-card-footer-item">
          Income:
          <span className="ml-1 text-[14px] font-medium">$500</span>
        </p>

        <p className="text-[14px] font-normal text-[#FFFFFF] balance-card-footer-item">
          Spending:
          <span className="ml-1 text-[14px] font-medium">$200</span>
        </p>
      </div>
    </div>
  );
};

export default BalanceCard;
