import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import CalendarButton from "../../common/CalendarButton";
import { statisticsData } from "./statisticsData";
import StatisticsTooltip from "./StatisticsTooltip";
import "./charts.css"

const StatisticsChart = () => {
  return (
    <div className="mt-15 rounded-[20px] border border-[#E9EEF5] bg-white p-8 statistics-chart-card-two">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between statistics-chart-header-two">
        <h2 className="text-[20px] font-medium text-[#3F434A]">Statistics</h2>

        <CalendarButton />
      </div>
      {/* Chart */}

      <div className="relative h-[350px] statistics-chart-area-two">
        <ResponsiveContainer>
          <BarChart data={statisticsData} barCategoryGap="45%">
            <CartesianGrid vertical={false} stroke="#EEF2F6" />

            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "#8A9099",
                fontSize: 14,
              }}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              ticks={[0, 100, 200, 300, 400]}
              tick={{
                fill: "#8A9099",
                fontSize: 14,
              }}
            />

            <Tooltip cursor={false} content={<StatisticsTooltip />} />

            <Bar
              stackId="a"
              dataKey="sales"
              fill="#21943A"
              radius={[0, 0, 0, 0]}
              barSize={16}
            />

            <Bar
              stackId="a"
              dataKey="expenses"
              fill="#F7D9BC"
              radius={[0, 0, 0, 0]}
              barSize={16}
            />

            <Bar
              stackId="a"
              dataKey="profit"
              fill="#4BC7BB"
              radius={[8, 8, 0, 0]}
              barSize={16}
            />
      
          </BarChart>
        </ResponsiveContainer>
        <div className="absoulte ml-60 mt-1 flex items-center justify-center gap-8 statistics-chart-legend-two">
          <div className="flex items-center gap-2 statistics-chart-legend-item-two">
            <span className="h-3 w-3 rounded-full bg-[#21943A]" />
            <span className="text-[14px] font-normal text-[#8A9099]">Sales</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#4BC7BB]" />
            <span className="text-[14px] font-normal text-[#8A9099]">Expenses</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#F7D9BC]" />
            <span className="text-[14px] font-normal text-[#8A9099]">Profit</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticsChart;
