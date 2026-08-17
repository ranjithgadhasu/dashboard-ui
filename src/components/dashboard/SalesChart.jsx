

const SalesChart = () => {
 const radius = 60;
const stroke = 10;
const circumference = 2 * Math.PI * radius;

const greenPercent = 68;
const bluePercent = 24;

const greenLength = (greenPercent / 102) * circumference;
const blueLength = (bluePercent / 90) * circumference;

// Gap between arcs (increase/decrease this value)
const gap = 12;

  return (
    <div className="relative mx-auto flex h-[180px] w-[180px] items-center justify-center">

      <svg
        width="180"
        height="180"
        viewBox="0 0 180 180"
        className="-rotate-140"
      >
        {/* Green Arc */}
      {/* Green Arc */}
<circle
  cx="90"
  cy="90"
  r={radius}
  fill="none"
  stroke="#21943A"
  strokeWidth={stroke}
  strokeLinecap="round"
  strokeDasharray={`${greenLength} ${circumference}`}
  strokeDashoffset="0"
/>

{/* Blue Arc */}
<circle
  cx="90"
  cy="90"
  r={radius}
  fill="none"
  stroke="#45C9B2"
  strokeWidth={stroke}
  strokeLinecap="round"
  strokeDasharray={`${blueLength} ${circumference}`}
  strokeDashoffset={-(greenLength + gap)}
/>
      </svg>

      <div className="absolute flex flex-col items-center">
        <h2 className="text-[28px] font-medium text-[#3F434A]">
          3.500
        </h2>
        <p className="text-sm text-[#8A9099]">
          Total
        </p>
      </div>

    </div>
  );
};

export default SalesChart;