import { useState } from "react";

const tabs = [
  {
    id: "all",
    label: "All",
    count: 983,
  },
  {
    id: "active",
    label: "Active",
    count: 968,
  },
  {
    id: "blocked",
    label: "Blocked",
    count: 15,
  },
];

const CustomerTabs = () => {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className="relative z-10 flex items-end buttons-swipe">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`relative -mr-px flex h-[52px] min-w-[104px] items-center justify-center gap-2 rounded-t-[18px] border border-b-0 px-6 transition-all ${
            activeTab === tab.id
              ? "z-10 border-[#E9EDF3] bg-white text-[#3F434A]"
              : "border-[#E9EDF3] bg-[#F8F9FB] text-[#8A9099] hover:bg-white"
          }`}
        >
          <span className="text-[15px] font-medium">
            {tab.label}
          </span>

          <span
            className={`flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-[10px] font-semibold ${
              activeTab === tab.id
                ? "bg-[#EEF2F6] text-[#8A9099]"
                : "bg-[#E5E7EB] text-[#9CA3AF]"
            }`}
          >
            {tab.count}
          </span>
        </button>
      ))}
    </div>
  );
};

export default CustomerTabs;