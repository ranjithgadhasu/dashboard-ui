const ProjectCardMembers = ({ project }) => {
  return (
    <div className="flex items-center justify-between">

      {/* Members */}
      <div className="flex -space-x-3">

        {project.members.slice(0, 4).map((member) => (
          <img
            key={member.id}
            src={member.avatar}
            alt={member.name}
            title={member.name}
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

        {project.members.length > 4 && (
          <div
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border-[3px]
              border-white
              bg-[#EEF2F7]
              text-[13px]
              font-semibold
              text-[#667085]
            "
          >
            +{project.members.length - 4}
          </div>
        )}

      </div>

      {/* Total */}
      <span
        className="
          text-[14px]
          font-medium
          text-[#98A2B3]
        "
      >
        {project.members.length} Members
      </span>

    </div>
  );
};

export default ProjectCardMembers;