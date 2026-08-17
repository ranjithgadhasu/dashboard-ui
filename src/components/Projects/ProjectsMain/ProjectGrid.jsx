import { useState } from "react";

import { projectData } from "./projectData";
import ProjectCard from "./ProjectCard";
import EditProjectModal from "../EditProjectModal/EditProjectModal";

import "./projectgrid.css";

const ProjectGrid = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [openEdit, setOpenEdit] = useState(false);

  const handleEdit = (project) => {
    setSelectedProject(project);
    setOpenEdit(true);
  };

  return (
    <>
      <div
        className="
          grid
          grid-cols-1
          gap-6
          md:grid-cols-2
          xl:grid-cols-3
          project-grid
        "
      >
        {projectData.map((project) => (
          <ProjectCard key={project.id} project={project} onEdit={handleEdit} />
        ))}
      </div>

      <EditProjectModal
        open={openEdit}
        project={selectedProject}
        onClose={() => setOpenEdit(false)}
      />
    </>
  );
};

export default ProjectGrid;
