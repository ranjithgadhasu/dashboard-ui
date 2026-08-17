const DAY_WIDTH = 70;

const TodayIndicator = ({ dayIndex = 6 }) => {
  // dayIndex is 1-based (1 = Monday, 6 = Saturday)
  const left = (dayIndex - 1) * DAY_WIDTH + DAY_WIDTH / 2;

  return (
    <div
      className="absolute top-0 bottom-0 z-30 pointer-events-none"
      style={{
        left: `${left}px`,
      }}
    >
    </div>
  );
};
export default TodayIndicator;