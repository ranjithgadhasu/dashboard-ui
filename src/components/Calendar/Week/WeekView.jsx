import WeekHeader from "./WeekHeader";
import WeekTimeColumn from "./WeekTimeColumn";
import WeekGrid from "./WeekGrid";

const WeekView = () => {
  return (
    <div className="week-calendar overflow-hidden rounded-xl border border-[#E9EDF5] bg-white">

      {/* Header */}
      <WeekHeader />

      {/* Calendar Body */}
      <div className="flex h-[960px] overflow-y-auto">

        {/* Time Column */}
        <WeekTimeColumn />

        {/* Week Grid */}
        <WeekGrid />

      </div>

    </div>
  );
};

export default WeekView;