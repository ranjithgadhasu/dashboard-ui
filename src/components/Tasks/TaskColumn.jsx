import { useState } from "react";
import { MoreHorizontal } from "lucide-react";
import TaskCard from "./TaskCard";
import AddTaskButton from "./AddTaskButton";
import TaskMenu from "./TaskMenu";

const TaskColumn = ({ column, tasks }) => {
  const [activeTaskMenu, setActiveTaskMenu] = useState(null);
  const [openColumnMenu, setOpenColumnMenu] = useState(false);

  return (
    <div className="relative bg-white p-5">

      {/* Top Color */}
      <div
        className="absolute left-1/2 top-0 h-[4px] w-[64px] -translate-x-1/2 rounded-b-full"
        style={{ backgroundColor: column.color }}
      />

      {/* Header */}
      {/*<div className="mb-6 flex items-center justify-between pt-4">

        <div className="flex items-center gap-3">

          <h3 className="text-[18px] font-medium uppercase tracking-wide text-[#4B5563]">
            {column.title}
          </h3>

          <span className="flex h-7 min-w-[28px] items-center justify-center rounded-md bg-[#F3F4F6] px-2 text-xs font-semibold text-[#98A2B3]">
            {tasks.length}
          </span>

        </div>

        <div className="relative">

          <button
            onClick={() =>
              setOpenColumnMenu(!openColumnMenu)
            }
            className="rounded-lg p-2 hover:bg-[#F8F9FB]"
          >
            <MoreHorizontal
              size={18}
              className="text-[#98A2B3]"
            />
          </button>

          {openColumnMenu && <TaskMenu />}

        </div>

      </div>*/}
      {/* Header */}
<div
  className="mb-6 flex items-center justify-between rounded-2xl px-5 py-5"
  style={{
    backgroundColor: column.color,
  }}
>
  <div className="flex items-center gap-2">

    <h3 className="text-[15px] font-semibold uppercase tracking-wide text-white">
      {column.title}
    </h3>

    <span
      className="
        flex
        h-5
        min-w-[20px]
        items-center
        justify-center
        rounded-md
        bg-white/20
        px-1.5
        text-[11px]
        font-semibold
        text-white
      "
    >
      {tasks.length}
    </span>

  </div>

  <div className="relative">

    <button
      onClick={() => setOpenColumnMenu(!openColumnMenu)}
      className="rounded-lg p-1 hover:bg-white/10"
    >
      <MoreHorizontal
        size={18}
        className="text-white"
      />
    </button>

    {openColumnMenu && <TaskMenu />}

  </div>

</div>

      {/* Cards */}
      <div className="space-y-5">

        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            menuOpen={activeTaskMenu === task.id}
            onMenuToggle={() =>
              setActiveTaskMenu(
                activeTaskMenu === task.id
                  ? null
                  : task.id
              )
            }
          />
        ))}

      </div>

      <div className="mt-6">
        <AddTaskButton />
      </div>

    </div>
  );
};

export default TaskColumn;