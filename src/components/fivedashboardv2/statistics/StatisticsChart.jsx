import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  Cell,
  LabelList,
} from "recharts";

import { MoreHorizontal } from "lucide-react";
import SumIconFour from "../../../assets/icons/SumIconFour.png";
import { statisticsData } from "./statisticsData";

const StarLabel = ({ x, y, width, index }) => {
  if (index !== 3) return null;

  return (
    <text
      x={x + width / 2}
      y={y + 15}
      textAnchor="middle"
      fontSize="12"
      fontWeight="700"
      fill="#FFFFFF"
    >
      ★
    </text>
  );
};

const StatisticsChart = () => {
  return (
    <div className="flex h-[402px] w-full flex-col rounded-[20px] border border-[#E9EEF5] bg-white p-6">

      {/* Header */}

      <div className="mb-5 flex items-center justify-between">

        <h2 className="text-[20px] font-medium text-[#3F434A]">
          Statistics
        </h2>

        <MoreHorizontal
          size={22}
          className="text-[#8A9099]"
        />

      </div>

      {/* Chart */}

      <div className="flex-1">

        <ResponsiveContainer width="100%" height="100%">

          <BarChart
            data={statisticsData}
            margin={{
              top: 10,
              right: 5,
              left: 5,
              bottom: 0,
            }}
          >

            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tickMargin={14}
              tick={{
                fill: "#8A9099",
                fontSize: 14,
              }}
            />

            <Bar
              dataKey="value"
              radius={[12, 12, 12, 12]}
              barSize={22}
            >
              {statisticsData.map((item, index) => (
                <Cell
                  key={index}
                  fill={item.active ? "#48C9BE" : "#22963F"}
                />
              ))}

              <LabelList content={<StarLabel />} />

            </Bar>

          </BarChart>

        </ResponsiveContainer>

      </div>

      {/* Divider */}

      <div className="my-4 h-px bg-[#EEF2F6]" />

      {/* Footer */}

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-3">

          <div className="flex h-[42px] w-[42px] ml-5 items-center justify-center rounded-[14px] bg-[#EEF9F1]">

            <img
              src={SumIconFour}
              alt="Completed Project"
              className="h-5 w-5"
            />

          </div>

          <div>

            <h3 className="text-[15px] font-medium text-[#3F434A]">
              Completed Project
            </h3>

            <p className="text-[13px] text-[#8A9099]">
              Current Week
            </p>

          </div>

        </div>

        <h2 className="text-[24px] font-semibold leading-none text-[#3F434A]">
          874
        </h2>
      </div>
    </div>
  );
};

export default StatisticsChart;