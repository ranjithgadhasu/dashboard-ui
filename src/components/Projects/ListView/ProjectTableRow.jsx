import { Clock3, MoreVertical } from "lucide-react";
import ProgressBar from "./ProgressBar";


const ProjectTableRow = ({ project, onClick }) => {
  return (
    <div
      onClick={() => onClick?.(project)}
      className="
        grid
        grid-cols-[50px_2fr_1.5fr_2fr_180px_50px]
        items-center
        border-b
        border-[#EEF2F7]
        px-5
        py-4
        transition
        hover:bg-[#FAFBFC]
        cursor-pointer
      "
    >
      {/* Checkbox */}
      <div className="flex justify-center">
        <input
          type="checkbox"
          className="h-4 w-4 rounded border-[#D0D5DD]"
          onClick={(e) => e.stopPropagation()}
        />
      </div>

      {/* Project */}
      <div className="flex items-center gap-3">

        <img
          src={project.logo}
          alt={project.projectName}
          className="
            h-12
            w-12
            rounded-xl
            border
            border-[#EEF2F7]
            object-contain
            bg-white
            p-2
          "
        />

        <div>

          <h4
            className="
              text-[15px]
              font-normal
              text-[#344054]
            "
          >
            {project.projectName}
          </h4>

          <p
            className="
              mt-1
              text-[14px]
              font-normal
              text-[#98A2B3]
            "
          >
            {project.company}
          </p>

        </div>

      </div>

      {/* Manager */}
      <div className="flex items-center gap-3">

        <img
          src={project.avatar}
          alt={project.manager}
          className="
            h-10
            w-10
            rounded-full
            object-cover
          "
        />

        <div>

          <h4
            className="
              text-[14px]
              font-normal
              text-[#344054]
            "
          >
            {project.manager}
          </h4>
          <p
            className="
              mt-1
              text-[12px]
              text-[#98A2B3]
            "
          >
            {project.designation}
          </p>

        </div>

      </div>
      {/* Progress */}
      <div className="flex items-center w-80 gap-4">

        <div className="flex-1">
          <ProgressBar
            value={project.progress}
            showPercentage={false}
            height={6}
          />
        </div>
        <span
          className="
            w-10
            text-right
            text-[13px]
            text-[#98A2B3]
          "
        >
          {project.progress}%
        </span>
      </div>
      {/* Deadline */}
      <div>
        <span
          className={`
            inline-flex
            items-center
            gap-2
            rounded-full
            px-3
            py-1.5
            text-[13px]
            font-medium
            ${
              project.deadlineColor === "warning"
                ? "bg-[#FFF7ED] text-[#F97316]"
                : "bg-[#F8FAFC] text-[#667085]"
            }
          `}
        >
          <Clock3 size={14} />
          {project.deadline}
        </span>
      </div>

      {/* More */}
      <div className="flex justify-end">

        <button
          onClick={(e) => e.stopPropagation()}
          className="
            rounded-lg
            p-2
            transition
            hover:bg-[#F3F4F6]
          "
        >
          <MoreVertical
            size={18}
            className="text-[#98A2B3]"
          />
        </button>

      </div>

    </div>
  );
};

export default ProjectTableRow;