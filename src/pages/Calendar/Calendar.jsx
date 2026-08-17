import { useState } from "react";

import CalendarHeader from "../../components/Calendar/Header/CalendarHeader";
import CalendarGrid from "../../components/Calendar/Grid/CalendarGrid";
import WeekView from "../../components/Calendar/Week/WeekView";
import DayView from "../../components/Calendar/Day/DayView";
import CalendarModal from "../../components/Calendar/Modal/CalendarModal";
import EventModal from "../../components/Calendar/EventModal/EventModal";
import "./calendar.css"

const Calendar = () => {
  const [activeView, setActiveView] = useState("Month");

  const [showCalendarModal, setShowCalendarModal] = useState(false);
  const [showEventModal, setShowEventModal] = useState(false);

  return (
    <div className="relative h-full min-h-screen ml-[320px] calendar-page">
      <div className="space-y-6 h-full">

        <CalendarHeader
          activeView={activeView}
          onViewChange={setActiveView}
          onAddEvent={() => setShowEventModal(true)}
        />

        {activeView === "Month" && <CalendarGrid />}

        {activeView === "Week" && <WeekView />}

        {activeView === "Day" && <DayView />}

      </div>

      <CalendarModal
        open={showCalendarModal}
        onClose={() => setShowCalendarModal(false)}
      />

      <EventModal
        open={showEventModal}
        onClose={() => setShowEventModal(false)}
      />
    </div>
  );
};

export default Calendar;