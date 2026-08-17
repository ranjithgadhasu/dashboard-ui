const ChecklistProgress = ({
  completed = 0,
  total = 0,
}) => {
  const percentage =
    total > 0
      ? Math.round((completed / total) * 100)
      : 0;

  return (
    <div>

      {/* Header */}
      <div className="mb-3 flex items-center justify-between">

        <h4
          className="
            text-[15px]
            font-medium
            text-[#344054]
          "
        >
          Progress
        </h4>

        <span
          className="
            text-[14px]
            font-semibold
            text-[#22983A]
          "
        >
          {percentage}%
        </span>

      </div>

      {/* Progress Bar */}
      <div
        className="
          h-[10px]
          w-full
          overflow-hidden
          rounded-full
          bg-[#EEF2F7]
        "
      >
        <div
          className="
            h-full
            rounded-full
            bg-[#22983A]
            transition-all
            duration-500
          "
          style={{
            width: `${percentage}%`,
          }}
        />
      </div>

      {/* Footer */}
      <div className="mt-3 flex items-center justify-between">

        <span
          className="
            text-[13px]
            text-[#98A2B3]
          "
        >
          {completed} of {total} completed
        </span>

        <span
          className="
            text-[13px]
            font-medium
            text-[#344054]
          "
        >
          {total - completed} Remaining
        </span>

      </div>

    </div>
  );
};

export default ChecklistProgress;