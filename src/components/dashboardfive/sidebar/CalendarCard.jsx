import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./sidebar.css"

const months = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December",
];

const weekDays = ["MO", "TU", "WE", "TH", "FR", "SA", "SU"];

const dates = [
  [28, 29, 30, 31, 1, 2, 3],
  [4, 5, 6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15, 16, 17],
  [18, 19, 20, 21, 22, 23, 24],
  [25, 26, 27, 28, 29, 30, 1],
];

const CalendarCard = () => {
  const [month, setMonth] = useState(8); // September
  const [year, setYear] = useState(2020);
  const [selectedDate, setSelectedDate] = useState(12);

  const previousMonth = () => {
    if (month === 0) {
      setMonth(11);
      setYear((prev) => prev - 1);
    } else {
      setMonth((prev) => prev - 1);
    }
  };

  const nextMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear((prev) => prev + 1);
    } else {
      setMonth((prev) => prev + 1);
    }
  };

  return (
    <div className="border-y border-[#EEF2F6] bg-white px-8 py-4 calendar-cardds">

      {/* Header */}

      <div className="mb-8 flex items-center justify-between">

        <button
          onClick={previousMonth}
          className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#F8F9FB] hover:bg-[#EEF2F6]"
        >
          <ChevronLeft size={18} className="text-[#8A9099]" />
        </button>

        <h2 className="text-[18px] font-semibold text-[#3F434A]">
          {months[month]}
          <span className="ml-2 font-normal text-[#8A9099]">
            {year}
          </span>
        </h2>

        <button
          onClick={nextMonth}
          className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#F8F9FB] hover:bg-[#EEF2F6]"
        >
          <ChevronRight size={18} className="text-[#8A9099]" />
        </button>

      </div>

      {/* Week Days */}

      <div className="mb-5 grid grid-cols-7 text-center">

        {weekDays.map((day) => (
          <span
            key={day}
            className="text-[13px] font-medium text-[#8A9099]"
          >
            {day}
          </span>
        ))}

      </div>

      {/* Dates */}

      <div className="space-y-3">

        {dates.map((week, row) => (
          <div
            key={row}
            className="grid grid-cols-7 place-items-center"
          >
            {week.map((date, index) => (
              <button
                key={index}
                onClick={() => setSelectedDate(date)}
                className={`flex h-10 w-10 items-center justify-center rounded-[14px] text-[17px] transition
                ${
                  selectedDate === date
                    ? "bg-[#22963F] font-semibold text-white"
                    : "text-[#3F434A] hover:bg-[#F5F7FA]"
                }`}
              >
                {date}
              </button>
            ))}
          </div>
        ))}

      </div>

    </div>
  );
};

export default CalendarCard;