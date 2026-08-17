import { useState } from "react";

import ProjectLayout from "../../components/Projects/ProjectManagementLay/ProjectLayout/ProjectLayout";
import ProjectToolbar from "../../components/Projects/ProjectManagementLay/GridView/ProjectToolbar";
import ProjectGrid from "../../components/Projects/ProjectManagementLay/GridView/ProjectGrid";
import ProjectDetailsPage from "../../components/Projects/ProjectManagementLay/DetailsView/ProjectDetailsPage";



const ProjectGridPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <ProjectLayout>

      {!selectedProject ? (
        <>
          <ProjectToolbar />

          <ProjectGrid
            onSelectProject={setSelectedProject}
          />
        </>
      ) : (
        <ProjectDetailsPage
          project={selectedProject}
          onBack={() => setSelectedProject(null)}
        />
      )}

    </ProjectLayout>
  );
};

export default ProjectGridPage;