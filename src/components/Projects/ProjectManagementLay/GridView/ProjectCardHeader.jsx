import { MoreHorizontal } from "lucide-react";

const ProjectCardHeader = ({ project }) => {
  return (
    <div className="flex items-start justify-between">

      {/* Left */}
      <div className="flex items-center gap-4">

        {/* Logo */}
        <div
          className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl
            border
            border-[#EEF2F7]
            bg-white
          "
        >
          <img
            src={project.logo}
            alt={project.title}
            className="h-8 w-8 object-contain"
          />
        </div>

        {/* Title */}
        <div>

          <h3
            className="
              text-[18px]
              font-semibold
              text-[#344054]
            "
          >
            {project.title}
          </h3>

          <p
            className="
              mt-1
              text-[14px]
              text-[#98A2B3]
            "
          >
            {project.company}
          </p>

        </div>

      </div>

      {/* Right */}
      <div className="flex flex-col items-end gap-3">

        {/* Menu */}
        <button
          className="
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-lg
            transition
            hover:bg-[#F8FAFC]
          "
        >
          <MoreHorizontal
            size={20}
            className="text-[#98A2B3]"
          />
        </button>

        {/* Status */}
        <span
          className={`
            rounded-full
            px-3
            py-1
            text-[12px]
            font-medium
            ${
              project.status === "Started"
                ? "bg-[#FFF8E6] text-[#E7A500]"
                : project.status === "On Hold"
                ? "bg-[#E8FAFD] text-[#17B4D6]"
                : "bg-[#ECFDF3] text-[#22C55E]"
            }
          `}
        >
          {project.status}
        </span>

      </div>

    </div>
  );
};

export default ProjectCardHeader;