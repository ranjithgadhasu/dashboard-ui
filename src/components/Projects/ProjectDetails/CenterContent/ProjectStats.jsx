import Dollar from "../../../../assets/images/Dollar.png";
import Calendar from "../../../../assets/images/Calendar.png";
import CalendarBlue from "../../../../assets/images/CalendarBlue.png";

const ProjectStats = ({ project }) => {
  return (
    <div className="mt-8">

      {/* Heading */}
      <h4
        className="
          mb-6
          text-[14px]
          font-medium
          uppercase
          tracking-wider
          text-[#667085]
        "
      >
        Details
      </h4>

      {/* Stats Row */}
      <div className="flex items-center gap-16">

        {/* Budget */}
        <div className="flex items-center gap-4">

          <div
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-2xl
              bg-[#EFF8F3]
            "
          >
            <img
              src={Dollar}
              alt="Budget"
              className="h-6 w-6"
            />
          </div>

          <div>
            <p className="text-[14px] font-normal text-[#98A2B3]">
              Budget
            </p>

            <h5 className="mt-1 text-[14px] font-normal text-[#344054]">
              {project.budget}
            </h5>
          </div>

        </div>

        {/* Start Date */}
        <div className="flex items-center gap-4">

          <div
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-2xl
              bg-[#EFF8F3]
            "
          >
            <img
              src={Calendar}
              alt="Start Date"
              className="h-6 w-6"
            />
          </div>

          <div>
            <p className="text-[14px] font-normal text-[#98A2B3]">
              Start Date
            </p>

            <h5 className="mt-1 text-[14px] font-normal text-[#344054]">
              {project.startDate}
            </h5>
          </div>

        </div>

        {/* End Date */}
        <div className="flex items-center gap-4">

          <div
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-2xl
              bg-[#EFF8F8]
            "
          >
            <img
              src={CalendarBlue}
              alt="End Date"
              className="h-6 w-6"
            />
          </div>

          <div>
            <p className="text-[14px] font-normal text-[#98A2B3]">
              End Date
            </p>

            <h5 className="mt-1 text-[14px] font-normal text-[#344054]">
              {project.endDate}
            </h5>
          </div>

        </div>

      </div>

    </div>
  );
};

export default ProjectStats;