import { useState } from "react";
import ProjectLayout from "./Layout/ProjectLayout";
import ProjectToolbar from "./GridContent/ProjectToolbar";
import ProjectGrid from "./GridContent/ProjectGrid";
import ProjectDetailsPage from "./ProjectDetailsPage";

const ProjectGridPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <ProjectLayout>
      {selectedProject ? (
        <ProjectDetailsPage
          project={selectedProject}
          onBack={() => setSelectedProject(null)}
        />
      ) : (
        <>
          <ProjectToolbar />

          <ProjectGrid
            onSelectProject={setSelectedProject}
          />
        </>
      )}
    </ProjectLayout>
  );
};

export default ProjectGridPage;