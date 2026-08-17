import { useState } from "react";
import { Zap } from "lucide-react";

import PostingTooltip from "./PostingTooltip";
import { days, hours, tasks } from "./postingTasksData";
import "./posting.css"

const PostingGrid = () => {
  const [hover, setHover] = useState(null);

  return (
    <div className="posting-grid-wrapper">

      <div className="posting-grid-scroll">

        {days.map((day, row) => (

          <div
            key={day}
            className="mb-2 flex items-center posting-grid-row"
          >

            <div className="w-8 shrink-0 text-[12px] text-[#8A9099] posting-grid-day">
              {day}
            </div>

            <div className="grid flex-1 grid-cols-23 gap-2 posting-grid-hours">

              {hours.map((_, col) => {

                const task = tasks.find(
                  t => t.day === row && t.hour === col
                );

                return (
                  <div
                    key={col}
                    className="relative posting-grid-cell"
                    onMouseEnter={() => setHover(`${row}-${col}`)}
                    onMouseLeave={() => setHover(null)}
                  >

                    <div
                      className={`flex h-7 w-7 items-center justify-center cursor-pointer rounded-md
                      ${
                        task?.type === "task"
                          ? "bg-[#48C9BE]"
                          : task?.type === "light"
                          ? "bg-[#D9F5F1]"
                          : "bg-[#F7F8FA]"
                      }`}
                    >

                      {task?.type === "task" && (
                        <Zap
                          size={14}
                          className="fill-white text-white"
                        />
                      )}

                    </div>

                    {hover === `${row}-${col}` &&
                      task?.type === "task" && (
                        <div className="absolute bottom-10 left-1/2 z-50 -translate-x-1/2">
                          <PostingTooltip />
                        </div>
                      )}

                  </div>
                );
              })}

            </div>

          </div>

        ))}

        <div className="mt-4 ml-8 grid grid-cols-23 gap-2 posting-grid-labels">

          {hours.map(hour => (
            <div
              key={hour}
              className="text-center text-[11px] text-[#8A9099]"
            >
              {hour}
            </div>
          ))}

        </div>

      </div>

    </div>
  );
};

export default PostingGrid;