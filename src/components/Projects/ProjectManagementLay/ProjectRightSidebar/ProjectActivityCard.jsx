import FavoriteImage from "../../../../assets/images/FavoriteImage.png";

const ProjectActivityCard = ({ project }) => {
  const activities = project?.activities || [];

  return (
    <div className="mt-8">
      <h2 className="mb-6 text-[28px] font-medium text-[#344054]">
        Recent Activity
      </h2>

      {/* Group 1 */}
      <div className="mb-8">
        <p className="mb-5 text-[15px] font-normal text-[#98A2B3]">
          12 September
        </p>
        <div className="space-y-5">
          {activities.slice(0, 4).map((item) => (
            <div
              key={item.id}
              className="flex items-start gap-3"
            >
              <img
                src={item.avatar || FavoriteImage}
                alt={item.user}
                className="h-10 w-10 rounded-full object-cover"
              />

              <div className="flex-1">

                <h4 className="text-[14px] font-normal text-[#667085]">
                  {item.user}
                </h4>

                <p className="mt-1 text-[14px] font-normal leading-6 text-[#344054]">
                  {item.action}{" "}
                  <span className="font-semibold text-[#22983A]">
                    {item.project}
                  </span>
                </p>

                <span className="mt-1 block text-[12px] font-normal text-[#98A2B3]">
                  {item.time}
                </span>

              </div>
            </div>
          ))}

        </div>
      </div>

      {/* Group 2 */}
      <div>

        <p className="mb-5 text-[13px] text-[#98A2B3]">
          16 September
        </p>

        <div className="space-y-5">

          {activities.slice(4).map((item) => (
            <div
              key={item.id}
              className="flex items-start gap-3"
            >
              <img
                src={item.avatar || FavoriteImage}
                alt={item.user}
                className="h-10 w-10 rounded-full object-cover"
              />

              <div className="flex-1">

                <h4 className="text-[14px] font-medium text-[#667085]">
                  {item.user}
                </h4>

                <p className="mt-1 text-[14px] leading-6 text-[#344054]">
                  {item.action}{" "}
                  <span className="font-semibold text-[#22983A]">
                    {item.project}
                  </span>
                </p>

                <span className="mt-1 block text-[12px] text-[#98A2B3]">
                  {item.time}
                </span>

              </div>
            </div>
          ))}

        </div>

      </div>

    </div>
  );
};

export default ProjectActivityCard;