import { useState } from "react";
import { Plus, SlidersHorizontal } from "lucide-react";
import ProjectFilterDrawer from "./ProjectFilterDrawer";
import AddProjectModal from "./AddProjectModal";
import "./projectheader.css";

const ProjectHeader = () => {
  const [openFilter, setOpenFilter] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div className="mb-8 flex items-center justify-between project-header">

        {/* Left */}
        <div className="project-header-title">
          <h1 className="text-[28px] font-medium leading-none text-[#344054]">
            Projects
          </h1>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4 project-header-actions">

          {/* Filter */}
          <button
            type="button"
            onClick={() => setOpenFilter(true)}
            className="
              flex
              h-[40px]
              w-11
              items-center
              justify-center
              rounded-xl
              border
              border-[#EEF2F7]
              bg-white
              text-[#667085]
              shadow-sm
              transition
              hover:border-[#22C55E]
              hover:text-[#22C55E]
              project-filter-button
            "
            aria-label="Filter projects"
          >
            <SlidersHorizontal size={18} />
          </button>

          {/* Add Project */}
          <button
            type="button"
            onClick={() => setOpenModal(true)}
            className="
              flex
              h-[40px]
              items-center
              gap-2
              rounded-xl
              bg-[#22983A]
              px-6
              text-[15px]
              font-medium
              text-white
              shadow-sm
              transition
              hover:bg-[#1C7F31]
              project-add-button
            "
          >
            <Plus size={18} />

            <span className="project-add-text">
              Add Project
            </span>
          </button>

        </div>
      </div>

      <ProjectFilterDrawer
        open={openFilter}
        onClose={() => setOpenFilter(false)}
      />

      <AddProjectModal
        open={openModal}
        onClose={() => setOpenModal(false)}
      />
    </>
  );
};

export default ProjectHeader;