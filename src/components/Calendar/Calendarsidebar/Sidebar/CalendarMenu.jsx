import {
  Eye,
  Settings,
  Trash2,
} from "lucide-react";
import hide from "../../../../assets/images/hide.png";
import "./calendarmenu.css"

const colors = [
  "#FF6B6B",
  "#43C7C7",
  "#FFC940",
  "#249C37",
  "#2DBCE8",
  "#49CC63",
  "#A8E63E",
  "#A74BE8",
  "#EC62D8",
  "#E5E7EB",
];

const CalendarMenu = () => {
  return (
    <div className="absolute left-full top-[-170px] z-50 ml-[-250px] w-[224px] h-[336px] overflow-hidden rounded-[24px] bg-white shadow-[0_15px_40px_rgba(0,0,0,0.12)] border border-[#ECECEC] calendar-menu">

      {/* Menu */}
      <div className="p-5">

        <button className="flex w-full items-center gap-1 rounded-2xl px-4 py-2 text-[15px] font-normal text-[#5E6573] transition hover:bg-[#F7F7F7]">
          <Eye size={20} className="text-[#8A9099]" />
          <span>Display this Only</span>
        </button>

        <button className="mt-2 flex w-full items-center gap-1 rounded-2xl bg-[#F7F7F7] px-4 py-2 text-[15px] font-normal text-[#3F434A]">
          <img src={hide} size={20} className="text-[#8A9099]" />
          <span className="text-[15px]">Hide from List</span>
        </button>

        <button className="mt-2 flex w-full items-center gap-1 rounded-2xl px-4 py-2 text-[15px] font-normal text-[#5E6573] transition hover:bg-[#F7F7F7]">
          <Settings size={20} className="text-[#8A9099]" />
          <span>Settings</span>
        </button>

      </div>

      {/* Divider */}
      <div className="border-t border-[#ECECEC]" />

      {/* Delete */}
      <button className="flex w-full items-center gap-1 px-9 py-3 text-[15px] font-normal text-[#FF6B6B] transition hover:bg-red-50">
        <Trash2 size={20} />
        <span>Delete Calendar</span>
      </button>

      {/* Divider */}
      <div className="border-t border-[#ECECEC]" />

      {/* Colors */}
     {/* Colors */}
<div className="px-6 py-5">
  <div className="grid grid-cols-5 gap-x-4 gap-y-4">
    {colors.map((color) => (
      <button
        key={color}
        className="relative h-5 w-5 rounded-full transition-transform hover:scale-110"
        style={{ backgroundColor: color }}
      >
        {color === "#FF6B6B" && (
          <span className="absolute left-1/2 top-1/2 h-[8px] w-[8px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
        )}
      </button>
    ))}
  </div>
</div>

    </div>
  );
};

export default CalendarMenu;