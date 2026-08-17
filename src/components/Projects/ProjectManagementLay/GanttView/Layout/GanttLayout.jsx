import { useState } from "react";

import GanttHeader from "../Toolbar/GanttHeader";
import GanttSidebar from "../Sidebar/GanttSidebar";
import GanttTimeline from "../Timeline/GanttTimeline";
import ViewSwitcher from "../Footer/ViewSwitcher";

import Header from "../../../../layout/Header";
import DashboardFiveSidebar from "../../../../dashboardFiveLayout/DashboardFiveSidebar";

import "./GanttLayout.css";


const GanttLayout = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="gantt-layout flex h-screen bg-[#F8FAFC]">

      {/* =================================
          DASHBOARD SIDEBAR
      ================================= */}
      <div className="projects-gridpage-sidebar">
      <DashboardFiveSidebar
        open={open}
        setOpen={setOpen}
      />
      </div>

      {/* =================================
          MAIN CONTENT
      ================================= */}
      <div className="gantt-content flex flex-1 flex-col">

        {/* Header */}
        <div className="gantt-header">
          <Header setOpen={setOpen} />
        </div>

        {/* Gantt Content */}
        <div className="gantt-main flex flex-1 flex-col overflow-hidden">

          {/* Top Toolbar */}
          <div className="gantt-toolbar">
            <GanttHeader />
          </div>

          {/* Main Area */}
          <div className="gantt-main-area flex flex-1 overflow-hidden">

            {/* Left Task List */}
            <div className="gantt-sidebar-wrapper">
              <GanttSidebar />
            </div>

            {/* Timeline */}
            <div className="gantt-timeline-wrapper">
              <GanttTimeline />
            </div>

          </div>

          {/* Bottom Controls */}
          <div className="gantt-view-switcher">
            <ViewSwitcher />
          </div>

        </div>

      </div>

    </div>
  );
};

export default GanttLayout;