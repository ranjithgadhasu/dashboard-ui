import {
  MessageCircle,
  FileText,
  CheckCircle2,
  UserPlus,
} from "lucide-react";

const ProjectActivityCard = ({ project }) => {
  return (
    <div
      className="
        rounded-2xl
        border
        border-[#EEF2F7]
        bg-white
        p-5
      "
    >
      {/* Header */}
      <div className="mb-5 flex items-center justify-between">

        <h3
          className="
            text-[16px]
            font-semibold
            text-[#344054]
          "
        >
          Recent Activity
        </h3>

        <span
          className="
            rounded-full
            bg-[#F3FFF5]
            px-3
            py-1
            text-[12px]
            font-medium
            text-[#22983A]
          "
        >
          {project.activities?.length || 0}
        </span>

      </div>

      {/* Activity List */}
      <div className="space-y-5">

        {project.activities?.map((activity) => {

          let Icon = MessageCircle;

          if (activity.type === "comment") {
            Icon = MessageCircle;
          }

          if (activity.type === "file") {
            Icon = FileText;
          }

          if (activity.type === "completed") {
            Icon = CheckCircle2;
          }

          if (activity.type === "member") {
            Icon = UserPlus;
          }

          return (
            <div
              key={activity.id}
              className="flex items-start gap-3"
            >
              {/* Icon */}
              <div
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  bg-[#F8FAFC]
                "
              >
                <Icon
                  size={18}
                  className="text-[#22983A]"
                />
              </div>

              {/* Content */}
              <div className="flex-1">

                <p
                  className="
                    text-[14px]
                    leading-6
                    text-[#344054]
                  "
                >
                  {activity.title}
                </p>

                <span
                  className="
                    mt-1
                    block
                    text-[12px]
                    text-[#98A2B3]
                  "
                >
                  {activity.time}
                </span>

              </div>

            </div>
          );
        })}

      </div>

    </div>
  );
};

export default ProjectActivityCard;