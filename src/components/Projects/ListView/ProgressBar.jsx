const ProgressBar = ({
  value,
  height = 6,
  showPercentage = true,
}) => {
  return (
    <div className="flex items-center gap-3 w-full">

      {/* Background */}
      <div
        className="flex-1 rounded-full bg-[#EEF2F7]"
        style={{ height }}
      >
        <div
          className="rounded-full bg-[#44C767] transition-all duration-500"
          style={{
            width: `${value}%`,
            height: "100%",
          }}
        />
      </div>

      {showPercentage && (
        <span className="w-10 text-[13px] text-[#98A2B3]">
          {value}%
        </span>
      )}

    </div>
  );
};

export default ProgressBar;