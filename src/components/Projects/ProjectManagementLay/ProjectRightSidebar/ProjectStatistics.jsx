

const ProjectStatistics = ({ data }) => {
  return (
    <div
      className="
        mt-6
        grid
        grid-cols-2
        gap-y-6
        gap-x-4
        border-b
        border-[#EEF2F7]
        pb-8
      "
    >
      {data.stats.map((item) => {

        return (
          <div
            key={item.id}
            className="flex flex-col items-center text-center"
          >
            {/* Icon */}
            <div
              className="
                mb-3
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-xl
                bg-[#F3FFF5]
              "
            >
             <img
    src={item.icon}
    alt={item.title}
    className="h-5 w-5 object-contain"
  />
            </div>

            {/* Number */}
            <h3
              className="
                text-[24px]
                font-medium
                leading-none
                text-[#344054]
              "
            >
              {item.value}
            </h3>

            {/* Title */}
            <p
              className="
                mt-2
                text-[14px]
                font-normal
                text-[#98A2B3]
              "
            >
              {item.title}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectStatistics;