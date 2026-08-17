import { Clock3 } from "lucide-react";

const ProjectListItem = ({
  project,
  active,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        w-full
        border-b
        border-[#EEF2F7]
        px-5
        py-5
        text-left
        transition-all
        duration-200
        ${
          active
            ? "bg-[#F8FAFC]"
            : "bg-white hover:bg-[#FAFBFC]"
        }
      `}
    >
      {/* Top */}
      <div className="flex items-start gap-3">

        {/* Logo */}
        <div
          className="
            flex
            h-[44px]
            w-[44px]
            items-center
            justify-center
            rounded-xl
            border
            border-[#EEF2F7]
            bg-white
            flex-shrink-0
          "
        >
          <img
            src={project.logo}
            alt={project.title}
            className="h-7 w-7 object-contain"
          />
        </div>

        {/* Title */}
        <div className="flex-1 min-w-0">

          <h3
            className="
              truncate
              text-[15px]
              font-medium
              text-[#344054]
            "
          >
            {project.title}
          </h3>

          <p
            className="
              mt-1
              truncate
              text-[14px]
              font-normal
              text-[#98A2B3]
            "
          >
            {project.company}
          </p>

        </div>

      </div>

      {/* Bottom */}
      <div className="mt-4 flex items-center justify-between">

        {/* Members */}
        <div className="flex -space-x-2">

          {project.members.map((member, index) => (
            <img
              key={index}
              src={member.avatar}
              alt={member.name}
              className="
                h-7
                w-7
                rounded-full
                border-2
                border-white
                object-cover
              "
            />
          ))}

        </div>

        {/* Due */}
        <div
          className={`
            flex
            items-center
            gap-1.5
            rounded-full
            px-3
            py-1
            text-[14px]
            font-normal
            ${
              project.dueColor === "warning"
                ? "bg-[#FFF7ED] text-[#F97316]"
                : project.dueColor === "success"
                ? "bg-[#ECFDF3] text-[#22C55E]"
                : "bg-[#F8FAFC] text-[#667085]"
            }
          `}
        >
          <Clock3 size={12} />

          <span>{project.dueText}</span>

        </div>

      </div>

    </button>
  );
};

export default ProjectListItem;