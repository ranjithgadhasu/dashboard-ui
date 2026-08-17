import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import CalendarButton from "../../common/CalendarButton";
import StatisticsTooltip from "./StatisticsTooltip";
import { statisticsData } from "./statisticsData";
import "./statistics.css"

const StatisticsChart = () => {
  return (
    <div className="flex h-[402px] flex-col rounded-[20px] border border-[#E9EEF5] bg-white p-6 statistics-chart-mobile">
      {/* Header */}

      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-[20px] font-medium text-[#3F434A]">Statistics</h2>

        <CalendarButton />
      </div>

      {/* Chart */}

      <div className="flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={statisticsData}
            barGap={0}
            barCategoryGap="42%"
            margin={{
              top: 10,
              right: 10,
              left: -10,
              bottom: 0,
            }}
          >
           {/* Monday & Saturday */}
<Bar
  dataKey="newTasksRounded"
  stackId="a"
  fill="#22963F"
  barSize={24}
  radius={[12, 12, 0, 0]}
  background={{
    fill: "#F3F9F5",
    radius: [12, 12, 0, 0],
  }}
/>

{/* Tue Wed Fri Sun */}
<Bar
  dataKey="newTasks"
  stackId="a"
  fill="#22963F"
  barSize={24}
  background={{
    fill: "#F3F9F5",
    radius: [12, 12, 0, 0],
  }}
/>

{/* Cyan */}
<Bar
  dataKey="inProgress"
  stackId="a"
  fill="#48C9BE"
  barSize={24}
  radius={[12, 12, 0, 0]}
/>
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tickMargin={12}
              tick={{
                fill: "#8A9099",
                fontSize: 14,
              }}
            />

            <YAxis
              domain={[0, 400]}
              ticks={[0, 100, 200, 300, 400]}
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "#8A9099",
                fontSize: 12,
              }}
            />

            <Tooltip cursor={false} content={<StatisticsTooltip />} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}

      <div className="mt-5 flex justify-end gap-8">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#22963F]" />

          <span className="text-[14px] text-[#8A9099]">New Tasks</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#48C9BE]" />

          <span className="text-[14px] text-[#8A9099]">In Progress</span>
        </div>
      </div>
    </div>
  );
};

export default StatisticsChart;
