import CalendarNavigation from "./CalendarNavigation";
import ViewSwitcher from "./ViewSwitcher";
import AddEventButton from "./AddEventButton";
import "./calendar.css"

const CalendarHeader = ({ activeView, onViewChange, onAddEvent }) => {
  return (
    <div className="mb-1 calendar-header">
      {/* Page Header */}
      <div className="mb-6 flex items-center justify-between calendar-page-header">
        <h1 className="text-[28px] font-medium text-[#3F434A] calendar-title">
          Calendar
        </h1>
        <AddEventButton onClick={onAddEvent} className="event-button" />
      </div>
      {/* Calendar Toolbar */}
      <div className="flex items-center justify-between rounded-2xl border border-[#E9EDF5] bg-white px-6 py-4 shadow-sm calendar-toolbar">
        {/* Left */}
        <div className="calendar-navigation">
          <CalendarNavigation />
        </div>

        {/* Center */}
        <h2 className="text-[22px] font-medium text-[#3F434A] calendar-month">
          September{" "}
          <span className="ml-2 text-[18px] font-medium text-[#8A9099] calendar-year">
            2020
          </span>
        </h2>

        {/* Right */}
        <div className="calendar-view-switcher">
          <ViewSwitcher defaultView={activeView} onChange={onViewChange} />
        </div>
      </div>
    </div>
  );
};

export default CalendarHeader;
