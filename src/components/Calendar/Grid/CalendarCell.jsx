import { useState } from "react";
import OutsideMonthCell from "./OutsideMonthCell";
import EventCard from "../Event/EventCard";
//import MoreEvents from "../Event/MoreEvents";
import EventPopover from "../Event/EventPopover";
import EventDetailsPopup from "../Event/EventDetailsPopup";

const CalendarCell = ({
  day,
  isToday = false,
  isOutside = false,
  events = [],
  moreCount = 0,
}) => {
  const [showPopover, setShowPopover] = useState(false);
  const [showPopup, setShowPopup] = useState(null);

  if (isOutside) {
    return <OutsideMonthCell day={day} />;
  }

  return (
    <div className="relative flex h-[140px] flex-col border-r border-b border-[#E9EDF5] bg-white p-2 last:border-r-0">
      {/* Date */}
      <div className="mb-2 flex justify-end">
        {isToday ? (
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#22963F] text-sm font-semibold text-white">
            {day}
          </div>
        ) : (
          <span className="text-sm font-semibold text-[#3F434A]">{day}</span>
        )}
      </div>

      {/* Events */}
      <div className="relative flex flex-1 flex-col gap-1 overflow-visible">
        {events.slice(0, 3).map((event) => (
          <EventCard
            key={event.id}
            title={event.title}
            time={event.time}
            color={event.color}
            span={event.span}
            moreCount={moreCount}
            onMoreClick={() => setShowPopover(true)}
             onClick={() => setShowPopup(event)}
          />
        ))}

        {showPopover && (
          <EventPopover
            title={`Day ${day}`}
            events={[
              {
                id: 1,
                title: "New Event",
                time: "10:00",
                bg: "bg-[#FFF4CC]",
                border: "border-[#F4C542]",
              },
              {
                id: 2,
                title: "New Event",
                time: "10:00",
                bg: "bg-[#DDF8FB]",
                border: "border-[#18C5D8]",
              },
              {
                id: 3,
                title: "New Event",
                time: "10:00",
                bg: "bg-[#DDF5E3]",
                border: "border-[#42C96A]",
              },
              {
                id: 4,
                title: "New Event",
                time: "10:00",
                bg: "bg-[#DDF8FB]",
                border: "border-[#18C5D8]",
              },
              {
                id: 5,
                title: "New Event",
                time: "10:00",
                bg: "bg-[#DDF5E3]",
                border: "border-[#42C96A]",
              },
            ]}
            onClose={() => setShowPopover(false)}
          />
        )}
        {showPopup && (
  <EventDetailsPopup
    open={true}
    title={showPopup.title}
    description={
      showPopup.description ||
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    }
    date={showPopup.date || "Wednesday, September 1"}
    time={showPopup.time || "00:30 - 01:30"}
    calendar={showPopup.calendar || "Important"}
    color={
      showPopup.color === "yellow"
        ? "#F4C542"
        : showPopup.color === "green"
        ? "#42C96A"
        : "#18C5D8"
    }
    onClose={() => setShowPopup(null)}
  />
)}
      </div>
    </div>
  );
};

export default CalendarCell;
