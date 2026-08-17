import { Search, SlidersHorizontal, LayoutGrid, List, Plus } from "lucide-react";
import { useState } from "react";

const ProjectToolbar = () => {
  const [view, setView] = useState("grid");

  return (
    <div className="mb-8">

      {/* Top */}
      <div className="flex items-center justify-between">

        {/* Left */}
        <div>
          <h1 className="text-[32px] font-semibold text-[#344054]">
            Projects
          </h1>

          <p className="mt-2 text-[15px] text-[#98A2B3]">
            Manage your active projects
          </p>
        </div>

        {/* Right */}
        <button
          className="
            flex
            h-[48px]
            items-center
            gap-2
            rounded-xl
            bg-[#22983A]
            px-5
            text-[15px]
            font-medium
            text-white
            transition
            hover:bg-[#1D8133]
          "
        >
          <Plus size={18} />
          Add Project
        </button>

      </div>

      {/* Bottom Toolbar */}
      <div className="mt-8 flex flex-wrap items-center justify-between gap-4">

        {/* Search */}
        <div className="relative w-full max-w-[350px]">

          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#98A2B3]"
          />

          <input
            type="text"
            placeholder="Search projects..."
            className="
              h-[48px]
              w-full
              rounded-xl
              border
              border-[#E4E7EC]
              bg-white
              pl-11
              pr-4
              text-[14px]
              outline-none
              transition
              focus:border-[#22983A]
            "
          />

        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">

          {/* Filter */}
          <button
            className="
              flex
              h-[48px]
              items-center
              gap-2
              rounded-xl
              border
              border-[#E4E7EC]
              bg-white
              px-5
              text-[14px]
              font-medium
              text-[#344054]
              transition
              hover:border-[#22983A]
            "
          >
            <SlidersHorizontal size={18} />
            Filter
          </button>

          {/* View Toggle */}
          <div
            className="
              flex
              overflow-hidden
              rounded-xl
              border
              border-[#E4E7EC]
              bg-white
            "
          >
            <button
              onClick={() => setView("grid")}
              className={`
                flex
                h-[48px]
                w-[48px]
                items-center
                justify-center
                transition
                ${
                  view === "grid"
                    ? "bg-[#22983A] text-white"
                    : "text-[#667085]"
                }
              `}
            >
              <LayoutGrid size={18} />
            </button>

            <button
              onClick={() => setView("list")}
              className={`
                flex
                h-[48px]
                w-[48px]
                items-center
                justify-center
                transition
                ${
                  view === "list"
                    ? "bg-[#22983A] text-white"
                    : "text-[#667085]"
                }
              `}
            >
              <List size={18} />
            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default ProjectToolbar;