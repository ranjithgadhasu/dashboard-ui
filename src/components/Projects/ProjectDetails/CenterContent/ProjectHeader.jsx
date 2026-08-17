import { MoreHorizontal } from "lucide-react";

const ProjectHeader = ({ project }) => {
  return (
    <div className="flex items-start justify-between">

      {/* Left */}
      <div className="flex items-center gap-4">

        {/* Logo */}
        <div
          className="
            flex
            h-[56px]
            w-[56px]
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

        {/* Project Info */}
        <div>

          <h2
            className="
              text-[20px]
              font-medium
              leading-none
              text-[#344054]
            "
          >
            {project.title}
          </h2>

          <p
            className="
              mt-2
              text-[14px]
              font-normal
              text-[#98A2B3]
            "
          >
            {project.company}
          </p>

        </div>

      </div>

      {/* Right */}
      <button
        className="
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-xl
          transition
          hover:bg-[#F8FAFC]
        "
      >
        <MoreHorizontal
          size={22}
          className="text-[#98A2B3]"
        />
      </button>

    </div>
  );
};

export default ProjectHeader;