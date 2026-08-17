import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
  LabelList,
} from "recharts";
import { ReferenceArea } from "recharts";

import { Star } from "lucide-react";

import FollowersGrowthHeader from "./FollowersGrowthHeader";
import FollowersGrowthTooltip from "./FollowersGrowthTooltip";
import { followersGrowthData } from "../../data/followersGrowthData";

const FollowersGrowth = () => {
  return (
    <div className="rounded-[24px] border border-[#E9EEF5] bg-white p-8 followers-growth-card">
      <FollowersGrowthHeader />

      <div className="mt-0 h-[300px] followers-growth-chart-area">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={followersGrowthData}
            barCategoryGap="32%"
            margin={{
              top: 25,
              right: 10,
              left: -8,
              bottom: 5,
            }}
          >
            <CartesianGrid
              vertical={false}
              horizontal={true}
              stroke="#EEF2F6"
              strokeDasharray="0"
            />
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              height={40}
              tickMargin={12}
              tick={{
                fill: "#8A9099",
                fontSize: 14,
              }}
            />

            <YAxis
              type="number"
              domain={[0, 4]}
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
            {/* Grey Line */}

            <ReferenceArea y1={1995} y2={2005} fill="#8A9099" fillOpacity={1} />

            <Tooltip cursor={false} content={<FollowersGrowthTooltip />} />

            <Bar dataKey="value" radius={[14, 14, 14, 14]} barSize={26}>
              {followersGrowthData.map((item, index) => (
                <Cell key={index} fill={item.color} />
              ))}

              {/* White Star */}

              <LabelList
                content={(props) => {
                  const { x, y, index } = props;

                  if (index !== 5) return null;

                  return (
                    <foreignObject x={x + 6} y={y + 6} width={18} height={18}>
                      <Star size={14} fill="white" color="white" />
                    </foreignObject>
                  );
                }}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default FollowersGrowth;
