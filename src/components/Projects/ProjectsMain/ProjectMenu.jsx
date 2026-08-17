import {
  Pencil,
  UserPlus,
  Clock3,
  Trash2,
} from "lucide-react";

const ProjectMenu = ({ onEdit}) => {
  return (
    <div
      className="
        absolute
        right-0
        top-6
        z-50
        w-[260px]
        overflow-hidden
        rounded-[24px]
        border
        border-[#EEF2F7]
        bg-white
        shadow-[0_20px_45px_rgba(16,24,40,0.14)]
      "
    >
      {/* Edit */}
      <button
       onClick={onEdit}
        className="
          flex
          w-full
          items-center
          gap-5
          px-8
          mt-8
          py-3
          text-left
          text-[18px]
          font-medium
          text-[#667085]
          transition
          hover:bg-[#F8FAFC]
        "
      >
        <Pencil
          size={26}
          strokeWidth={1.8}
        />

        <span>Edit</span>
      </button>

      {/* Add Member */}
      <button
        className="
          flex
          w-full
          items-center
          gap-5
          px-8
          py-3
          text-left
          text-[18px]
          font-medium
          text-[#667085]
          transition
          hover:bg-[#F8FAFC]
        "
      >
        <UserPlus
          size={26}
          strokeWidth={1.8}
        />

        <span>Add Member</span>
      </button>

      {/* Add Due Date */}
      <button
        className="
          flex
          w-full
          items-center
          gap-5
          px-8
          py-2
          text-left
          text-[18px]
          font-medium
          text-[#667085]
          transition
          hover:bg-[#F8FAFC]
        "
      >
        <Clock3
          size={26}
          strokeWidth={1.8}
        />

        <span>Add Due Date</span>
      </button>

      {/* Divider */}
      <div className="border-t border-[#EEF2F7]" />

      {/* Delete */}
      <button
        className="
          flex
          w-full
          items-center
          gap-5
          px-8
          py-4
          text-left
          text-[18px]
          font-medium
          text-[#FF6B6B]
          transition
          mb-2
          hover:bg-[#FFF5F5]
        "
      >
        <Trash2
          size={26}
          strokeWidth={1.8}
        />

        <span>Delete Project</span>
      </button>
    </div>
  );
};

export default ProjectMenu;