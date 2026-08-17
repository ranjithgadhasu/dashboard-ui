import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import ChartHeader from "./ChartHeader";
import CustomTooltip from "./CustomTooltip";
import { statisticsData } from "../../data/chartData";
import CustomBar from "./CustomBar";

const StatisticsChart = () => {
  return (
    <div className="bg-white rounded-2xl border border-[#E9EEF5] p-6">
      <ChartHeader title="Statistics" />

      <div className="h-[360px]">
        <ResponsiveContainer width="100%" height="100%">
         <BarChart
  data={statisticsData}
  margin={{
    top: 20,
    right: 20,
    left: -20,
    bottom: 20,
  }}
  barCategoryGap="45%"
>
           <CartesianGrid
    vertical={false}
    stroke="#E9EEF5"
    strokeDasharray="0"
/>
<XAxis
    dataKey="day"
    tickLine={false}
    axisLine={false}
    tick={{
        fill:"#8A9099",
        fontSize:16
    }}
/>

           <YAxis
    domain={[0, 400]}
    ticks={[0, 100, 200, 300, 400]}
    tickLine={false}
    axisLine={false}
    tick={{
        fill:"#8A9099",
        fontSize:15
    }}
/>
            <Tooltip cursor={false} content={<CustomTooltip />} />

   <Legend
  verticalAlign="bottom"
  align="right"
  iconType="circle"
  formatter={(value) => (
    <span
      style={{
        color: "#8A9099",
        fontSize: "18px",
        fontWeight: 500,
      }}
    >
      {value}
    </span>
  )}
/>
<Bar
  dataKey="Income"
   name="Income"
  fill="#21943A"
  shape={<CustomBar />}
  barSize={26}
/>
<Bar
  dataKey="expense"
   name="Expense"
  fill="#45C9B2"
  shape={<CustomBar />}
  barSize={26}
/>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default StatisticsChart;
