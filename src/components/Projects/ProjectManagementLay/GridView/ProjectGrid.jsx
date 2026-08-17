import ProjectCard from "./ProjectCard";
import { projectGridData } from "./projectGridData";

const ProjectGrid = ({ onSelectProject }) => {
  return (
    <div className="grid grid-cols-3 gap-6">
      {projectGridData.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          onClick={onSelectProject}
        />
      ))}
    </div>
  );
};

export default ProjectGrid;