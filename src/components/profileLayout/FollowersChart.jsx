import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

import { MoreHorizontal } from "lucide-react";

import { followersData } from "../../data/followersChartData";

//const total = followersData.reduce((sum, item) => sum + item.value, 0);

const FollowersChart = () => {
  return (
    <div className="rounded-[24px] border border-[#E9EEF5] bg-white p-8 followers-chart-card">
      {/* Header */}

      <div className="mb-6 flex items-center justify-between followers-chart-header">
        <h2 className="text-[20px] font-medium text-[#3F434A]">Followers</h2>

        <button>
          <MoreHorizontal size={24} className="text-[#8A9099]" />
        </button>
      </div>

      {/* Chart */}

      <div className="relative mx-auto h-[280px] w-[280px] followers-pie-chart">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={followersData}
              dataKey="value"
              startAngle={170}
              endAngle={-225}
              innerRadius={85}
              outerRadius={100}
              paddingAngle={-8}
              cornerRadius={20}
              stroke="#FFFFFF"
              strokeWidth={3}
            >
              {followersData.map((item) => (
                <Cell key={item.name} fill={item.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        {/* Center Text */}

        <div className="absolute inset-0 flex flex-col items-center justify-center followers-chart-center">
          <h2 className="text-[28px] font-medium leading-none text-[#3F434A]">
            21.800
          </h2>

          <p className="mt-1 text-[14px] text-[#8A9099]">Total</p>
        </div>
      </div>

      {/* Footer */}

   <div className="space-y-5 followers-chart-footer">

  {/* First Row */}
  <div className="grid grid-cols-2 gap-x-8 followers-chart-row">

    <div className="flex items-center gap-3">
      <span className="h-3 w-3 rounded-full bg-[#45C9B2]" />
      <span className="text-[14px] font-normal text-[#8A9099]">
        Facebook
      </span>
      <span className="text-[14px] font-normal text-[#3F434A]">
        3.5k
      </span>
    </div>

    <div className="flex items-center gap-3">
      <span className="h-3 w-3 rounded-full bg-[#FFC83D]" />
      <span className="text-[14px] font-normal text-[#8A9099]">
        Twitter
      </span>
      <span className="text-[14px] font-normal text-[#3F434A]">
        7.8k
      </span>
    </div>

  </div>

  {/* Divider */}
  <div className="border-t border-[#EEF2F6]"></div>

  {/* Second Row */}
  <div className="grid grid-cols-2 gap-x-8 followers-chart-row">

    <div className="flex items-center gap-3">
      <span className="h-3 w-3 rounded-full bg-[#21943A]" />
      <span className="text-[14px] font-normal text-[#8A9099]">
        Instagram
      </span>
      <span className="text-[14px] font-normal text-[#3F434A]">
        5.8k
      </span>
    </div>

    <div className="flex items-center gap-3 followers-chart-item">
      <span className="h-3 w-3 rounded-full bg-[#FF6B6B]" />
      <span className="text-[14px] font-normal text-[#8A9099]">
        YouTube
      </span>
      <span className="text-[14px] font-normal text-[#3F434A]">
        4.7k
      </span>
    </div>

  </div>

</div>
    </div>
  );
};

export default FollowersChart;
