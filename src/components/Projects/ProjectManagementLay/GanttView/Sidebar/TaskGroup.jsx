import { useState } from "react";
import { ChevronDown, ChevronRight, MoreVertical } from "lucide-react";
import TaskItem from "./TaskItem";
import TaskMenu from "../Shared/TaskMenu";



const TaskGroup = ({ task }) => {
     const [openMenu, setOpenMenu] = useState(false);
  return (
    <div>

      {/* Parent Row */}
      <div
        className={`
          flex
          items-center
          justify-between
          border-b
          border-[#EEF2F7]
          px-4
          py-4
          transition
          hover:bg-[#F9FAFB]
          ${
            task.active
              ? "border-l-[4px] border-[#22C55E] bg-[#F8FFF9]"
              : ""
          }
        `}
      >
        <div className="flex items-center gap-3">

          {task.children?.length ? (
            <ChevronDown
              size={16}
              className="text-[#98A2B3]"
            />
          ) : (
            <ChevronRight
              size={16}
              className="text-[#98A2B3]"
            />
          )}

          <span
            className="
              text-[14px]
              font-normal
              text-[#344054]
            "
          >
            {task.name}
          </span>

        </div>

        {task.children?.length > 0 && (
          <button   onClick={() => setOpenMenu(!openMenu)}>
            <MoreVertical
              size={16}
              className="text-[#37393d]"
            />
          </button>
        )}

      <TaskMenu
        open={openMenu}
        onClose={() => setOpenMenu(false)}
      />
      </div>

      {/* Child Tasks */}
      {task.children?.map((child) => (
        <TaskItem
          key={child.id}
          task={child}
        />
      ))}

    </div>
  );
};

export default TaskGroup;