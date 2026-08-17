import ProjectProfileCard from "./ProjectProfileCard";
import ProjectStatistics from "./ProjectStatistics";
import ProjectActivityCard from "./ProjectActivityCard";

import { rightSidebarData } from "./rightSidebarData";

const ProjectRightSidebar = () => {
  return (
    <aside
      className="
        w-[320px]
        border-l
        border-[#EEF2F7]
        bg-white
        overflow-y-auto
      "
    >
      <div className="p-6">

        <ProjectProfileCard
          data={rightSidebarData}
        />

        <ProjectStatistics
          data={rightSidebarData}
        />

        <ProjectActivityCard
          project={rightSidebarData}
        />

      </div>
    </aside>
  );
};

export default ProjectRightSidebar;