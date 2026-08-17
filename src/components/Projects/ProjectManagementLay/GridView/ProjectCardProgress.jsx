const ProjectCardProgress = ({ project }) => {
  return (
    <div>

      {/* Header */}
      <div className="mb-3 flex items-center justify-between">

        <span
          className="
            text-[14px]
            font-medium
            text-[#344054]
          "
        >
          Progress
        </span>

        <span
          className="
            text-[14px]
            font-semibold
            text-[#667085]
          "
        >
          {project.progress}%
        </span>

      </div>

      {/* Progress Bar */}
      <div
        className="
          h-[8px]
          w-full
          overflow-hidden
          rounded-full
          bg-[#EEF2F7]
        "
      >
        <div
          className="
            h-full
            rounded-full
            bg-[#22983A]
            transition-all
            duration-500
          "
          style={{
            width: `${project.progress}%`,
          }}
        />
      </div>

    </div>
  );
};

export default ProjectCardProgress;