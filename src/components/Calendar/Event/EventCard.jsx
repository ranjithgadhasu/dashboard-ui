import "./event.css"

const colorMap = {
  cyan: {
    bg: "bg-[#DDF8FB]",
    border: "border-[#18C5D8]",
    text: "text-[#5A6772]",
  },
  green: {
    bg: "bg-[#DDF5E3]",
    border: "border-[#42C96A]",
    text: "text-[#5A6772]",
  },
  yellow: {
    bg: "bg-[#FFF4CC]",
    border: "border-[#F4C542]",
    text: "text-[#5A6772]",
  },
};

const EventCard = ({
  title,
  time,
  color = "cyan",
  span = 1,
  moreCount = 0,
  onMoreClick,
  onClick,
  onMouseEnter,
  onMouseLeave,
}) => {

  const theme = colorMap[color] || colorMap.cyan;

  const widthClass = {
    1: "w-full",
    2: "w-[220px]",
    3: "w-[335px]",
    4: "w-[450px]",
    5: "w-[565px]",
  };

  return (

 <div   className="flex cursor-pointer calendar-event"
  onClick={onClick}
  onMouseEnter={onMouseEnter}
  onMouseLeave={onMouseLeave}>

      <div
        className={`flex h-[33px] items-center justify-between rounded-l-sm border-l-[3px] px-3 ${theme.bg} ${theme.border} ${widthClass[span]} calendar-event-content`}
      >
        <span className="truncate text-[12px] calendar-event-title">
          {title}
        </span>

        <span className="ml-3 text-[10px] calendar-event-time">
          {time}
        </span>
      </div>

      {moreCount > 0 && (
        <button
          onClick={onMoreClick}
          className="flex h-[33px] w-[36px] items-center justify-center rounded-r-sm bg-[#FFF4CC] text-[11px] font-semibold text-[#6B5A00] calendar-event-more"
        >
          +{moreCount}
        </button>
      )}

    </div>
  );
};

export default EventCard;