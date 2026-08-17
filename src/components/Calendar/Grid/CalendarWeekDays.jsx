import "./weekday.css"


const weekDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const CalendarWeekDays = () => {
  return (
    <div className="grid grid-cols-7 border-b border-[#E9EDF5] bg-[#FAFBFD] calendar-week-days">
      {weekDays.map((day) => (
        <div
          key={day}
          className="flex h-14 items-center justify-center border-r border-[#E9EDF5] last:border-r-0 calendar-week-day"
        >
          <span className="text-[14px] font-semibold text-[#8A9099] calendar-week-day-text">
            {day}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CalendarWeekDays;