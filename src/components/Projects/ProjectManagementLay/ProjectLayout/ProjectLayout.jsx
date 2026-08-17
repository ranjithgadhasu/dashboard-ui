import ProjectList from "../../../../pages/Projects/ProjectList";
import DashboardFiveSidebar from "../../../dashboardFiveLayout/DashboardFiveSidebar";
import Header from "../../../layout/Header";

import ProjectRightSidebar from "../ProjectRightSidebar/ProjectRightSidebar";

const ProjectLayout = () => {
  return (
    <div className="flex h-screen bg-[#F8FAFC]">
      {/* Dashboard Sidebar */}
      <DashboardFiveSidebar />

      {/* Right Section */}
      <div className="ml-[88px] flex flex-1 flex-col">
        {/* Header */}
        <Header />

        {/* Content */}
        <div className="flex flex-1 overflow-hidden">       
          <main
            className="
              flex-1
              overflow-y-auto
              bg-[#F8FAFC]
              p-6
            "
          >
            <ProjectList />
          </main>

          {/* Right Sidebar */}
          <ProjectRightSidebar />
        </div>
      </div>
    </div>
  );
};

export default ProjectLayout;
