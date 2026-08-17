import ProjectHeader from "./ProjectHeader";
import ProjectStats from "./ProjectStats";
import ProjectDescription from "./ProjectDescription";
import ProjectChecklist from "./ProjectChecklist";
import ProjectComments from "./ProjectComments";

const ProjectMainContent = ({ project }) => {
  if (!project) return null;

  return (
    <div
      className="
        flex-1
        overflow-y-auto
        bg-white
      "
    >
      <div
        className="
          mx-auto
          max-w-[900px]
          px-8
          py-8
        "
      >
        {/* Header */}
        <ProjectHeader project={project} />

        {/* Details */}
        <ProjectStats project={project} />

        {/* Description */}
        <ProjectDescription project={project} />

        {/* Checklist */}
        <ProjectChecklist project={project} />

        {/* Comments */}
        <ProjectComments project={project} />
      </div>
    </div>
  );
};

export default ProjectMainContent;