import { useState } from "react";
import { X } from "lucide-react";

import { labelColors, defaultLabel } from "./mailSidebarDataModal";

import "./newlabelmodal.css";

const NewLabelModal = ({ open, onClose }) => {
  const [name, setName] = useState(defaultLabel.name);
  const [selected, setSelected] = useState(defaultLabel.color);

  if (!open) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="new-label-overlay fixed inset-0 z-40 bg-black/20"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="new-label-modal fixed left-[305px] top-0 z-50 h-screen w-[403px] bg-white shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-5">
          <h2 className="text-[20px] font-semibold text-[#394150]">
            New Label
          </h2>

          <button
            onClick={onClose}
            className="rounded-full p-1 hover:bg-[#F3F5F8]"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div className="new-label-content px-6 pt-6">
          <label className="mb-2 block text-sm text-[#899099]">Name</label>

          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="h-11 w-full rounded-xl border border-[#E6EBF2] px-4 outline-none focus:border-[#22963F]"
          />

          {/* Color */}
          <div className="mt-7">
            <p className="mb-4 text-sm text-[#899099]">Color</p>

            <div className="grid grid-cols-5 gap-5 new-label-colors">
              {labelColors.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSelected(item.color)}
                  className={`flex h-8 w-8 items-center justify-center rounded-full ${
                    selected === item.color ? "ring-2 ring-[#DCE3EC]" : ""
                  }`}
                >
                  <span
                    className="h-5 w-5 rounded-full"
                    style={{
                      backgroundColor: item.color,
                    }}
                  />
                </button>
              ))}
            </div>
          </div>

          <button className="mt-10 h-11 w-full rounded-lg bg-[#22963F] font-medium text-white transition hover:bg-[#1E8739]">
            Create
          </button>
        </div>
      </div>
    </>
  );
};

export default NewLabelModal;
