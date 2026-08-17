import { weekDays, timeSlots, weekEvents } from "./WeekData";
import WeekDayColumn from "./WeekDayColumn";
import CurrentTimeIndicator from "./CurrentTimeIndicator";

const WeekGrid = () => {
  return (
    <div className="relative flex-1 overflow-auto bg-white">

      {/* Grid */}
      <div className="relative grid grid-cols-7">

        {weekDays.map((day) => (
          <WeekDayColumn
            key={day.id}
            day={day}
            events={weekEvents.filter(
              (event) => event.day === day.id
            )}
            rows={timeSlots.length}
          />
        ))}

        {/* Current Time */}
        <CurrentTimeIndicator />

      </div>
    </div>
  );
};

export default WeekGrid;