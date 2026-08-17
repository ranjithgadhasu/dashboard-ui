import { rightSidebarData } from "./rightSidebarData";

import ProjectStatusCard from "./ProjectStatusCard";
import ProjectMembersCard from "./ProjectMembersCard";
import ProjectFilesCard from "./ProjectFilesCard";

const ProjectRightSidebar = () => {
  return (
    <div
      className="
        w-[320px]
        border-l
        border-[#EEF2F7]
        bg-white
        overflow-y-auto
        px-6
        py-6
      "
    >
      <ProjectStatusCard
        project={rightSidebarData}
      />

      <div className="mt-8">
        <ProjectMembersCard
          project={rightSidebarData}
        />
      </div>

      <div className="mt-8">
        <ProjectFilesCard
          project={rightSidebarData}
        />
      </div>

    </div>
  );
};

export default ProjectRightSidebar;