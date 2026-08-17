import ProjectCardHeader from "../GridView/ProjectCardHeader";
import ProjectCardProgress from "../GridView/ProjectCardProgress";
import ProjectCardMembers from "../GridView/ProjectCardMembers";
import ProjectCardFooter from "../GridView/ProjectCardFooter";

const ProjectCard = ({ project, onClick }) => {
  return (
    <div
      onClick={() => onClick(project)}
      className="
        cursor-pointer
        rounded-[24px]
        border
        border-[#EEF2F7]
        bg-white
        p-6
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
      "
    >
      {/* Header */}
      <ProjectCardHeader project={project} />

      {/* Description */}
      <p
        className="
          mt-6
          text-[15px]
          leading-7
          text-[#667085]
        "
      >
        {project.description}
      </p>

      {/* Progress */}
      <div className="mt-8">
        <ProjectCardProgress project={project} />
      </div>

      {/* Members */}
      <div className="mt-8">
        <ProjectCardMembers project={project} />
      </div>

      {/* Footer */}
      <div className="mt-8 border-t border-[#EEF2F7] pt-5">
        <ProjectCardFooter project={project} />
      </div>
    </div>
  );
};

export default ProjectCard;