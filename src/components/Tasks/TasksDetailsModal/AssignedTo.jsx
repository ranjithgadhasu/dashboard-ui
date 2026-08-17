import { useState } from "react";
import { Plus } from "lucide-react";

import AssignDropdown from "./AssignDropdown";

const AssignedTo = ({
  assignedTo = [],
}) => {
  const [openAssign, setOpenAssign] = useState(false);

  return (
    <div className="relative mb-8">

      {/* Heading */}
      <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#98A2B3]">
        Assigned To
      </p>

      <div className="flex items-center">

        {/* Avatars */}
        {assignedTo.map((member, index) => (
          <img
            key={member.id ?? index}
            src={member.avatar ?? member}
            alt={member.name ?? ""}
            className="
              -mr-2
              h-10
              w-10
              rounded-full
              border-[3px]
              border-white
              object-cover
              shadow-sm
            "
            style={{
              zIndex: assignedTo.length - index,
            }}
          />
        ))}

        {/* Add Member */}
        <button
          type="button"
          onClick={() =>
            setOpenAssign((prev) => !prev)
          }
          className="
            ml-3
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            bg-[#F8F9FB]
            transition
            hover:bg-[#EEF2F7]
          "
        >
          <Plus
            size={16}
            className="text-[#98A2B3]"
          />
        </button>

      </div>

      {/* Dropdown */}
      {openAssign && (
        <AssignDropdown
          onClose={() =>
            setOpenAssign(false)
          }
        />
      )}

    </div>
  );
};

export default AssignedTo;