import ProjectListItem from "../../ProjectDetails/LeftSidebar/ProjectListItem";
import { projectSidebarData } from "../../ProjectDetails/LeftSidebar/projectSidebarData";

const ProjectList = () => {
  return (
    <div className="mt-6 space-y-3">
      {projectSidebarData.map((project) => (
        <ProjectListItem
          key={project.id}
          project={project}
        />
      ))}
    </div>
  );
};
export default ProjectList;