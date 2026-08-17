import { CalendarDays, ArrowRight } from "lucide-react";

const ProjectCardFooter = ({ project }) => {
  return (
    <div className="flex items-center justify-between">

      {/* Due Date */}
      <div
        className={`
          flex
          items-center
          gap-2
          rounded-full
          px-4
          py-2
          text-[13px]
          font-medium
          ${
            project.dueColor === "warning"
              ? "bg-[#FFF7ED] text-[#F59E0B]"
              : project.dueColor === "success"
              ? "bg-[#ECFDF3] text-[#22C55E]"
              : "bg-[#F8FAFC] text-[#667085]"
          }
        `}
      >
        <CalendarDays size={16} />

        <span>{project.dueText}</span>
      </div>

      {/* View Details */}
      <button
        className="
          flex
          items-center
          gap-2
          text-[14px]
          font-medium
          text-[#22983A]
          transition
          hover:gap-3
        "
      >
        View

        <ArrowRight size={16} />
      </button>

    </div>
  );
};

export default ProjectCardFooter;