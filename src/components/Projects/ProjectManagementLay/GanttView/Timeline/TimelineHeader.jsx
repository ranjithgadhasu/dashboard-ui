import { ganttData } from "../ganttData";

const DAY_WIDTH = 70;

const TimelineHeader = () => {
  return (
    <div
      className="
        sticky
        top-0
        z-20
        border-b
        border-[#EEF2F7]
        bg-white
      "
    >
      <div
        className="grid"
        style={{
          width: `${ganttData.timeline.length * DAY_WIDTH}px`,
          gridTemplateColumns: `repeat(${ganttData.timeline.length}, ${DAY_WIDTH}px)`,
        }}
      >
        {ganttData.timeline.map((day) => (
          <div
            key={day.id}
            className={`
              flex
              h-[72px]
              flex-col
              items-center
              justify-center
              border-r
              border-[#EEF2F7]
              ${day.today ? "bg-[#F3FFF5]" : "bg-white"}
            `}
          >
            <span className="text-[11px] font-semibold uppercase tracking-wide text-[#98A2B3]">
              {day.day}
            </span>

            <div
              className={`
                mt-2
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                text-[15px]
                font-semibold
                ${
                  day.today
                    ? "bg-[#22C55E] text-white"
                    : "text-[#344054]"
                }
              `}
            >
              {day.date}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelineHeader;