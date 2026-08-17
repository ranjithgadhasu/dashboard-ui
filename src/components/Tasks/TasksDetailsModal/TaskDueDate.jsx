import { useState } from "react";
import DatePicker from "react-datepicker";
import {
  CalendarDays,
  ChevronDown,
  Clock3,
} from "lucide-react";

import "react-datepicker/dist/react-datepicker.css";

const TaskDueDate = ({ dueDate }) => {
  const [selectedDate, setSelectedDate] = useState(
    new Date("2020-01-17T10:00:00")
  );

  const [open, setOpen] = useState(false);

  return (
    <div className="relative mb-8">

      {/* Heading */}
      <p className="mb-4 text-[14px] font-medium uppercase tracking-[0.12em] text-[#98A2B3]">
        Due Date
      </p>

      {/* Input */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="
          flex
          w-full
          items-center
          justify-between
          rounded-2xl
          border
          border-[#EEF2F7]
          bg-white
          px-5
          py-4
          transition
          hover:border-[#22983A]
        "
      >
        <div className="flex items-center gap-4">

          <div
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              bg-[#F8F9FB]
            "
          >
            <CalendarDays
              size={20}
              className="text-[#667085]"
            />
          </div>

          <span className="text-[15px] text-[#344054]">
            {dueDate}
          </span>

        </div>

        <ChevronDown
          size={18}
          className={`transition ${
            open ? "rotate-180" : ""
          } text-[#98A2B3]`}
        />
      </button>

      {/* Popup */}
      {open && (

        <div
          className="
            absolute
            left-0
            top-[102px]
            z-50
            w-[360px]
            overflow-hidden
            rounded-[28px]
            border
            border-[#EEF2F7]
            bg-white
            shadow-[0_20px_45px_rgba(16,24,40,0.12)]
          "
        >

          {/* Calendar */}
          <div className="p-5">

            <DatePicker
              inline
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
            />

          </div>

          {/* Due Time */}
          <div className="border-t border-[#EEF2F7] px-6 py-5">

            <div className="flex items-center justify-between">

              <span className="text-[17px] text-[#344054]">
                Due at
              </span>

              <button
                className="
                  flex
                  items-center
                  gap-3
                  rounded-2xl
                  border
                  border-[#E4E7EC]
                  bg-white
                  px-5
                  py-3
                "
              >
                <Clock3
                  size={18}
                  className="text-[#667085]"
                />

                <span className="text-[16px] text-[#344054]">
                  10:00 AM
                </span>
              </button>

            </div>

          </div>

          {/* Footer */}
          <div className="border-t border-[#EEF2F7] p-6">

            <button
              type="button"
              className="
                w-full
                rounded-2xl
                bg-[#22983A]
                py-4
                text-[18px]
                font-semibold
                text-white
                transition
                hover:bg-[#1B7A30]
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

export default TaskDueDate;
