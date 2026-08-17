import { FolderOpen } from "lucide-react";

const ProjectEmpty = () => {
  return (
    <div
      className="
        flex
        min-h-[500px]
        flex-col
        items-center
        justify-center
        rounded-3xl
        border
        border-dashed
        border-[#D0D5DD]
        bg-white
      "
    >
      {/* Icon */}
      <div
        className="
          flex
          h-20
          w-20
          items-center
          justify-center
          rounded-full
          bg-[#F8FAFC]
        "
      >
        <FolderOpen
          size={34}
          className="text-[#98A2B3]"
        />
      </div>

      {/* Title */}
      <h3 className="mt-6 text-[24px] font-semibold text-[#344054]">
        No Projects Found
      </h3>

      {/* Description */}
      <p
        className="
          mt-3
          max-w-md
          text-center
          text-[15px]
          leading-7
          text-[#98A2B3]
        "
      >
        You don't have any projects yet.
        Click the <strong>Add Project</strong> button to create your first
        project.
      </p>

      {/* Button */}
      <button
        className="
          mt-8
          rounded-xl
          bg-[#22983A]
          px-6
          py-3
          text-[15px]
          font-medium
          text-white
          transition
          hover:bg-[#1C7F31]
        "
      >
        Add Project
      </button>
    </div>
  );
};

export default ProjectEmpty;