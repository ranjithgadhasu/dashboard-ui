import { weekDays } from "./WeekData";

const WeekHeader = () => {
  return (
    <div className="grid grid-cols-[40px_repeat(7,1fr)] border-b border-[#E9EDF5] bg-white">

      {/* Empty space for Time Column */}
      <div />

      {weekDays.map((day) => (
        <div
          key={day.id}
          className="flex h-[58px] flex-col items-center justify-center border-r border-[#E9EDF5] last:border-r-0"
        >
          <span className="text-[11px] font-medium uppercase tracking-wide text-[#8A9099]">
            {day.day}
          </span>

          {day.active ? (
            <div className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-[#22963F] text-[18px] font-medium text-white">
              {day.date}
            </div>
          ) : (
            <span className="mt-1 text-[18px] font-medium text-[#3F434A]">
              {day.date}
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

export default WeekHeader;