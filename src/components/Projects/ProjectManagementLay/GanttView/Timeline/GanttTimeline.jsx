import { ganttData } from "../ganttData";
import TaskConnector from "./TaskConnector";
import TimelineGrid from "./TimelineGrid";
import TimelineHeader from "./TimelineHeader";
import TimelineRow from "./TimelineRow";
import TodayIndicator from "./TodayIndicator";

const DESKTOP_DAY_WIDTH = 70;
const MOBILE_DAY_WIDTH = 54;

const GanttTimeline = () => {
  return (
    <div className="gantt-timeline flex-1 overflow-auto bg-white">

      <div
        className="gantt-timeline-inner"
        style={{
          "--day-count": ganttData.timeline.length,
          "--desktop-day-width": `${DESKTOP_DAY_WIDTH}px`,
          "--mobile-day-width": `${MOBILE_DAY_WIDTH}px`,
        }}
      >
        <TimelineHeader />

        <div className="relative">

          <TimelineGrid />

          <TodayIndicator dayIndex={6} />

          <div className="relative z-10">

            {ganttData.tasks.map((task) => (
              <TimelineRow
                key={task.id}
                task={task}
              />
            ))}

            <TaskConnector
              top={314}
              left={372}
              width={52}
              height={58}
            />

          </div>

        </div>

      </div>
    </div>
  );
};

export default GanttTimeline;