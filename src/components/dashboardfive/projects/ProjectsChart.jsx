import {
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
} from "recharts";

const ProjectsChart = () => {
  return (
    <div className="relative mx-auto h-[250px] w-[250px]">

      {/* Cyan Arc */}
      <div className="absolute inset-0">
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            data={[{ value: 100 }]}
            cx="50%"
            cy="58%"
            innerRadius="82%"
            outerRadius="94%"
            startAngle={220}
            endAngle={75}
          >
            <RadialBar
              dataKey="value"
              fill="#48C9BE"
              cornerRadius={20}
              background={false}
            />
          </RadialBarChart>
        </ResponsiveContainer>
      </div>

      {/* Green Arc */}
      <div className="absolute inset-0">
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            data={[{ value: 100 }]}
            cx="50%"
            cy="58%"
            innerRadius="82%"
            outerRadius="94%"
            startAngle={72}
            endAngle={20}
          >
            <RadialBar
              dataKey="value"
              fill="#22963F"
              cornerRadius={20}
              background={false}
            />
          </RadialBarChart>
        </ResponsiveContainer>
      </div>

      {/* Yellow Arc */}
      <div className="absolute inset-0">
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            data={[{ value: 100 }]}
            cx="50%"
            cy="58%"
            innerRadius="82%"
            outerRadius="94%"
            startAngle={18}
            endAngle={-35}
          >
            <RadialBar
              dataKey="value"
              fill="#FFC83D"
              cornerRadius={20}
              background={false}
            />
          </RadialBarChart>
        </ResponsiveContainer>
      </div>

      {/* Center Content */}

      <div className="absolute left-1/2 top-[58%] -translate-x-1/2 -translate-y-1/2 text-center">

        <h2 className="text-[36px] font-medium leading-none text-[#3F434A]">
          830
        </h2>

        <p className="mt-3 text-[14px] font-normal text-[#8A9099]">
          Projects
        </p>

      </div>

    </div>
  );
};

export default ProjectsChart;