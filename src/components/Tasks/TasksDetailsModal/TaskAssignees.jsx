import { useState } from "react";
import { Plus } from "lucide-react";

import AssignDropdown from "./AssignDropdown";


const TaskAssignees = ({
  assignedTo = [],
  createdBy,
  onOpenProfile,
}) => {
  const [openAssign, setOpenAssign] = useState(false);


  return (
    <div className="mb-4 grid grid-cols-2 gap-8">

      {/* Assigned To */}
      <div className="relative">

        <p className="mb-4 text-[14px] font-medium uppercase tracking-[0.12em] text-[#A5A8AD]">
          Assigned To
        </p>

        <div className="flex items-center gap-4 -space-x-3">

          {assignedTo.map((avatar, index) => (
            <img
              key={index}
              src={avatar}
              alt=""
              className="
                h-10
                w-10
                rounded-full
                border-[3px]
                border-white
                object-cover
                shadow-sm
              "
            />
          ))}

          <button
            type="button"
            onClick={() => setOpenAssign((prev) => !prev)}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border-[3px]
              border-white
              bg-[#F8F9FB]
              shadow-sm
              transition
              hover:bg-[#EEF2F7]
            "
          >
            <Plus
              size={18}
              className="text-[#98A2B3]"
            />
          </button>

        </div>

        {openAssign && (
          <AssignDropdown
            onClose={() => setOpenAssign(false)}
          />
        )}

      </div>

      {/* Created By */}
      <div className="relative">

        <p className="mb-4 text-[14px] font-medium uppercase tracking-[0.12em] text-[#98A2B3]">
          Created By
        </p>

        <button
  type="button"
  onClick={onOpenProfile}
  className="
    flex
    w-full
    items-center
    gap-3
    rounded-xl
    p-2
    text-left
    transition
    hover:bg-[#F8F9FB]
  "
>
  <img
    src={createdBy.avatar}
    alt={createdBy.name}
    className="h-10 w-10 rounded-full object-cover"
  />

  <div>
    <h4 className="text-[15px] font-medium text-[#344054]">
      {createdBy.name}
    </h4>

    <p className="text-[13px] text-[#98A2B3]">
      {createdBy.role}
    </p>
  </div>
</button>
      </div>

    </div>
  );
};

export default TaskAssignees;