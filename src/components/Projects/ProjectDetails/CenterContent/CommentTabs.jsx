const CommentTabs = ({
  activeTab,
  setActiveTab,
}) => {
  return (
    <div
      className="
        border-b
        border-[#EEF2F7]
      "
    >
      <div className="flex items-center gap-12">

        {/* Comments */}
        <button
          onClick={() => setActiveTab("comments")}
          className={`
            relative
            pb-5
            text-[14px]
            font-semibold
            uppercase
            tracking-wide
            transition
            ${
              activeTab === "comments"
                ? "text-[#22983A]"
                : "text-[#667085] hover:text-[#344054]"
            }
          `}
        >
          COMMENTS

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
          onClick={() => setActiveTab("activity")}
          className={`
            relative
            pb-5
            text-[14px]
            font-semibold
            uppercase
            tracking-wide
            transition
            ${
              activeTab === "activity"
                ? "text-[#22983A]"
                : "text-[#667085] hover:text-[#344054]"
            }
          `}
        >
          ACTIVITY

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

export default CommentTabs;