import { useState, useRef, useEffect } from "react"; 
import"./eventdatetime.css"

const TIME_OPTIONS = Array.from({ length: 48 }, (_, i) => {
  const h = String(Math.floor(i / 2)).padStart(2, "0");
  const m = i % 2 === 0 ? "00" : "30";
  return `${h}:${m}`;
});

export default function EventDateTime() {
  const [startTime, setStartTime] = useState("00:00");
  const [endTime, setEndTime] = useState("00:00");
  const [startDate, setStartDate] = useState(new Date(2020, 6, 12)); // 12.07.2020
  const [endDate, setEndDate] = useState(new Date(2020, 6, 12));

  // Active state: 'startTime', 'endTime', 'startDate', 'endDate', or null
  const [activeMenu, setActiveMenu] = useState(null);
  const containerRef = useRef(null);

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const formatDate = (date) => {
    const d = String(date.getDate()).padStart(2, "0");
    const m = String(date.getMonth() + 1).padStart(2, "0");
    const y = date.getFullYear();
    return `${d}.${m}.${y}`;
  };

  // Build calendar days for the active date selection
  const renderCalendar = (currentDate, onSelect) => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const monthName = currentDate.toLocaleString("default", { month: "long" });

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const startOffset = (firstDay + 6) % 7; // Monday start

    const days = [];
    for (let i = 0; i < startOffset; i++) days.push(null);
    for (let i = 1; i <= daysInMonth; i++) days.push(i);

    return (
      <div className="absolute left-0 top-[54px] z-50 w-[311px] h-[300px] rounded-xl border border-[#E4E7EC] bg-white p-3 shadow-xl">
        <div className="mb-2 text-center text-sm font-semibold text-[#2C313B]">
          {monthName} {year}
        </div>
        <div className="mb-1 grid grid-cols-7 text-center text-[11px] font-medium text-[#98A2B3]">
          {["MO", "TU", "WE", "TH", "FR", "SA", "SU"].map((d) => (
            <div key={d}>{d}</div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1 text-center text-xs">
          {days.map((day, idx) =>
            day ? (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  onSelect(new Date(year, month, day));
                  setActiveMenu(null);
                }}
                className={`h-7 w-7 rounded-lg text-center transition-all ${
                  day === currentDate.getDate()
                    ? "bg-[#22963F] font-semibold text-white"
                    : "text-[#3F434A] hover:bg-gray-100"
                }`}
              >
                {day}
              </button>
            ) : (
              <div key={idx} />
            )
          )}
        </div>
      </div>
    );
  };

  return (
    <div ref={containerRef} className="flex items-center gap-3 font-sans event-date-time">
      {/* START FIELD */}
      <div className="relative flex h-[46px] w-[250px] rounded-[14px] border border-[#E4E7EC] bg-white text-sm event-date-field">
        {/* Time Button */}
        <button
          type="button"
          onClick={() => setActiveMenu(activeMenu === "startTime" ? null : "startTime")}
          className="w-[80px] border-r border-[#E4E7EC] text-center text-[#3F434A] hover:bg-gray-50 rounded-l-[14px] event-time-button"
        >
          {startTime}
        </button>

        {/* Date Button */}
        <button
          type="button"
          onClick={() => setActiveMenu(activeMenu === "startDate" ? null : "startDate")}
          className="flex flex-1 items-center justify-between px-3 text-[#3F434A] hover:bg-gray-50 rounded-r-[14px] event-date-button"
        >
          <span>{formatDate(startDate)}</span>
          <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className="text-[#98A2B3]">
            <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>

        {/* Time Popover */}
        {activeMenu === "startTime" && (
          <div className="absolute left-0 top-[54px] z-50 max-h-[180px] w-[100px] overflow-y-auto rounded-xl border border-[#E4E7EC] bg-white py-1 shadow-lg event-time-popover">
            {TIME_OPTIONS.map((time) => (
              <button
                key={time}
                type="button"
                onClick={() => {
                  setStartTime(time);
                  setActiveMenu(null);
                }}
                className={`block w-full px-3 py-1 text-left text-xs hover:bg-gray-100 ${
                  startTime === time ? "font-semibold text-[#22963F]" : "text-[#3F434A]"
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        )}

        {/* Calendar Popover */}
        {activeMenu === "startDate" && renderCalendar(startDate, setStartDate)}
      </div>

      <span className="text-lg text-[#B6BCC8] event-date-separator">—</span>

      {/* END FIELD */}
      <div className="relative flex h-[46px] w-[250px] rounded-[14px] border border-[#E4E7EC] bg-white  text-sm event-date-field">
        {/* Time Button */}
        <button
          type="button"
          onClick={() => setActiveMenu(activeMenu === "endTime" ? null : "endTime")}
          className="w-[80px] border-r border-[#E4E7EC] text-center text-[#3F434A] hover:bg-gray-50 rounded-l-[14px] event-time-button"
        >
          {endTime}
        </button>

        {/* Date Button */}
        <button
          type="button"
          onClick={() => setActiveMenu(activeMenu === "endDate" ? null : "endDate")}
          className="flex flex-1 items-center justify-between px-3 text-[#3F434A] hover:bg-gray-50 rounded-r-[14px] event-date-button"
        >
          <span>{formatDate(endDate)}</span>
          <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className="text-[#98A2B3]">
            <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>

        {/* Time Popover */}
        {activeMenu === "endTime" && (
          <div className="absolute left-0 top-[54px] z-50 max-h-[180px] w-[100px] overflow-y-auto rounded-xl border border-[#E4E7EC] bg-white py-1 shadow-lg event-time-popover">
            {TIME_OPTIONS.map((time) => (
              <button
                key={time}
                type="button"
                onClick={() => {
                  setEndTime(time);
                  setActiveMenu(null);
                }}
                className={`block w-full px-3 py-1 text-left text-xs hover:bg-gray-100 ${
                  endTime === time ? "font-semibold text-[#22963F]" : "text-[#3F434A]"
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        )}

        {/* Calendar Popover */}
        {activeMenu === "endDate" && renderCalendar(endDate, setEndDate)}
      </div>
    </div>
  );
}