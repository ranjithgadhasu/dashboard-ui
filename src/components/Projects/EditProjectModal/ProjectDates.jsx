import { ChevronDown } from "lucide-react";

const ProjectDates = ({ project }) => {
  return (
    <div className="mt-6 px-6">
      <div className="grid grid-cols-2 gap-5">

        {/* Start Date */}
        <div>
          <label className="mb-3 block text-[14px] font-medium text-[#667085]">
            Start Date
          </label>

          <div className="flex h-[46px] overflow-hidden rounded-2xl border border-[#E4E7EC] bg-white">

            {/* Time */}
            <input
              type="text"
              defaultValue={project.startTime}
              className="
                w-[90px]
                border-r
                border-[#E4E7EC]
                bg-transparent
                text-center
                text-[15px]
                font-medium
                text-[#344054]
                outline-none
              "
            />

            {/* Date */}
            <div className="flex flex-1 items-center justify-between px-4">

              <input
                type="text"
                defaultValue={project.startDate}
                className="
                  w-full
                  bg-transparent
                  text-[15px]
                  font-medium
                  text-[#344054]
                  outline-none
                "
              />

              <ChevronDown
                size={18}
                className="text-[#98A2B3]"
              />

            </div>

          </div>
        </div>

        {/* End Date */}
        <div>
          <label className="mb-3 block text-[14px] font-medium text-[#667085]">
            End Date
          </label>

          <div className="flex h-[46px] overflow-hidden rounded-2xl border border-[#E4E7EC] bg-white">

            {/* Time */}
            <input
              type="text"
              defaultValue={project.endTime}
              className="
                w-[90px]
                border-r
                border-[#E4E7EC]
                bg-transparent
                text-center
                text-[15px]
                font-medium
                text-[#344054]
                outline-none
              "
            />

            {/* Date */}
            <div className="flex flex-1 items-center justify-between px-4">

              <input
                type="text"
                defaultValue={project.endDate}
                className="
                  w-full
                  bg-transparent
                  text-[15px]
                  font-medium
                  text-[#344054]
                  outline-none
                "
              />

              <ChevronDown
                size={18}
                className="text-[#98A2B3]"
              />

            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default ProjectDates;