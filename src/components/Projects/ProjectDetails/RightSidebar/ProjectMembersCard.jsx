import { Plus } from "lucide-react";
import MemberItem from "./MemberItem";

const ProjectMembersCard = ({ project }) => {
  return (
    <div
      className="
        rounded-2xl
        border
        border-[#EEF2F7]
        bg-white
        p-5
      "
    >
      {/* Header */}
      <div className="mb-5 flex items-center justify-between">

        <div>

          <h3 className="text-[15px] font-medium text-[#344054]">
            Members
          </h3>

          <p className="mt-1 text-[13px] text-[#98A2B3]">
            {project.members.length} Team Members
          </p>

        </div>

        <button
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-xl
            bg-[#F3FFF5]
            text-[#212422]
            transition
          "
        >
          <Plus size={18} />
        </button>

      </div>

      {/* Members List */}
      <div className="space-y-2">

        {project.members.map((member) => (

          <MemberItem
            key={member.id}
            member={member}
          />

        ))}

      </div>

    </div>
  );
};

export default ProjectMembersCard;