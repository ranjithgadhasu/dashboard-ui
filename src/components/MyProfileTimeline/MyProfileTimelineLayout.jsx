import { useState } from "react";

import Sidebar from "../layout/Sidebar";
import TimelineHeader from "./TimelineHeader";
import TimelineFeed from "./TimelineFeed";

import "./MyProfileTimelineLayout.css";

const MyProfileTimelineLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="timeline-layout">

      {/* Mobile overlay */}
      {isSidebarOpen && (
        <div
          className="timeline-sidebar-overlay"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`timeline-sidebar ${
          isSidebarOpen ? "timeline-sidebar-open" : ""
        }`}
      >
        <Sidebar
          onClose={() => setIsSidebarOpen(false)}
        />
      </aside>

      {/* Main */}
      <main className="timeline-main">

        {/* Header */}
        <div className="timeline-header-wrapper">
          <TimelineHeader
            setOpen={() => setIsSidebarOpen(true)}
          />
        </div>

        {/* Content */}
        <div className="timeline-content">
          <TimelineFeed />
        </div>

      </main>

    </div>
  );
};

export default MyProfileTimelineLayout;