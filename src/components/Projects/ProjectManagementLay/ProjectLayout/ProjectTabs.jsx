import { useState } from "react";

const tabs = [
  {
    id: "all",
    label: "All",
    count: 9,
  },
  {
    id: "started",
    label: "Started",
    count: 3,
  },
  {
    id: "progress",
    label: "In Progress",
    count: 4,
  },
  {
    id: "completed",
    label: "Completed",
    count: 2,
  },
];

const ProjectTabs = ({ onTabChange }) => {
  const [activeTab, setActiveTab] = useState("all");

  const handleTabClick = (tab) => {
    setActiveTab(tab.id);
    onTabChange?.(tab.id);
  };

  return (
    <div className="mt-6">

      <div className="flex gap-2 overflow-x-auto">

        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab)}
            className={`
              whitespace-nowrap
              rounded-xl
              px-4
              py-2
              text-[13px]
              font-medium
              transition-all
              ${
                activeTab === tab.id
                  ? "bg-[#22983A] text-white"
                  : "bg-[#F8FAFC] text-[#667085] hover:bg-[#EEF2F7]"
              }
            `}
          >
            {tab.label}

            <span className="ml-2">
              ({tab.count})
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProjectTabs;