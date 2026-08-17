//import TimelineCreatePost from "./TimelineCreatePost";

const TimelineDateMarker = ({ label }) => {
  return (
  <>
    <div className="relative z-20 mb-[22px] flex items-center justify-center">

      <div className="flex h-[32px] w-[100px] items-center justify-center rounded-[4px] bg-[#21943a] px-[12px] shadow-sm">

        <span className="text-[12px] font-medium  leading-none text-white">
          {label}
        </span>

      </div>

    </div>
     {/*<div className=" w-[600px]">
        <TimelineCreatePost />
     </div>*/}
  </>
  );
};

export default TimelineDateMarker;