import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { chartData } from "./balanceData";
import "./balance.css"

// Custom Tooltip containing both active metrics
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="rounded-xl border border-slate-100 bg-white px-4 py-2 text-center shadow-xl">
        <div className="mb-0.5 flex items-center justify-center gap-3 font-semibold text-xs">
          <span className="text-[#34C759]">● {data.income.toLocaleString()}</span>
          <span className="text-[#48C9BE]">● {data.spending.toLocaleString()}</span>
        </div>
        <p className="m-0 text-[11px] font-medium text-slate-400">
          {data.fullDate}
        </p>
      </div>
    );
  }
  return null;
};

const BalanceChart = () => {
  return (
    <div className="h-full w-full balance-chart">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={chartData}
          margin={{
            top: 10,
            right: 10,
            left: -25,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id="balanceGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#34C759" stopOpacity={0.12} />
              <stop offset="95%" stopColor="#34C759" stopOpacity={0} />
            </linearGradient>
          </defs>

          {/* Clean Horizontal Grid Lines */}
          <CartesianGrid vertical={false} stroke="#F1F5F9" strokeDasharray="4 4" />

          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#8A9099", fontSize: 13 }}
            dy={10}
          />

          {/* Configured scale to precisely hit 10K, 5K, 2K, 1K, 0 */}
          <YAxis
            domain={[0, 10000]}
            ticks={[0, 1000, 2000, 5000, 10000]}
            tickFormatter={(val) => (val === 0 ? "0" : `${val / 1000}K`)}
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#8A9099", fontSize: 13 }}
          />

          <Tooltip
            content={<CustomTooltip />}
            cursor={{ stroke: "#CBD5E1", strokeDasharray: "4 4" }}
            defaultIndex={3} // Anchors default layout over Thursday 
          />

          <Area
            type="monotone"
            dataKey="income"
            stroke="#34C759"
            strokeWidth={3}
            fill="url(#balanceGradient)"
            dot={{ r: 3.5, fill: "#34C759", strokeWidth: 0 }}
            activeDot={{ r: 6, fill: "#34C759", stroke: "#fff", strokeWidth: 2 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BalanceChart;