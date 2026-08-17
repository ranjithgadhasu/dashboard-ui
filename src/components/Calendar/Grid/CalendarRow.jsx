import CalendarCell from "./CalendarCell";

const CalendarRow = ({ week }) => {
  return (
    <div className="grid grid-cols-7">
      {week.map((day, index) => (
        <CalendarCell
          key={index}
          day={day.day}
          isToday={day.isToday}
          isOutside={day.outside}
          events={day.events}
          moreCount={day.moreCount}
        />
      ))}
    </div>
  );
};

export default CalendarRow;