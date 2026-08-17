import { useState } from "react";
import ProjectMenu from "./ProjectMenu";
import { MoreHorizontal, Clock3 } from "lucide-react";
import ProjectProgress from "./ProjectProgress";
import ProjectMembers from "./ProjectMembers";

const ProjectCard = ({ project, onEdit }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div
      className="
        rounded-2xl
        border
        border-[#EEF2F7]
        bg-white
        p-6
        transition-all
        duration-200
        hover:-translate-y-1
        hover:shadow-lg
      "
    >
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <div
            className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-xl
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

          <div>
            <h3 className="text-[18px] font-medium text-[#344054]">
              {project.title}
            </h3>

            <p className="mt-1 text-[14px] font-normal text-[#98A2B3]">
              {project.company}
            </p>
          </div>
        </div>

        <div className="relative">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="
      rounded-lg
      p-2
      text-[#98A2B3]
      transition
      hover:bg-[#F8FAFC]
    "
          >
            <MoreHorizontal
              size={26}
              className="h-[26px] w-[26px] text-[#5e6061]"
            />
          </button>

          {menuOpen && (
  <ProjectMenu
    project={project}
    onEdit={() => {
      setMenuOpen(false);
      onEdit(project);
    }}
    onClose={() => setMenuOpen(false)}
  />
)}
        </div>
      </div>

      {/* Description */}
      <p
        className="
          mt-8
          min-h-[58px]
          text-[14px]
          font-normal
          leading-7
          text-[#667085]
        "
      >
        {project.description}
      </p>

      {/* Progress */}
      <div className="mt-3">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-[14px] font-normal text-[#344054]">
            Progress
          </span>

          <span className="text-[14px] font-normal text-[#98A2B3]">
            {project.progress}%
          </span>
        </div>

        <ProjectProgress progress={project.progress} />
      </div>

      {/* Footer */}
      <div className="mt-4 flex items-center justify-between">
        <div
          className={`
            flex
            items-center
            gap-2
            rounded-full
            px-4
            py-2
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
          <Clock3 size={15} />

          <span>{project.dueText}</span>
        </div>

        <ProjectMembers members={project.members} />
      </div>
    </div>
  );
};

export default ProjectCard;
