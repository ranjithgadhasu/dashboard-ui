import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import { ArrowUp, ArrowDown } from "lucide-react";
import CalendarButton from "../../common/CalendarButton";
import StatisticsTooltip from "../Statistics/StatisticsTooltip";
import { statisticsData } from "../Statistics/statisticsData";

const StatisticsChart = () => {
  return (
    <div className="rounded-[20px] border border-[#E9EEF5] bg-white p-8 statistics-chart-card">
      {/* Header */}

      <div className="mb-0 flex items-start justify-between">
        <div>
          <h2 className="text-[20px] font-medium text-[#3F434A]">
            Statistics
          </h2>

          <div className="mt-8 flex items-center gap-14 statistics-chart-stats">
            {/* Income */}

            <div className="flex items-center gap-4 statistics-chart-stat">
              <div className="flex h-[40px] w-[40px] items-center justify-center rounded-2xl bg-[#EEF9F1]">
                <ArrowUp size={22} className="text-[#21943A]" />
              </div>

              <div>
                <h3 className="text-[18px] font-normal text-[#3F434A]">
                  20.500
                </h3>

                <p className="text-[14px] font-normal text-[#8A9099]">Income</p>
              </div>
            </div>

            {/* Expense */}

            <div className="flex items-center gap-4 statistics-chart-stat">
              <div className="flex h-[40px] w-[40px] items-center justify-center rounded-2xl bg-[#EEF9F7]">
                <ArrowDown size={22} className="text-[#45C9B2]" />
              </div>

              <div>
                <h3 className="text-[18px] font-normal text-[#3F434A]">
                  5.400
                </h3>
                <p className="text-[14px] font-normal text-[#8A9099]">Expense</p>
              </div>
            </div>
          </div>
        </div>

        <CalendarButton />
      </div>

      {/* Chart */}

      <div className="h-[320px] statistics-chart-area">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={statisticsData}
            barCategoryGap="35%"
            barGap={0}
            margin={{
              top: 10,
              right: 10,
              left: -10,
              bottom: 0,
            }}
          >
            <CartesianGrid vertical={false} stroke="#EEF2F6" />

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
              domain={[0, 5]}
              ticks={[0, 1, 2, 3, 4]}
              interval={0}
              axisLine={false}
              tickLine={false}
              tickFormatter={(value) => {
                switch (value) {
                  case 4:
                    return "10K";
                  case 3:
                    return "5K";
                  case 2:
                    return "2K";
                  case 1:
                    return "1K";
                  case 0:
                    return "0";
                  default:
                    return "";
                }
              }}
              tick={{
                fill: "#8A9099",
                fontSize: 14,
              }}
            />

            <Tooltip cursor={false} content={<StatisticsTooltip />} />

            <Bar
              dataKey="income"
              fill="#21943A"
              radius={[10, 10, 0, 0]}
              barSize={18}
            />

            <Bar
              dataKey="expense"
              fill="#45C9B2"
              radius={[10, 10, 0, 0]}
              barSize={18}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default StatisticsChart;
