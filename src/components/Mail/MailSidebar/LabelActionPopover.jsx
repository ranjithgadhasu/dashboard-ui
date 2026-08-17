import { Pencil, Plus, Trash2 } from "lucide-react";

import { labelColors } from "./mailSidebarDataModal";
import "./labelactionpopover.css";

const LabelActionPopover = ({ open, onClose, position }) => {
  if (!open) return null;

  return (
    <>
      <div className="fixed inset-0 z-40" onClick={onClose} />

      <div
        className="label-action-popover fixed z-[9999] mt-[-120px] w-[250px] rounded-2xl border border-[#E6EBF2] bg-white shadow-2xl"
        style={{
          left: position.left,
          top: position.top,
        }}
      >
        {/* Edit */}
        <button className="flex w-full items-center gap-4 px-6 py-4 text-[#525C60] transition hover:bg-[#F8F9FC]">
          <Pencil size={18} />

          <span className="text-[16px]">Edit</span>
        </button>

        {/* Add Sublabel */}
        <button className="flex w-full items-center gap-4 px-6 py-4 text-[#525C60] transition hover:bg-[#F8F9FC]">
          <Plus size={18} />

          <span className="text-[16px]">Add Sublabel</span>
        </button>

        <div className="my-1 border-t border-[#EEF2F7]" />

        {/* Delete */}
        <button className="flex w-full items-center gap-4 px-6 py-4 text-[#FF5C5C] transition hover:bg-[#FFF6F6]">
          <Trash2 size={18} />

          <span className="text-[16px]">Delete Label</span>
        </button>

        <div className="border-t border-[#EEF2F7]" />

        {/* Colors */}
        <div className="label-action-colors grid grid-cols-5 gap-5 p-6">
          {labelColors.map((item) => (
            <button
              key={item.id}
              className="flex h-8 w-8 items-center justify-center rounded-full transition hover:scale-110"
            >
              <span
                className="h-5 w-5 rounded-full"
                style={{
                  background: item.color,
                }}
              />
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default LabelActionPopover;
