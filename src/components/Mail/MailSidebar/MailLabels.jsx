import { useState } from "react";
import { Plus, MoreVertical } from "lucide-react";
import { mailLabels } from "./mailSidebarData";
import NewLabelModal from "./NewLabelModal";
import LabelActionPopover from "./LabelActionPopover";

const MailLabels = () => {
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [menuPosition, setMenuPosition] = useState({
    left: 0,
    top: 0,
  });

  return (
    <>
      <div>
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-[#899099]">
            LABELS
          </h3>

          <button
            onClick={() => setOpen(true)}
            className="flex h-7 w-7 items-center justify-center rounded-full transition hover:bg-[#F3F5F8]"
          >
            <Plus size={16} className="text-[#899099]" />
          </button>
        </div>

        <div className="space-y-2">
          {mailLabels.map((label) => (
            <div key={label.id} className="relative group">
              <div className="flex w-full items-center justify-between rounded-lg px-3 py-2 transition hover:bg-[#F8F9FC]">
                <div className="flex items-center gap-3">
                  <span
                    className="h-3 w-3 rounded-full"
                    style={{ backgroundColor: label.color }}
                  />

                  <span className="text-[15px] text-[#394150]">
                    {label.name}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();

                    const rect = e.currentTarget.getBoundingClientRect();

                    setMenuPosition({
                      left: rect.right + 8,
                      top: rect.top,
                    });

                    setActiveMenu(activeMenu === label.id ? null : label.id);
                  }}
                  className="rounded-md p-1 opacity-0 transition group-hover:opacity-100 hover:bg-[#EEF2F7]"
                >
                  <MoreVertical size={16} className="text-[#899099]" />
                </button>
              </div>

              <LabelActionPopover
                open={activeMenu === label.id}
                onClose={() => setActiveMenu(null)}
                position={menuPosition}
              />
            </div>
          ))}
        </div>
      </div>

      <NewLabelModal open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default MailLabels;
