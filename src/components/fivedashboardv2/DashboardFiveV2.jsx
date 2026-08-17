import DashboardHeader from "./DashboardHeaderTwo";

import SummaryCards from "./summarycards/SummaryCards";

import ProjectsCard from "./projects/ProjectsCard";
import StatisticsChart from "./statistics/StatisticsChart";

import TotalProjects from "./totalprojects/TotalProjects";
import RecentActivity from "./sidebar/RecentActivity";
import ActiveTasksTwo from "./activetasks/ActiveTasksTwo";
import PostingTasksTwo from "./postingtasks/PostingTasksTwo";
import ProfileCardTwo from "./sidebar/ProfileCardTwo";
import CalendarCardTwo from "./sidebar/CalendarCardTwo";
import "./dashboardfive.css"

const DashboardFiveV2 = () => {
  return (
    <div className="grid grid-cols-12 gap-6 dashboard-five-v2">

      {/* Left Content */}

      <div className="col-span-9 space-y-6 dashboard-five-v2-main">

        {/* Header */}

        <div className="dashboard-five-v2-header">
          <DashboardHeader />
        </div>

        {/* Top Section */}

        <div className="grid grid-cols-12 gap-6 dashboard-five-v2-top">

          {/* Summary Cards */}

          <div className="col-span-2 dashboard-five-v2-summary">
            <SummaryCards />
          </div>

          {/* Projects */}

          <div className="col-span-4 dashboard-five-v2-projects">
            <ProjectsCard />
          </div>

          {/* Statistics */}

          <div className="col-span-6 dashboard-five-v2-statistics">
            <StatisticsChart />
          </div>

        </div>

        {/* Middle Section */}

        <div className="grid grid-cols-12 gap-6 dashboard-five-v2-middle">

          {/* Active Tasks */}

          <div className="col-span-6 dashboard-five-v2-active">
            <ActiveTasksTwo />
          </div>

          {/* Total Projects */}

          <div className="col-span-6 dashboard-five-v2-total">
            <TotalProjects />
          </div>

        </div>

        {/* Bottom */}

        <div className="dashboard-five-v2-posting">
          <PostingTasksTwo />
        </div>

      </div>

      {/* Right Sidebar */}

      <div className="col-span-3 dashboard-five-v2-sidebar">

        <div className="rounded-[20px] border border-[#E9EEF5] bg-white overflow-hidden">

          <div className="dashboard-five-v2-profile">
            <ProfileCardTwo />
          </div>

          <div className="dashboard-five-v2-calendar">
            <CalendarCardTwo />
          </div>

          <div className="dashboard-five-v2-activity">
            <RecentActivity />
          </div>

        </div>

      </div>

    </div>
  );
};

export default DashboardFiveV2;