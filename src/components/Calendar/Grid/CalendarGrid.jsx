import CalendarWeekDays from "./CalendarWeekDays";
import CalendarBody from "./CalendarBody";

const CalendarGrid = () => {
  return (
    <div className="overflow-hidden rounded-3xl border border-[#E9EDF5] bg-white shadow-sm">
      {/* Week Days */}
      <CalendarWeekDays />

      {/* Calendar Body */}
      <CalendarBody />
    </div>
  );
};

export default CalendarGrid;