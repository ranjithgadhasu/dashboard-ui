const TaskProgress = ({
  progress = 0,
  title = "Progress",
  color = "#22C55E",
}) => {
  return (
    <div className="mt-5">

      {/* Header */}
      <div className="mb-2 flex items-center justify-between">

        <span className="text-[13px] font-medium text-[#667085]">
          {title}
        </span>

        <span
          className="text-[13px] font-semibold"
          style={{ color }}
        >
          {progress}%
        </span>

      </div>

      {/* Progress Track */}
      <div className="h-[8px] w-full overflow-hidden rounded-full bg-[#EEF2F7]">

        {/* Progress Fill */}
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{
            width: `${progress}%`,
            backgroundColor: color,
          }}
        />

      </div>

    </div>
  );
};

export default TaskProgress;