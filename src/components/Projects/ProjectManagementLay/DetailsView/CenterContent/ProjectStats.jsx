import Dollar from "../../../assets/images/Dollar.png";
import Calendar from "../../../assets/images/Calendar.png";
import CalendarBlue from "../../../assets/images/CalendarBlue.png";

const ProjectStats = ({ project }) => {
  const stats = [
    {
      id: 1,
      title: "Budget",
      value: project?.budget || "$24,500",
      subTitle: "Project Budget",
      icon: Dollar,
      bg: "bg-[#F3FFF5]",
    },
    {
      id: 2,
      title: "Start Date",
      value: project?.startDate || "22 Oct 2024",
      subTitle: project?.startTime || "10:00 AM",
      icon: Calendar,
      bg: "bg-[#FFF8E8]",
    },
    {
      id: 3,
      title: "End Date",
      value: project?.endDate || "30 Nov 2024",
      subTitle: project?.endTime || "06:00 PM",
      icon: CalendarBlue,
      bg: "bg-[#EEF6FF]",
    },
  ];

  return (
    <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">

      {stats.map((item) => (

        <div
          key={item.id}
          className="
            rounded-3xl
            border
            border-[#EEF2F7]
            bg-white
            p-6
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-lg
          "
        >

          {/* Icon */}
          <div
            className={`
              ${item.bg}
              mb-5
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-2xl
            `}
          >
            <img
              src={item.icon}
              alt={item.title}
              className="h-7 w-7 object-contain"
            />
          </div>

          {/* Title */}
          <p
            className="
              text-[14px]
              font-medium
              text-[#98A2B3]
            "
          >
            {item.title}
          </p>

          {/* Value */}
          <h3
            className="
              mt-2
              text-[24px]
              font-semibold
              text-[#344054]
            "
          >
            {item.value}
          </h3>

          {/* Subtitle */}
          <p
            className="
              mt-2
              text-[14px]
              text-[#98A2B3]
            "
          >
            {item.subTitle}
          </p>

        </div>

      ))}

    </div>
  );
};

export default ProjectStats;