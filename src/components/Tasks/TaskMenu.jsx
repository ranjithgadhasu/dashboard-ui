import {
  ArrowUpDown,
  Check,
  Archive,
  Trash2,
  ChevronRight,
} from "lucide-react";
import TaskMove from "../../assets/images/TaskMove.png"

const colors = [
  "#FF6B6B",
  "#49CFC2",
  "#FFC93C",
  "#28A745",
  "#31C5E7",
  "#53D769",
  "#A3E635",
  "#A855F7",
  "#EC5DD8",
  "#E5E7EB",
];

const TaskMenu = () => {
  return (
    <div
      className="
        absolute
        right-0
        top-12
        z-50
        w-[260px]
        overflow-hidden
        rounded-3xl
        border
        border-[#EEF2F7]
        bg-white
        shadow-[0_20px_50px_rgba(16,24,40,0.12)]
      "
    >
      {/* Menu */}
      <div className="p-3">

        {/* Move */}
        <button className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-[#475467] transition hover:bg-[#F8FAFC]">

          <div className="flex items-center gap-3">
            <img src={TaskMove} size={18} />
            <span className="text-[17px]">Move</span>
          </div>

        </button>

        {/* Sort */}
        <button className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-[#475467] transition hover:bg-[#F8FAFC]">

          <div className="flex items-center gap-3">
            <ArrowUpDown size={18} />
            <span className="text-[17px]">
              Sort Tasks
            </span>
          </div>

          <ChevronRight size={16} />

        </button>

        {/* Divider */}
        <div className="my-2 border-t border-[#EEF2F7]" />

        {/* Complete */}
        <button className="flex w-full items-center gap-3 rounded-xl bg-[#F8FAFC] px-4 py-3 text-[#344054]">

          <Check
            size={18}
            className="text-[#3d3f3e]"
          />

          <span className="text-[17px]">
            Complete Tasks
          </span>

        </button>

        {/* Archive */}
        <button className="mt-1 flex w-full items-center gap-3 rounded-xl px-4 py-3 text-[#475467] transition hover:bg-[#F8FAFC]">

          <Archive size={18} />

          <span className="text-[17px]">
            Archive Tasks
          </span>

        </button>

        {/* Divider */}
        <div className="my-2 border-t border-[#EEF2F7]" />

        {/* Delete */}
        <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-[#FF5E5E] transition hover:bg-[#FFF5F5]">

          <Trash2 size={18} />

          <span className="text-[17px]">
            Delete Tasks
          </span>

        </button>

      </div>

      {/* Divider */}
      <div className="border-t border-[#EEF2F7]" />

      {/* Color Picker */}
      <div className="grid grid-cols-5 gap-4 p-5">

        {colors.map((color, index) => (
          <button
            key={index}
            className="flex items-center justify-center"
          >
            <span
              className="h-7 w-7 rounded-full transition hover:scale-110"
              style={{
                backgroundColor: color,
              }}
            />
          </button>
        ))}

      </div>
    </div>
  );
};

export default TaskMenu;