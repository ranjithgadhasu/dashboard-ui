const ProgressBar = ({
  value = 0,
  max = 100,
  height = 8,
  color = "#22983A",
  background = "#EEF2F7",
  showPercentage = true,
  rounded = true,
}) => {
  const percentage =
    max > 0
      ? Math.min(Math.round((value / max) * 100), 100)
      : 0;

  return (
    <div>

      {/* Header */}
      {showPercentage && (
        <div className="mb-3 flex items-center justify-between">

          <span
            className="
              text-[14px]
              font-medium
              text-[#667085]
            "
          >
            Progress
          </span>

          <span
            className="
              text-[14px]
              font-semibold
              text-[#344054]
            "
          >
            {percentage}%
          </span>

        </div>
      )}

      {/* Progress */}
      <div
        className={`
          w-full
          overflow-hidden
          ${rounded ? "rounded-full" : ""}
        `}
        style={{
          height: `${height}px`,
          background,
        }}
      >
        <div
          className={`
            h-full
            transition-all
            duration-500
            ${rounded ? "rounded-full" : ""}
          `}
          style={{
            width: `${percentage}%`,
            background: color,
          }}
        />
      </div>

    </div>
  );
};

export default ProgressBar;