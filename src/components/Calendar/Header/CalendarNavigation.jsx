import { ChevronLeft, ChevronRight } from "lucide-react"; 
import "./calendar.css"

const CalendarNavigation = ({
  onPrevious,
  onNext,
  onToday,
}) => {
  return (
    <div className="flex items-center gap-3 calendar-navigation">
      {/* Previous / Next */}
      <div className="flex overflow-hidden rounded-xl border border-[#E9EDF5] bg-white calendar-nav-buttons">
        <button
          type="button"
          onClick={onPrevious}
          className="flex h-10 w-10 items-center justify-center border-r border-[#E9EDF5] text-[#8A9099] transition hover:bg-[#F8F9FB] hover:text-[#3F434A] calendar-nav-button"
        >
          <ChevronLeft size={18} />
        </button>

        <button
          type="button"
          onClick={onNext}
          className="flex h-10 w-10 items-center justify-center text-[#8A9099] transition hover:bg-[#F8F9FB] hover:text-[#3F434A] calendar-nav-button"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Today Button */}
      <button
        type="button"
        onClick={onToday}
        className="flex h-10 items-center justify-center rounded-xl bg-[#F6F7FB] px-6 text-[14px] font-medium text-[#3F434A] transition hover:bg-[#ECEEF4] calendar-today-button"
      >
        Today
      </button>
    </div>
  );
};

export default CalendarNavigation;