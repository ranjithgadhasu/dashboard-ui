import { useState } from "react";
import DatePicker from "react-datepicker";
import {
  CalendarDays,
  ChevronDown,
  Clock3,
} from "lucide-react";

import "react-datepicker/dist/react-datepicker.css";

const TaskDatePicker = () => {
  const [date, setDate] = useState(new Date("2020-01-17"));
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">

      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="
          flex
          w-full
          items-center
          justify-between
          rounded-xl
          border
          border-[#A3E635]
          px-4
          py-3
          bg-white
        "
      >
        <div className="flex items-center gap-3">

          <CalendarDays
            size={18}
            className="text-[#667085]"
          />

          <span className="text-[15px] ml-2 text-[#344054]">
            Jan 17, 2020, 10:50 AM
          </span>

        </div>

        <ChevronDown
          size={18}
          className="text-[#98A2B3]"
        />
      </button>

      {open && (

        <div
          className="
            absolute
            top-16
            left-0
            z-50
            w-[330px]
            rounded-3xl
            bg-white
            shadow-2xl
            border
            border-[#EEF2F7]
          "
        >

          <DatePicker
            inline
            selected={date}
            onChange={(d) => setDate(d)}
          />

          <div className="border-t p-5">

            <div className="mb-5 flex items-center justify-between">

              <span className="text-[#667085]">
                Due at
              </span>

              <button className="flex items-center gap-2 rounded-xl border px-4 py-2">

                <Clock3 size={18} />

                10:00 AM

              </button>

            </div>

            <button
              className="
                w-full
                rounded-xl
                bg-[#22983A]
                py-3
                font-medium
                text-white
              "
            >
              Clear Due Date
            </button>

          </div>

        </div>

      )}

    </div>
  );
};

export default TaskDatePicker;