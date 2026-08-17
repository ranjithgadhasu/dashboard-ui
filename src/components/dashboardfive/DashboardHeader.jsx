import { Download } from "lucide-react";
import"./dashboardfive.css"


const DashboardHeader = () => {
  return (
    <div className="mb-6 flex items-center justify-between dashboard-five-header">
      {/* Left */}
      <h1 className="text-[28px] ml-2 font-medium text-[#3F434A] overview-hone">
        Overview
      </h1>
      {/* Right */}
      <div className="flex items-center gap-3 dashboard-five-header-actions">
        {/* Download */}
        <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#EEF2F6] bg-white transition hover:bg-[#F7F8FA]">
          <Download size={16} className="text-[#8A9099]" />
        </button>
        {/* Add Task */}
        <button className="rounded-xl bg-[#21943A] px-6 py-3 text-[15px] font-medium text-white transition hover:bg-[#1D8434]">
          Add Task
        </button>
      </div>

    </div>
  );
};

export default DashboardHeader;