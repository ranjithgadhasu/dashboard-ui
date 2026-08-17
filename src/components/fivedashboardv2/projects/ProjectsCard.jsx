import { MoreHorizontal } from "lucide-react";
import ProjectsChart from "./ProjectsChart";
import { projectsData } from "./projectsData";
import "./projectcard.css"

const ProjectsCard = () => {
  return (
    <div className="rounded-[18px] border border-[#E9EEF5] bg-white p-6 projects-card">

      {/* Header */}

      <div className="mb-4 flex items-center justify-between projects-card-header">

        <h2 className="text-[20px] font-medium text-[#3F434A]">
          Projects
        </h2>

        <MoreHorizontal
          size={20}
          className="text-[#8A9099]"
        />

      </div>

      <ProjectsChart />

      {/* Footer */}

      <div className="mt-6 grid grid-cols-3 projects-card-footer">

        <div className="text-center">

          <span className="mx-auto mb-2 block  w-[6px] h-[6px] rounded-full bg-[#48C9BE]" />

          <h3 className="text-[28px] font-medium text-[#3F434A]">
            {projectsData.ongoing}
          </h3>

          <p className="text-[14px] font-normal text-[#8A9099]">
            Ongoing
          </p>

        </div>

        <div className="border-x border-[#EEF2F6] text-center">

          <span className="mx-auto w-[6px] h-[6px] mb-2 block h-2 w-2 rounded-full bg-[#22963F]" />

          <h3 className="text-[28px] font-medium text-[#3F434A]">
            {projectsData.hold}
          </h3>

          <p className="text-[14px] font-normal text-[#8A9099]">
            Hold
          </p>

        </div>

        <div className="text-center">

          <span className="mx-auto mb-2 block  w-[6px] h-[6px] rounded-full bg-[#FFC83D]" />

          <h3 className="text-[28px] font-medium text-[#3F434A]">
            {projectsData.done}
          </h3>

          <p className="text-[14px] font-normal text-[#8A9099]">
            Done
          </p>

        </div>

      </div>

    </div>
  );
};

export default ProjectsCard;