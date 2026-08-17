import { Search, Check, Layers3 } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    id: 1,
    name: "Design Plans",
    active: true,
    versions: [
      "Task Board V.2",
      "Task Board V.3",
    ],
  },
  {
    id: 2,
    name: "Wireframe UI Kit",
  },
  {
    id: 3,
    name: "Admin Dashboard",
  },
  {
    id: 4,
    name: "Sochi – Hotel Booking",
  },
];


const ProjectDropdown = () => {
  const [search, setSearch] = useState("");

  const filteredProjects = projects.filter((project) =>
    project.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      className="
        absolute
        left-0
        top-14
        z-50
        w-[300px]
        overflow-hidden
        rounded-3xl
        border
        border-[#EEF2F7]
        bg-white
        shadow-[0_20px_50px_rgba(16,24,40,0.12)]
      "
    >
      {/* Header */}
      <div className="px-6 pt-6">

        <h3 className="text-[20px] font-semibold text-[#344054]">
          Projects
        </h3>

        {/* Search */}
        <div className="relative mt-4">

          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#98A2B3]"
          />

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Project..."
            className="
              h-12
              w-full
              rounded-2xl
              bg-[#F7F8FA]
              pl-11
              pr-4
              text-[14px]
              outline-none
              placeholder:text-[#98A2B3]
            "
          />

        </div>

      </div>

      {/* Project List */}
      <div className="mt-5 pb-5">

        {filteredProjects.map((project) => (
          <button
            key={project.id}
            className="
              flex
              w-full
              items-center
              justify-between
              px-6
              py-3
              text-left
              transition
              hover:bg-[#F8FAFC]
            "
          >
            <div className="flex items-center gap-3">

              <Layers3
                size={18}
                className="text-[#98A2B3]"
              />

              <span className="text-[17px] text-[#344054]">
                {project.name}
              </span>

            </div>

            {project.active && (
              <Check
                size={20}
                className="text-[#22C55E]"
              />
            )}

          </button>
        ))}

      </div>
    </div>
  );
};

export default ProjectDropdown;