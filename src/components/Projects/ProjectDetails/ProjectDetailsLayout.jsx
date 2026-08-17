import ProjectSidebar from "./LeftSidebar/ProjectSidebar";
import ProjectRightSidebar from "./RightSidebar/ProjectRightSidebar";

import { projectSidebarData } from "./LeftSidebar/projectSidebarData";
import DashboardFiveSidebar from "../../dashboardFiveLayout/DashboardFiveSidebar";
import ProjectMainContent from "./CenterContent/ProjectMainContent";
import Header from "../../layout/Header";

const ProjectDetailsLayout = () => {
  const selectedProject = projectSidebarData[0];

  return (
    <div className="flex h-screen bg-[#F8FAFC]">
      {/* Dashboard Sidebar */}
      <DashboardFiveSidebar />
      {/* Right Side */}
      <div className="ml-[88px] flex flex-1 flex-col">
        {/* Header */}
        <Header />

        {/* Project Layout */}
        <div
          className="
          flex
          flex-1
          h-full
          overflow-hidden
        "
        >
          {/* Left Sidebar */}
          <ProjectSidebar />

          {/* Main Content */}
          <div
            className="
            flex-1
            overflow-y-auto
            bg-white
          "
          >
            <ProjectMainContent project={selectedProject} />
          </div>

          {/* Right Sidebar */}
          <ProjectRightSidebar project={selectedProject} />
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsLayout;
