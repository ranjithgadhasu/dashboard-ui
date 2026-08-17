import { useState } from "react"; 
import "./oder.css"

const tabs = [
  { id: "all", label: "All", count: 983 },
  { id: "pending", label: "Pending", count: 128 },
  { id: "processing", label: "Processing", count: 15 },
  { id: "refunded", label: "Refunded", count: 8 },
];

const OrdersTabs = () => {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className="border-b border-[#E8EDF3] orders-tabs-wrapper ">
      <div className="flex items-end orders-tabs-list">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              clipPath:
                "polygon(0 0, calc(100% - 42px) 0, 100% 100%, 5px 100%)",
            }}
            className={`
              relative
              ml-2
              h-[40px]
              min-w-[150px]
              border
              border-b-0
              border-[#E8EDF3]
              bg-white
              px-7
              pb-3
              pt-2
              transition-all
              duration-200
              orders-tab
              ${
                activeTab === tab.id
                  ? "z-20"
                  : "z-10 hover:bg-[#FAFAFA]"
              }
            `}
          >
            <div className="flex items-center justify-center gap-2 orders-tab-content">
              <span
                className={`text-[14px] font-medium orders-tab-label ${
                  activeTab === tab.id
                    ? "text-[#374151]"
                    : "text-[#8A9099]"
                }`}
              >
                {tab.label}
              </span>

              <span
                className={`flex h-5 min-w-[26px] items-center justify-center rounded-md px-2 text-[10px] font-semibold orders-tab-count ${
                  activeTab === tab.id
                    ? "bg-[#EEF7F0] text-[#22963F]"
                    : "bg-[#F3F4F6] text-[#9CA3AF]"
                }`}
              >
                {tab.count}
              </span>
            </div>

          {activeTab === tab.id && (
  <span className="absolute bottom-0 left-0 h-[3px] w-full rounded-full bg-[#22963F]" />
)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default OrdersTabs;