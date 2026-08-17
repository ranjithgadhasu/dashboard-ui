import ProjectHeader from "./ProjectHeader";
import ProjectStats from "./ProjectStats";
import ProjectDescription from "./ProjectDescription";
import ProjectChecklist from "./ProjectChecklist";
import ProjectComments from "./ProjectComments";

const ProjectMainContent = ({ project }) => {
  return (
    <main
      className="
        flex-1
        overflow-y-auto
        bg-[#F8FAFC]
        p-8
      "
    >
      {/* Project Header */}
      <ProjectHeader
        project={project}
      />

      {/* Statistics */}
      <ProjectStats
        project={project}
      />

      {/* Description */}
      <ProjectDescription
        project={project}
      />

      {/* Checklist */}
      <ProjectChecklist
        project={project}
      />

      {/* Comments */}
      <ProjectComments
        project={project}
      />
    </main>
  );
};

export default ProjectMainContent;