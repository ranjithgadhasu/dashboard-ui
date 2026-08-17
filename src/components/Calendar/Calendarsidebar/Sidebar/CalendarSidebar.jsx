import { useState } from "react";
import CalendarItem from "./CalendarItem";
import { calendarSidebarData } from "./calendarSidebarData";
//import CalendarModal from "../Modal/CalendarModal"; // adjust path

const CalendarSidebar = ({ onAddCalendar }) => {
  const [openMenu, setOpenMenu] = useState(null);
// const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="w-[280px] border-r border-gray-200 bg-white p-6">
        <div className="mb-5 flex items-center justify-between">
          <h3 className="text-xs font-semibold uppercase text-gray-400">
            Calendars
          </h3>

          <button
             onClick={onAddCalendar}
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-100 hover:bg-gray-200"
          >
            +
          </button>
        </div>

        <div className="space-y-2">
          {calendarSidebarData.map((calendar) => (
            <CalendarItem
              key={calendar.id}
              calendar={calendar}
              open={openMenu === calendar.id}
              onToggle={() =>
                setOpenMenu(openMenu === calendar.id ? null : calendar.id)
              }
            />
          ))}
        </div>
      </div>

      {/*<CalendarModal
        open={showModal}
        onClose={() => setShowModal(false)}
      />*/}
    </>
  );
};

export default CalendarSidebar;