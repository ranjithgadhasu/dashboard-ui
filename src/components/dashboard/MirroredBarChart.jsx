import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import ChartHeader from "./ChartHeader";
import MirroredTooltip from "./MirroredTooltip";
import { mirroredChartData } from "../../data/mirroredChartData";

//const formatValue = (value) => Math.abs(value);

const MirroredBarChart = () => {
  return (
    <div className="relative rounded-2xl border border-[#E9EEF5] bg-white p-6">
<div className="absolute left-1/2 top-7 flex -translate-x-1/2 items-center gap-10">
  {/* Income */}
  <div className="flex items-center gap-2">
    <span className="h-3 w-3 rounded-full bg-[#21943A]"></span>
    <span className="text-[18px] font-medium text-[#8A9099]">
      Income
    </span>
  </div>

  {/* Expense */}
  <div className="flex items-center gap-2">
    <span className="h-3 w-3 rounded-full bg-[#45C9B2]"></span>
    <span className="text-[18px] font-medium text-[#8A9099]">
      Expense
    </span>
  </div>
</div>
      <ChartHeader title="Statistics" />
      
      <div className="h-[270px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={mirroredChartData}
            layout="vertical"
            stackOffset="sign"
            barCategoryGap={18}
            margin={{
              top: 10,
              right: 25,
              left: 10,
              bottom: 0,
            }}
          >
            <CartesianGrid horizontal={false} stroke="#EDF2F7" />

            <XAxis
              type="number"
              domain={[-400, 400]}
              ticks={[-400, -300, -200, -100, 0, 100, 200, 300, 400]}
              tickFormatter={(value) => {
                if (value < 0) return Math.abs(value);
                if (value > 0) return `-${value}`;
                return "0";
              }}
              axisLine={false}
              tickLine={false}
              interval={0}
            />

            <YAxis
              type="category"
              dataKey="day"
              tickLine={false}
              axisLine={false}
              tick={{
                fill: "#8A9099",
                fontSize: 15,
              }}
            />

            <Tooltip cursor={false} content={<MirroredTooltip />} />

            <Bar
              dataKey="income"
          
              stackId="stats"
              fill="#21943A"
              radius={[0, 20, 20, 0]}
              barSize={18}
            />

            <Bar
              dataKey="expense"
      
              stackId="stats"
              fill="#45C9B2"
              radius={[0, 12, 12, 0]}
              barSize={18}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MirroredBarChart;
