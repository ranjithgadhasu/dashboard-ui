import ProjectSearch from "./ProjectSearch";
import ProjectList from "./ProjectList";

const ProjectSidebar = () => {
  return (
    <aside
      className="
        w-[300px]
        border-r
        border-[#EEF2F7]
        bg-white
        flex
        flex-col
        overflow-hidden
      "
    >
      {/* Search */}
      <ProjectSearch />

      {/* List */}
      <div className="flex-1 overflow-y-auto">
        <ProjectList />
      </div>
    </aside>
  );
};

export default ProjectSidebar;