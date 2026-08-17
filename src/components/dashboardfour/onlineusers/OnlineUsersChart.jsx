import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { onlineUsersData } from "./onlineUsersData";

const OnlineUsersChart = () => {
  return (
    <div className="relative h-[250px] w-[250px]">

      <ResponsiveContainer>

        <PieChart>

          <Pie
            data={onlineUsersData}
            dataKey="value"
            startAngle={160}
            endAngle={-270}
            innerRadius={88}
            outerRadius={98}
            paddingAngle={2}
            cornerRadius={10}
            stroke="none"
          >
            {onlineUsersData.map((item) => (
              <Cell
                key={item.name}
                fill={item.color}
              />
            ))}
          </Pie>

        </PieChart>

      </ResponsiveContainer>

      {/* Center */}

      <div className="absolute inset-0 flex flex-col items-center justify-center">

        <h2 className="text-[28px] font-medium text-[#3F434A]">
          1.883
        </h2>

        <p className="text-[14px] font-normal text-[#8A9099]">
          Online
        </p>

      </div>

    </div>
  );
};

export default OnlineUsersChart;