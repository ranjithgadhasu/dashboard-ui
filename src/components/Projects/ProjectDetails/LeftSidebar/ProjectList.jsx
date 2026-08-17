import { useState } from "react";
import { projectSidebarData } from "./projectSidebarData";
import ProjectListItem from "./ProjectListItem";

const ProjectList = () => {
  const [selectedProject, setSelectedProject] = useState(
    projectSidebarData[0].id
  );

  return (
    <div className="py-2">

      {projectSidebarData.map((project) => (

        <ProjectListItem
          key={project.id}
          project={project}
          active={selectedProject === project.id}
          onClick={() => setSelectedProject(project.id)}
        />

      ))}

    </div>
  );
};

export default ProjectList;