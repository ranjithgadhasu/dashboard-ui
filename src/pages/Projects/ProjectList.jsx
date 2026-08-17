import ProjectGrid from "../../components/Projects/ProjectsMain/ProjectGrid";
import ProjectHeader from "../../components/Projects/ProjectsMain/ProjectHeader";
import ProjectTabs from "../../components/Projects/ProjectsMain/ProjectTabs";
import "./ProjectList.css";


const ProjectList = () => {
  return (
    <div className="bg-[#F8FAFC] p-8 max-md:p-0">

      <div className="project-header">
        <ProjectHeader  />
     

      <ProjectTabs />

      {/*<ProjectToolbar />*/}

      <ProjectGrid />

    </div>
     </div>
  );
};

export default ProjectList;