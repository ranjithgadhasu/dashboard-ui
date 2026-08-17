import DashboardFiveSidebar from "../../dashboardFiveLayout/DashboardFiveSidebar";
import Header from "../../layout/Header";
import ProjectHeader from "../ProjectsMain/ProjectHeader";
import ProjectTabs from "../ProjectsMain/ProjectTabs";
import ProjectListTable from "./ProjectListTable";

const ProjectListPage = () => {
  return (
    <div className="flex h-screen bg-[#F8FAFC]">


      {/* Left Sidebar */}
      <DashboardFiveSidebar />

      {/* Right Content */}
      <div className="ml-[88px] flex flex-1 flex-col">

        {/* Header */}
        <Header />
       <div className="mt-2 py-2 px-8">
            <ProjectHeader />
        </div>
        <div className="px-8">
            <ProjectTabs />
        </div>
        {/* Page Content */}
        <div className="flex-1 overflow-y-auto p-2">
          <ProjectListTable />
        </div>

      </div>

    </div>
  );
};

export default ProjectListPage;