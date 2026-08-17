import { Plus } from "lucide-react";


const ProjectHeader = () => {
  return (
    <div className="mb-8 flex items-center justify-between">
      {/* Left */}
      <div>
        <span className="text-[14px] text-[#98A2B3]">
          Dashboard / Projects
        </span>
        <h1 className="mt-2 text-[32px] font-semibold text-[#344054]">
          Projects
        </h1>
        <p className="mt-2 text-[15px] text-[#667085]">
          Manage all your active projects in one place.
        </p>
      </div>
      {/* Right */}
      <button
        className="
          flex
          h-[50px]
          items-center
          gap-2
          rounded-xl
          bg-[#22983A]
          px-6
          text-[15px]
          font-medium
          text-white
          transition-all
          duration-200
          hover:bg-[#1C7D31]
        "
      >
        <Plus size={18} />
        Add Project
      </button>
    </div>
  );
};
export default ProjectHeader;