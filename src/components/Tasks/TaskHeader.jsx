import { useState } from "react";
import {
  ChevronDown,
  SlidersHorizontal,
} from "lucide-react";

import ProjectDropdown from "./ProjectDropdown";
import AddMenu from "./AddMenu";
import TaskFilterDrawer from "./TaskRightModel/TaskFilterDrawer";
import TaskDetailsDrawer from "./TasksDetailsModal/TaskDetailsDrawer";
import TaskDetailsProfileDrawer from "./TasksDetailsModal/TaskDetailsProfileDrawer";
import "./taskheader.css"

const TaskHeader = () => {
  const [openProjects, setOpenProjects] = useState(false);
  const [openAddMenu, setOpenAddMenu] = useState(false);
  const [openFilter, setOpenFilter] = useState(false);
const [openTaskDetails, setOpenTaskDetails] = useState(false);
const [openProfileDrawer, setOpenProfileDrawer] = useState(false);

  const toggleProjects = () => {

    setOpenAddMenu(false);
    setOpenProjects((prev) => !prev);
  };

  const toggleAdd = () => {
    setOpenProjects(false);
    setOpenAddMenu((prev) => !prev);
  };

  return (
   <>
    <div className="flex items-center justify-between px-6 py-5">

      {/* Left */}
      <div className="relative flex items-center gap-2">
<button
  type="button"
  onClick={toggleProjects}
  className="flex items-center gap-2 rounded-lg px-2 py-1 transition hover:bg-[#F5F7FA]"
>
  <h1 className="text-[28px] font-medium tracking-tight text-[#344054] task-text-size">
    Design Plan
  </h1>

  <ChevronDown
    size={18}
    className={`text-[#98A2B3] transition duration-200 ${
      openProjects ? "rotate-180" : ""
    }`}
  />
</button>

        {openProjects && (
          <ProjectDropdown />
        )}

      </div>

      {/* Right */}
      <div className="flex items-center gap-3">

        {/* Filter */}
      <button
  type="button"
  onClick={() => setOpenFilter(true)}
  className="
    flex
    h-11
    w-11
    items-center
    justify-center
    rounded-xl
    border
    border-[#EEF2F7]
    bg-white
    text-[#667085]
    shadow-sm
    transition-all
    duration-200
    hover:border-[#22C55E]
    hover:text-[#22C55E]
  "
>
  <SlidersHorizontal size={18} />
</button>

        {/* Add */}
        <div className="relative">

          <button
            type="button"
            onClick={toggleAdd}
            className="
              flex
              h-[40px]
              items-center
              gap-2
              rounded-xl
              bg-[#22983A]
              px-5
              py-[11px]
              text-[15px]
              font-medium
              text-white
              shadow-sm
              transition-all
              duration-200
              hover:bg-[#16A34A]
            "
          >
            Add

            <ChevronDown
              size={15}
              className={`transition ${
                openAddMenu ? "rotate-180" : ""
              }`}
            />
          </button>

          {openAddMenu && (
            <AddMenu />
          )}

        </div>

      </div>

    </div>
 <TaskFilterDrawer
  open={openFilter}
  onClose={() => setOpenFilter(false)}
  onApply={() => {
    setOpenFilter(false);
    setOpenTaskDetails(true);
  }}
/>
<TaskDetailsDrawer
  open={openTaskDetails}
  onClose={() => setOpenTaskDetails(false)}
  onOpenProfile={() => {
    setOpenTaskDetails(false);
    setOpenProfileDrawer(true);
  }}
/>
<TaskDetailsProfileDrawer
  open={openProfileDrawer}
  onClose={() => setOpenProfileDrawer(false)}
/>
   </>
  );
};

export default TaskHeader;