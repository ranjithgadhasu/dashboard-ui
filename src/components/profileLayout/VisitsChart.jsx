import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { ArrowDown, ArrowUp, Minus } from "lucide-react";

import VisitsHeader from "./VisitsHeader";
import VisitsTooltip from "./VisitsTooltip";
import { visitsChart } from "../../data/visitsChartData";

const VisitsChart = () => {
  return (
    <div className="rounded-[24px] border border-[#E9EEF5] bg-white px-8 pt-7 pb-6 visits-chart-card">
      <VisitsHeader />
      {/* Statistics */}

      <div className="mb-4 flex items-center gap-14 visits-statistics">
        {/* Min Visits */}

        <div className="flex items-center gap-4 visits-stat-item">
          <div className="flex h-[40px] w-[40px] items-center justify-center rounded-2xl bg-[#EEF9F7]">
            <ArrowDown size={22} className="text-[#45C9B2]" />
          </div>

          <div>
            <h3 className="text-[18px] font-normal leading-none text-[#3F434A]">
              1.400
            </h3>
            <p className="mt-1 text-[14px] font-normal text-[#8A9099]">
              Min. Visits
            </p>
          </div>
        </div>
        {/* Avg Visits */}
        <div className="flex items-center gap-4 visits-stat-item">
          <div className="flex  h-[40px] w-[40px] items-center justify-center rounded-2xl bg-[#EEF9F1]">
            <Minus size={22} className="text-[#7FCB8B]" />
          </div>
          <div>
            <h3 className="text-[18px] font-normal leading-none text-[#3F434A]">
              3.100
            </h3>
            <p className="mt-1 text-[14px] font-normal text-[#8A9099]">
              Avg. Visits
            </p>
          </div>
        </div>

        {/* Max Visits */}

        <div className="flex items-center gap-4">
          <div className="flex  h-[40px] w-[40px] items-center justify-center rounded-2xl bg-[#EEF9F1]">
            <ArrowUp size={22} className="text-[#21943A]" />
          </div>

          <div>
            <h3 className="text-[18px] font-normal leading-none text-[#3F434A]">
              9.500
            </h3>

            <p className="mt-1 text-[14px] font-normal text-[#8A9099]">
              Max. Visits
            </p>
          </div>
        </div>
      </div>
      <div className="mt-2 h-[290px] visits-chart-area">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={visitsChart}
            margin={{
              top: 8,
              right: 20,
              left: 0,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient id="visitGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#21943A" stopOpacity={0.18} />

                <stop offset="40%" stopColor="#21943A" stopOpacity={0.08} />

                <stop offset="100%" stopColor="#21943A" stopOpacity={0.02} />
              </linearGradient>
            </defs>

            <CartesianGrid stroke="#EEF2F6" vertical={false} />

            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              height={45}
              padding={{
                left: 0,
                right: 8,
              }}
              tick={{
                fill: "#8A9099",
                fontSize: 14,
              }}
            />
            <YAxis
              type="number"
              domain={[0, 4]}
              ticks={[0, 1, 2, 3, 4]}
              axisLine={false}
              tickLine={false}
              width={40}
              tickFormatter={(value) => {
                switch (value) {
                  case 0:
                    return "0";
                  case 1:
                    return "1K";
                  case 2:
                    return "2K";
                  case 3:
                    return "5K";
                  case 4:
                    return "10K";
                  default:
                    return "";
                }
              }}
              tick={{
                fill: "#8A9099",
                fontSize: 14,
              }}
            />
            <Tooltip cursor={false} content={<VisitsTooltip />} />
            <Area
              type="linear"
              dataKey="visits"
              stroke="#21943A"
              strokeWidth={2.5}
              fill="#DFF5E5"
              isAnimationActive={false}
              dot={{
                r: 4,
                fill: "#FFFFFF",
                stroke: "#21943A",
                strokeWidth: 2,
              }}
              activeDot={{
                r: 5,
                fill: "#FFFFFF",
                stroke: "#21943A",
                strokeWidth: 2.5,
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default VisitsChart;
