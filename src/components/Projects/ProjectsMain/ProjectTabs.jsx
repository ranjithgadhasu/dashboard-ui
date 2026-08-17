import { LayoutGrid, List } from "lucide-react";
import { projectTabs } from "./projectData";
import { useNavigate } from "react-router-dom";

import "./ProjectTabs.css";

const ProjectTabs = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="mb-8 flex items-center justify-between border-b border-[#EEF2F7] project-tabs">
        {/* Left Tabs */}
        <div className="flex items-center gap-8 project-tabs-left">
          {projectTabs.map((tab) => (
            <button
              key={tab.id}
              className={`
                relative
                flex
                items-center
                gap-2
                pb-4
                text-[15px]
                font-medium
                transition
                project-tab
                ${
                  tab.active
                    ? "text-[#344054]"
                    : "text-[#98A2B3] hover:text-[#344054]"
                }
              `}
            >
              <span className="project-tab-label">{tab.label}</span>

              <span
                className={`
                  flex
                  h-5
                  min-w-[22px]
                  items-center
                  justify-center
                  rounded-md
                  px-1.5
                  text-[11px]
                  font-semibold
                  project-tab-count
                  ${
                    tab.active
                      ? "bg-[#EEF2F7] text-[#667085]"
                      : "bg-[#F8FAFC] text-[#98A2B3]"
                  }
                `}
              >
                {tab.count}
              </span>

              {tab.active && (
                <span
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-[3px]
                    w-full
                    rounded-full
                    bg-[#22C55E]
                    project-tab-active
                  "
                />
              )}
            </button>
          ))}
        </div>

        {/* View Icons */}
        <div className="flex items-center gap-4 pb-4 project-view-icons">
          <button
            className="
              text-[#98A2B3]
              transition
              hover:text-[#344054]
              project-view-list
            "
          >
            <i className="ri-list-unordered"></i>
          </button>

          <button
            className="
              text-[#22C55E]
              transition
              project-view-grid
            "
          >
            <i className="ri-grid-fill"></i>
          </button>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4 project-actions">
          {/* Chart */}
          <button
            onClick={() => navigate("/gantt-chart")}
            className="hover:text-green-600 hover:border-b-1 cursor-pointer project-action-chart"
          >
            Chart
          </button>

          {/* Grid Page */}
          <button
            onClick={() => navigate("/projects-gridpage")}
            className="hover:text-green-600 hover:border-b-1 cursor-pointer project-action-gridpage"
          >
            Gridpage
          </button>

          {/* List View */}
          <button
            onClick={() => navigate("/list-view-project")}
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-xl
              border
              border-[#EEF2F7]
              bg-white
              text-[#98A2B3]
              transition
              hover:text-[#22C55E]
              project-list-button
            "
          >
            <List size={18} />
          </button>

          {/* Grid View */}
          <button
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-xl
              text-[#22C55E]
              project-grid-button
            "
          >
            <LayoutGrid
              onClick={() => navigate("/projects-details")}
              size={18}
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default ProjectTabs;
