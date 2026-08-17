import TimelineDateMarker from "./TimelineDateMarker";
import TimelineColumn from "./TimelineColumn";
import TimelineCreatePost from "./TimelineCreatePost";
import { timelineData } from "./myProfileTimelineData";

const TimelineFeed = () => {
  return (
    <div className="timeline-feed">
      {/* Today */}

      <TimelineDateMarker label="Today" />

      <div className="relative">
        {/* Center Line */}

        <div
          className="
            absolute
            left-1/2
            top-0
            bottom-0
            hidden
            w-px
            -translate-x-1/2
            bg-[#dfe3e5]
            lg:block
          "
        />

        {/* Timeline Columns */}

        <div className="grid grid-cols-1 gap-[14px] lg:grid-cols-2">
          {/* Left */}

          <div className="flex flex-col gap-[14px] lg:pr-[7px]">
            <TimelineCreatePost />

            <TimelineColumn posts={timelineData.today.left} side="left" />
          </div>

          {/* Right */}

          <div className="flex flex-col gap-[14px] pt-[44px] lg:pl-[7px]">
            <TimelineColumn posts={timelineData.today.right} side="right" />
          </div>
        </div>
      </div>

      {/* Yesterday */}

      <div className="my-[30px]">
        <TimelineDateMarker label="Yesterday" />
      </div>

      {/* Yesterday Timeline */}

      <div className="relative">
        {/* Center Line */}

        <div
          className="
            absolute
            left-1/2
            top-0
            bottom-0
            hidden
            w-px
            -translate-x-1/2
            bg-[#dfe3e5]
            lg:block
          "
        />

        <div className="grid grid-cols-1 gap-[14px] lg:grid-cols-2">
          {/* Left */}

          <div className="lg:pr-[7px]">
            <TimelineColumn posts={timelineData.yesterday.left} side="left" />
          </div>

          {/* Right */}

          <div className="lg:pl-[7px]">
            <TimelineColumn posts={timelineData.yesterday.right} side="right" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineFeed;
