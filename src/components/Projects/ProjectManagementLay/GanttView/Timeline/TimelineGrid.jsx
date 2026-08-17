import { ganttData } from "../ganttData";

const DAY_WIDTH = 70;

const TimelineGrid = () => {
  return (
    <div
      className="
        absolute
        inset-0
        pointer-events-none
        z-0
      "
    >
      <div
        className="grid h-full"
        style={{
          width: `${ganttData.timeline.length * DAY_WIDTH}px`,
          gridTemplateColumns: `repeat(${ganttData.timeline.length}, ${DAY_WIDTH}px)`,
        }}
      >
        {ganttData.timeline.map((day) => (
          <div
            key={day.id}
            className={`
              h-full
              border-r
              border-[#EEF2F7]
              ${day.today ? "bg-[#F8FFF9]" : ""}
            `}
          />
        ))}
      </div>
    </div>
  );
};

export default TimelineGrid;