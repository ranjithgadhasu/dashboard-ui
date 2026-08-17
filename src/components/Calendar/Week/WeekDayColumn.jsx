import WeekEvent from "./WeekEvent";
import { HOUR_HEIGHT } from "./WeekConstants";

//const HOUR_HEIGHT = 80;

const WeekDayColumn = ({ day, events, rows }) => {
  return (
    <div
      className={`relative border-r border-[#E9EDF5] last:border-r-0 ${
        day.active ? "bg-[#F7FCF8]" : "bg-white"
      }`}
    >
      {/* Hour Grid */}
      {Array.from({ length: rows }).map((_, index) => (
        <div
          key={index}
          style={{ height: HOUR_HEIGHT }}
          className="border-b border-[#E9EDF5]"
        />
      ))}

      {/* Events */}
      {events.map((event) => (
        <WeekEvent
          key={event.id}
          event={event}
          top={(event.startHour - 1) * HOUR_HEIGHT + 2}
          height={event.duration * HOUR_HEIGHT - 4}
        />
      ))}
    </div>
  );
};

export default WeekDayColumn;
