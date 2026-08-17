import { timeSlots } from "./WeekData";

const HOUR_HEIGHT = 80;

const WeekTimeColumn = () => {
  return (
    <div className="w-[48px] shrink-0 bg-white border-r border-[#E9EDF5]">
      {timeSlots.map((time) => (
        <div
          key={time}
          className="relative border-b border-[#E9EDF5]"
          style={{ height: HOUR_HEIGHT }}
        >
          <span
            className="
            week-time-label
              absolute
              left-2
              top-0
              -translate-y-1/2
              text-[11px]
              text-[#8A9099]
            "
          >
            {time}
          </span>
        </div>
      ))}
    </div>
  );
};
export default WeekTimeColumn;
