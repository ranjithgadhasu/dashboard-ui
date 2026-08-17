import { currentTime } from "./WeekData";

const HOUR_HEIGHT = 80;

const CurrentTimeIndicator = () => {
  const top =
    currentTime.hour * HOUR_HEIGHT +
    (currentTime.minute / 60) * HOUR_HEIGHT;

  return (
    <div
      className="absolute left-0 right-0 z-50 pointer-events-none"
      style={{
        top,
        transform: "translateY(-1px)",
      }}
    >
      {/* Time Label */}
      <span className="absolute -left-[44px] -translate-y-1/2 rounded bg-[#FF6A5F] px-1.5 py-[2px] text-[11px] text-white">
        {currentTime.label}
      </span>

      {/* Red Dot */}
      <div className="absolute -left-[3px] -translate-y-1/2 h-2 w-2 rounded-full bg-[#FF6A5F]" />

      {/* Horizontal Line */}
      <div className="h-px w-full bg-[#FF6A5F]" />
    </div>
  );
};

export default CurrentTimeIndicator;