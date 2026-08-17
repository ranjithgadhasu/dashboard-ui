import DashboardHeader from "./DashboardHeader";

import SummaryCards from "./summarycards/SummaryCards";
import StatisticsChart from "./statistics/StatisticsChart";

import ProjectsCard from "./projects/ProjectsCard";
import ActiveTasks from "./activetasks/ActiveTasks";
import PostingTasks from "./postingtasks/PostingTasks";

import ProfileCard from "./sidebar/ProfileCard";
import CalendarCard from "./sidebar/CalendarCard";
import RecentActivity from "./sidebar/RecentActivity";
import "./dashboardfive.css"

const DashboardFive = () => {
  return (
    <div className="grid grid-cols-12 gap-6 dashboard-five">

      {/* Left Content */}
      <div className="col-span-9 space-y-6 dashboard-five-left">

        {/* Header */}
        <DashboardHeader />

        {/* Summary Cards + Statistics */}
        <div className="grid grid-cols-12 gap-6 dashboard-five-summary">

          <div className="col-span-4 dashboard-five-summary-cards">
            <SummaryCards />
          </div>

          <div className="col-span-8 dashboard-five-statistics">
            <StatisticsChart />
          </div>

        </div>

        {/* Projects + Active Tasks */}
        <div className="grid grid-cols-12 gap-6 dashboard-five-projects">

          <div className="col-span-4 dashboard-five-projects-card">
            <ProjectsCard />
          </div>

          <div className="col-span-8 dashboard-five-active-tasks">
            <ActiveTasks />
          </div>

        </div>

        {/* Posting Tasks */}
        <div className="dashboard-five-posting-tasks">
          <PostingTasks />
        </div>

      </div>

      {/* Right Sidebar */}
      <div className="col-span-3 space-y-6 bg-white dashboard-five-right">

        <ProfileCard />

        <CalendarCard />

        <RecentActivity />

      </div>

    </div>
  );
};

export default DashboardFive;