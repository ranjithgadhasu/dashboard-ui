import { calendarData } from "../data/calendarData";
import CalendarRow from "./CalendarRow";

const CalendarBody = () => {
  return (
    <>
      {calendarData.map((week, index) => (
        <CalendarRow
          key={index}
          week={week}
        />
      ))}
    </>
  );
};

export default CalendarBody;