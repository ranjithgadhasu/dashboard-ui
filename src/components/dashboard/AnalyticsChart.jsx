import {
  ResponsiveContainer,
  ComposedChart,
  Area,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import "./analyticsChart.css"

import ChartHeader from "./ChartHeader";
import AnalyticsTooltip from "./AnalyticsTooltip";
import { analyticsData } from "../../data/chartData";

const AnalyticsChart = () => {
  return (
    <div className="rounded-2xl border border-[#E9EEF5] bg-white p-6 analytics-chart-card">
      <ChartHeader title="Analytics" />

      {/* Top Values */}

      <div className="mb-8 flex gap-10 analytics-chart-values">
        <div className="flex items-center gap-4 analytics-chart-value">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EEF9F1]">
            <span className="text-2xl text-[#21943A]">↑</span>
          </div>

          <h2 className="text-[18px] font-normal text-[#3F434A]">$5.850</h2>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EEF9F7]">
            <span className="text-2xl text-[#45C9B2]">↓</span>
          </div>

          <h2 className="text-[18px] font-normal text-[#3F434A]">$1.750</h2>
        </div>
      </div>

      <div className="h-[290px] analytics-chart-area">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={analyticsData}
            margin={{
              top: 10,
              right: 10,
              left: 20,
              bottom: 10,
            }}
          >
            <defs>
              <linearGradient id="income" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#21943A" stopOpacity={0.12} />

                <stop offset="95%" stopColor="#21943A" stopOpacity={0} />
              </linearGradient>

              <linearGradient id="expense" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#21943A" stopOpacity={0.12} />

                <stop offset="95%" stopColor="#45C9B2" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid
              vertical={true}
              horizontal={false}
              stroke="#E9EEF5"
            />

            <XAxis
              dataKey="day"
              tickLine={false}
              axisLine={false}
              tick={{
                fill: "#8A9099",
                fontSize: 15,
              }}
            />

            <YAxis hide />

            <Tooltip cursor={false} content={<AnalyticsTooltip />} />

            <Area
              type="linear"
              dataKey="income"
              stroke="#21943A"
              strokeWidth={3}
              fill="url(#income)"
              fillOpacity={1}
              dot={{
                r: 4,
                fill: "#fff",
                stroke: "#21943A",
                strokeWidth: 2,
              }}
              activeDot={{
                r: 6,
                fill: "#fff",
                stroke: "#21943A",
                strokeWidth: 3,
              }}
            />

            <Area
              type="linear"
              dataKey="expense"
              stroke="#45C9B2"
              strokeWidth={3}
              fill="url(#expense)"
              fillOpacity={1}
              dot={{
                r: 4,
                fill: "#fff",
                stroke: "#45C9B2",
                strokeWidth: 2,
              }}
              activeDot={{
                r: 6,
                fill: "#fff",
                stroke: "#45C9B2",
                strokeWidth: 3,
              }}
            />

            <Line
              type="linear"
              dataKey="income"
              stroke="#21943A"
              strokeWidth={3}
              dot={{
                r: 4,
                fill: "#fff",
                stroke: "#21943A",
                strokeWidth: 2,
              }}
            />

            <Line
              type="linear"
              dataKey="expense"
              stroke="#45C9B2"
              strokeWidth={3}
              dot={{
                r: 4,
                fill: "#fff",
                stroke: "#45C9B2",
                strokeWidth: 2,
              }}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AnalyticsChart;
