const ProjectDescription = ({ project }) => {
  return (
    <div
      className="
        mt-8
        rounded-3xl
        border
        border-[#EEF2F7]
        bg-white
        p-6
      "
    >
      {/* Header */}
      <div className="mb-5">

        <h2
          className="
            text-[22px]
            font-semibold
            text-[#344054]
          "
        >
          Description
        </h2>

        <p
          className="
            mt-1
            text-[14px]
            text-[#98A2B3]
          "
        >
          Project overview
        </p>

      </div>

      {/* Description */}
      <div
        className="
          text-[15px]
          leading-8
          text-[#667085]
        "
      >
        {project?.description ? (
          <p>{project.description}</p>
        ) : (
          <p className="italic text-[#98A2B3]">
            No description available for this project.
          </p>
        )}
      </div>

      {/* Tags */}
      {project?.tags?.length > 0 && (
        <div className="mt-8 flex flex-wrap gap-3">

          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="
                rounded-full
                bg-[#F3FFF5]
                px-4
                py-2
                text-[13px]
                font-medium
                text-[#22983A]
              "
            >
              {tag}
            </span>
          ))}

        </div>
      )}

    </div>
  );
};

export default ProjectDescription;