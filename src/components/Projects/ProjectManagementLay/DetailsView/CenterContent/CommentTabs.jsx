import { useState } from "react";

const tabs = [
  {
    id: "all",
    label: "All",
    count: 24,
  },
  {
    id: "mentions",
    label: "Mentions",
    count: 5,
  },
  {
    id: "unread",
    label: "Unread",
    count: 8,
  },
  {
    id: "resolved",
    label: "Resolved",
    count: 11,
  },
];

const CommentTabs = ({ onTabChange }) => {
  const [activeTab, setActiveTab] = useState("all");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    onTabChange?.(tabId);
  };

  return (
    <div className="mb-6 border-b border-[#EEF2F7]">

      <div className="flex items-center gap-8 overflow-x-auto">

        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={`
              relative
              flex
              items-center
              gap-2
              whitespace-nowrap
              pb-4
              text-[15px]
              font-medium
              transition-all
              ${
                activeTab === tab.id
                  ? "text-[#22983A]"
                  : "text-[#667085] hover:text-[#344054]"
              }
            `}
          >
            {tab.label}

            <span
              className={`
                rounded-full
                px-2.5
                py-0.5
                text-[12px]
                font-semibold
                ${
                  activeTab === tab.id
                    ? "bg-[#ECFDF3] text-[#22983A]"
                    : "bg-[#F2F4F7] text-[#667085]"
                }
              `}
            >
              {tab.count}
            </span>

            {activeTab === tab.id && (
              <span
                className="
                  absolute
                  bottom-0
                  left-0
                  h-[3px]
                  w-full
                  rounded-full
                  bg-[#22983A]
                "
              />
            )}
          </button>
        ))}

      </div>

    </div>
  );
};

export default CommentTabs; 