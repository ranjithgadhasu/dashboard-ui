import { ArrowDown, ArrowUp } from "lucide-react";
import CalendarButton from "../common/CalendarButton";

const FollowersGrowthHeader = () => {
  return (
    <>
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">

        <h2 className="text-[20px] font-medium text-[#3F434A]">
          Followers Growth
        </h2>

        <CalendarButton />

      </div>

      {/* Statistics */}
      <div className="mb-2 flex items-center gap-10">

        {/* Current Week */}
        <div className="flex items-center gap-4">

          <div className="flex h-[40px] w-[40px] items-center justify-center rounded-2xl bg-[#EEF9F1]">

            <ArrowUp
              size={22}
              className="text-[#21943A]"
            />

          </div>

          <div>

            <h3 className="text-[18px] font-normal leading-none text-[#3F434A]">
              21.800
            </h3>

            <p className="mt-1 text-[14px] font-normal text-[#8A9099]">
              Current Week
            </p>

          </div>

        </div>

        {/* Last Week */}
        <div className="flex items-center gap-4">

          <div className="flex h-[40px] w-[40px] items-center justify-center rounded-2xl bg-[#EEF9F7]">

            <ArrowDown
              size={22}
              className="text-[#45C9B2]"
            />

          </div>

          <div>

            <h3 className="text-[18px] font-normal leading-none text-[#3F434A]">
              19.400
            </h3>

            <p className="mt-1 text-[14px] font-normal text-[#8A9099]">
              Last Week
            </p>

          </div>

        </div>

      </div>
    </>
  );
};

export default FollowersGrowthHeader;