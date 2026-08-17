import "./projectcard.css"

const ProjectsChart = () => {
  const size = 210;
  const center = size / 2;

  const rings = [
    {
      radius: 82,
      color: "#48C9BE",
      bg: "#EAF8F6",
      value: 82,
      rotate: -100,
    },
    {
      radius: 62,
      color: "#22963F",
      bg: "#EDF8EF",
      value: 68,
      rotate: -100,
    },
    {
      radius: 42,
      color: "#FFC83D",
      bg: "#FFF7E6",
      value: 58,
      rotate: -76,
    },
  ];

  return (
    <div className="relative mx-auto h-[210px] w-[210px] projects-chart">

      <svg width={size} height={size}>

        {rings.map((ring, index) => {
          const circumference = 2 * Math.PI * ring.radius;
          const dash = (ring.value / 100) * circumference;

          return (
            <g
              key={index}
              transform={`rotate(${ring.rotate} ${center} ${center})`}
            >
              {/* Background */}

              <circle
                cx={center}
                cy={center}
                r={ring.radius}
                fill="none"
                stroke={ring.bg}
                strokeWidth="14"
                strokeLinecap="round"
              />

              {/* Progress */}

              <circle
                cx={center}
                cy={center}
                r={ring.radius}
                fill="none"
                stroke={ring.color}
                strokeWidth="14"
                strokeLinecap="round"
                strokeDasharray={`${dash} ${circumference}`}
              />
            </g>
          );
        })}
      </svg>

    </div>
  );
};

export default ProjectsChart;