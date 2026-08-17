import ProjectSearch from "../Shared/ProjectSearch";
import ProjectTabs from "./ProjectTabs";
import ProjectList from "./ProjectList";

const ProjectSidebar = () => {
  return (
    <aside
      className="
        w-[340px]
        flex-shrink-0
        overflow-y-auto
        border-r
        border-[#EEF2F7]
        bg-white
      "
    >
      <div className="p-6">

        {/* Search */}
        <ProjectSearch />

        {/* Tabs */}
        <div className="mt-6">
          <ProjectTabs />
        </div>

        {/* Project List */}
        <div className="mt-6">
          <ProjectList />
        </div>

      </div>
    </aside>
  );
};

export default ProjectSidebar;