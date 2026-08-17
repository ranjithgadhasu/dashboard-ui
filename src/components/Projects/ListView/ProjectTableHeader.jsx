const ProjectTableHeader = () => {
  return (
    <div
      className="
        grid
        grid-cols-[50px_2fr_1.5fr_2fr_180px_50px]
        items-center
        border-b
        border-[#EEF2F7]
        bg-[#FCFCFD]
        px-5
        py-4
      "
    >
      {/* Checkbox */}
      <div className="flex justify-center">
        <input
          type="checkbox"
          className="
            h-4
            w-4
            cursor-pointer
            rounded
            border-[#D0D5DD]
          "
        />
      </div>

      {/* Project */}
      <div
        className="
          text-[12px]
          font-semibold
          uppercase
          tracking-wide
          text-[#98A2B3]
        "
      >
        Project Name
      </div>

      {/* Created By */}
      <div
        className="
          text-[12px]
          font-semibold
          uppercase
          tracking-wide
          text-[#98A2B3]
        "
      >
        Created By
      </div>

      {/* Progress */}
      <div
        className="
          text-[12px]
          font-semibold
          uppercase
          tracking-wide
          text-[#98A2B3]
        "
      >
        Progress
      </div>

      {/* Deadline */}
      <div
        className="
          text-[12px]
          font-semibold
          uppercase
          tracking-wide
          text-[#98A2B3]
        "
      >
        Deadline
      </div>

      {/* More */}
      <div></div>
    </div>
  );
};

export default ProjectTableHeader;