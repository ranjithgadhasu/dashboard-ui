import { CalendarDays } from "lucide-react";

const DateRangePicker = ({
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
}) => {
  return (
    <div className="space-y-2">
      <label className="block text-[15px] font-medium text-[#8A9099]">
        Date
      </label>

      <div className="flex items-center gap-3">

        {/* From Date */}

        <div className="relative flex-1">
          <CalendarDays
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8A9099]"
          />

          <input
            type="date"
            value={startDate}
            onChange={(e) => onStartDateChange(e.target.value)}
            className="h-12 w-[155px] rounded-2xl border border-[#E6EAF0] bg-white pl-11 pr-4 text-[15px] text-[#3F434A] outline-none transition focus:border-[#22A447]"
          />
        </div>

        {/* Divider */}

        <span className="text-[#B5BDC8]">—</span>

        {/* To Date */}

        <div className="relative flex-1">
          <CalendarDays
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8A9099]"
          />

          <input
            type="date"
            value={endDate}
            onChange={(e) => onEndDateChange(e.target.value)}
            className="h-12 w-[155px] rounded-2xl border border-[#E6EAF0] bg-white pl-11 pr-4 text-[15px] text-[#3F434A] outline-none transition focus:border-[#22A447]"
          />
        </div>

      </div>
    </div>
  );
};

export default DateRangePicker;