const colorMap = {
  cyan: {
    bg: "#DDF8FB",
    border: "#18C5D8",
    title: "#2D4058",
    time: "#6B7280",
  },
  yellow: {
    bg: "#FFF4CC",
    border: "#F4C542",
    title: "#2D4058",
    time: "#6B7280",
  },
  green: {
    bg: "#DDF5E3",
    border: "#42C96A",
    title: "#2D4058",
    time: "#6B7280",
  },
};

const WeekEvent = ({
  event,
  top,
  height,
  onClick,
}) => {
  const theme = colorMap[event.color] || colorMap.cyan;

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => onClick?.(event)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick?.(event);
        }
      }}
      className="absolute left-[4px] right-[4px] t-0 cursor-pointer overflow-hidden rounded-md transition-all duration-200 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#22963F]"
      style={{
        top,
        height,
        background: theme.bg,
        borderLeft: `4px solid ${theme.border}`,
      }}
    >
      <div className="flex h-full flex-col justify-between p-2">
        <div>
          <h4
            className="truncate text-[13px] font-semibold"
            style={{ color: theme.title }}
          >
            {event.title}
          </h4>

          <p
            className="mt-1 text-[11px]"
            style={{ color: theme.time }}
          >
            {event.time}
          </p>
        </div>

        {height > 110 && event.description && (
          <p className="mt-2 line-clamp-3 text-[11px] text-[#6B7280]">
            {event.description}
          </p>
        )}
      </div>
    </div>
  );
};

export default WeekEvent;