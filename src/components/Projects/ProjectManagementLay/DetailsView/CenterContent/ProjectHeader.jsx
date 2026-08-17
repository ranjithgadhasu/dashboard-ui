import { MoreHorizontal } from "lucide-react";

const ProjectHeader = ({ project }) => {
  return (
    <div
      className="
        rounded-3xl
        border
        border-[#EEF2F7]
        bg-white
        p-6
      "
    >
      <div className="flex items-start justify-between">

        {/* Left */}
        <div className="flex items-center gap-5">

          {/* Logo */}
          <div
            className="
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-2xl
              border
              border-[#EEF2F7]
              bg-[#F8FAFC]
            "
          >
            <img
              src={project.logo}
              alt={project.title}
              className="h-9 w-9 object-contain"
            />
          </div>

          {/* Title */}
          <div>

            <h2
              className="
                text-[28px]
                font-semibold
                text-[#344054]
              "
            >
              {project.title}
            </h2>

            <p
              className="
                mt-2
                text-[15px]
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
            h-11
            w-11
            items-center
            justify-center
            rounded-xl
            border
            border-[#EEF2F7]
            transition
            hover:bg-[#F8FAFC]
          "
        >
          <MoreHorizontal
            size={20}
            className="text-[#98A2B3]"
          />
        </button>

      </div>

      {/* Status */}
      <div className="mt-6 flex flex-wrap items-center gap-3">

        <span
          className={`
            rounded-full
            px-4
            py-2
            text-[13px]
            font-semibold
            ${
              project.status === "Started"
                ? "bg-[#FFF7E8] text-[#F59E0B]"
                : project.status === "On Hold"
                ? "bg-[#EFF8FF] text-[#2E90FA]"
                : "bg-[#ECFDF3] text-[#22983A]"
            }
          `}
        >
          {project.status}
        </span>

        <span className="text-[14px] text-[#98A2B3]">
          Due: {project.dueText}
        </span>

      </div>

    </div>
  );
};

export default ProjectHeader;