import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Menu } from "lucide-react";

import DashboardFiveSidebar from "./DashboardFiveSidebar";
import "./dashboardFiveLayout.css";

const DashboardFiveLayout = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex bg-[#F7F8FA] min-h-screen dashboard-five-layout">

      <DashboardFiveSidebar
        open={open}
        setOpen={setOpen}
      />

      <div className="flex-1 lg:ml-20 dashboard-five-main">

        {/* Mobile Header */}
        <div className="dashboard-five-mobile-header">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="dashboard-five-menu-button"
          >
            <Menu size={22} />
          </button>

        </div>

        <main className="p-0 dashboard-five-content">
          <Outlet />
        </main>

      </div>
    </div>
  );
};

export default DashboardFiveLayout;