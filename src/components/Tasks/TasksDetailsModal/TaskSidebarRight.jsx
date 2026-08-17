import {
  CalendarDays,
  ChevronDown,
  Plus,
} from "lucide-react";

import { taskRightSidebarData } from "./taskRightSidebarData";

const TaskSidebarRight = () => {
  const data = taskRightSidebarData;

  return (
    <div className="w-[270px] border-l border-[#EEF2F7] bg-white">

      {/* Created By */}
      <div className="border-b border-[#EEF2F7] px-7 py-7">

        <p className="mb-5 text-[12px] font-semibold uppercase tracking-[.12em] text-[#98A2B3]">
          Created By
        </p>

        <div className="flex items-center gap-3">

          <img
            src={data.createdBy.avatar}
            alt=""
            className="h-10 w-10 rounded-full object-cover"
          />

          <span className="text-[15px] font-medium text-[#344054]">
            {data.createdBy.name}
          </span>

        </div>

      </div>

      {/* Assigned */}
      <div className="border-b border-[#EEF2F7] px-7 py-7">

        <div className="mb-5 flex items-center justify-between">

          <p className="text-[12px] font-semibold uppercase tracking-[.12em] text-[#98A2B3]">
            Assigned To
          </p>

          <Plus size={18} className="text-[#667085]" />

        </div>

        <div className="flex gap-2">

          {data.assignedTo.map((img, i) => (
            <img
              key={i}
              src={img}
              alt=""
              className="h-10 w-10 rounded-full border-[3px] border-white"
            />
          ))}

        </div>

      </div>

      {/* Due Date */}
      <div className="border-b border-[#EEF2F7] px-7 py-7">

        <p className="mb-5 text-[12px] font-semibold uppercase tracking-[.12em] text-[#98A2B3]">
          Due Date
        </p>

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">

            <CalendarDays
              size={18}
              className="text-[#667085]"
            />

            <span className="text-[15px] text-[#344054]">
              {data.dueDate}
            </span>

          </div>

          <ChevronDown
            size={16}
            className="text-[#98A2B3]"
          />

        </div>

      </div>

      {/* Labels */}
      <div className="border-b border-[#EEF2F7] px-7 py-7">

        <div className="mb-5 flex items-center justify-between">

          <p className="text-[12px] font-semibold uppercase tracking-[.12em] text-[#98A2B3]">
            Labels
          </p>

          <Plus size={18} className="text-[#667085]" />

        </div>

        <div className="flex flex-wrap gap-3">

          {data.labels.map((item) => (
            <span
              key={item.id}
              className="rounded-lg px-4 py-2 text-[13px] text-white"
              style={{
                background: item.color,
              }}
            >
              {item.name}
            </span>
          ))}

        </div>

      </div>

      {/* Dates */}
      <div className="px-7 py-7">

        <div className="mb-7">

          <p className="text-[16px] font-medium text-[#344054]">
            Created
          </p>

          <p className="mt-2 text-[15px] text-[#667085]">
            {data.created.date} {data.created.time}
          </p>

        </div>

        <div>

          <p className="text-[16px] font-medium text-[#344054]">
            Updated
          </p>

          <p className="mt-2 text-[15px] text-[#667085]">
            {data.updated.date} {data.updated.time}
          </p>

        </div>

      </div>

    </div>
  );
};

export default TaskSidebarRight;