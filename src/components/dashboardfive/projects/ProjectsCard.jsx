import { MoreHorizontal } from "lucide-react";
import ProjectsChart from "./ProjectsChart";
import "./project.css"


const ProjectsCard = () => {
  return (
    <div className="rounded-[20px] border border-[#E9EEF5] bg-white p-6 projects-card-mobile">

      {/* Header */}

      <div className="mb-4 flex items-center justify-between projects-card-header">

        <h2 className="text-[20px] font-medium text-[#3F434A]">
          Projects
        </h2>
        <MoreHorizontal
          size={22}
          className="text-[#8A9099]"
        />

      </div>

      <ProjectsChart />

      {/* Bottom */}

      <div className="mt-4 grid grid-cols-3 projects-card-bottom">

        <div className="text-center projects-card-item">

          <span className="mb-1 inline-block h-[6px] w-[6px] rounded-full bg-[#48C9BE] bg-[#48C9BE]" />

          <h3 className="text-[28px] font-medium text-[#3F434A]">
            420
          </h3>

          <p className="text-[14px] font-normal text-[#8A9099]">
            Ongoing
          </p>

        </div>

        <div className="border-x border-[#EEF2F6] text-center projects-card-item">

          <span className="mb-1 inline-block h-[6px] w-[6px] rounded-full bg-[#22963F]" />

          <h3 className="text-[28px] font-medium text-[#3F434A]">
            210
          </h3>

          <p className="text-[14px] font-normal text-[#8A9099]">
            Hold
          </p>

        </div>

        <div className="text-center projects-card-item">

          <span className="mb-1 inline-block h-[6px] w-[6px] rounded-full bg-[#FFC83D]" />

          <h3 className="text-[28px] font-medium text-[#3F434A]">
            200
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