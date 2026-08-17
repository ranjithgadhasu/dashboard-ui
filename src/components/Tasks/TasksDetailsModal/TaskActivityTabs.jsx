import { useState } from "react";

const TaskActivityTabs = ({
  onChange,
}) => {
  const [activeTab, setActiveTab] = useState("comments");

  const handleTab = (tab) => {
    setActiveTab(tab);

    if (onChange) {
      onChange(tab);
    }
  };

  return (
    <div className="mb-6 border-b border-[#EEF2F7]">

      <div className="flex items-center gap-8">

        {/* Comments */}
        <button
          type="button"
          onClick={() => handleTab("comments")}
          className={`
            relative
            pb-4
            text-[13px]
            font-semibold
            uppercase
            tracking-[0.08em]
            transition-all
            duration-200
            ${
              activeTab === "comments"
                ? "text-[#22983A]"
                : "text-[#98A2B3]"
            }
          `}
        >
          Comments

          {activeTab === "comments" && (
            <span
              className="
                absolute
                bottom-0
                left-0
                h-[2px]
                w-full
                rounded-full
                bg-[#22983A]
              "
            />
          )}
        </button>

        {/* Activity */}
        <button
          type="button"
          onClick={() => handleTab("activity")}
          className={`
            relative
            pb-4
            text-[13px]
            font-semibold
            uppercase
            tracking-[0.08em]
            transition-all
            duration-200
            ${
              activeTab === "activity"
                ? "text-[#22983A]"
                : "text-[#98A2B3]"
            }
          `}
        >
          Activity

          {activeTab === "activity" && (
            <span
              className="
                absolute
                bottom-0
                left-0
                h-[2px]
                w-full
                rounded-full
                bg-[#22983A]
              "
            />
          )}
        </button>

      </div>

    </div>
  );
};

export default TaskActivityTabs;