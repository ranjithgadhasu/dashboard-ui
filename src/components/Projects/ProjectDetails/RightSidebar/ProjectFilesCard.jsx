import { Plus } from "lucide-react";
import ProjectFileItem from "./ProjectFileItem";

const ProjectFilesCard = ({ project }) => {
  return (
    <div className="mt-8">

      <div className="mb-6 flex items-center justify-between">

        <h3 className="text-[14px] font-semibold uppercase tracking-wide text-[#667085]">
          FILES
        </h3>

        <button
          className="
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            bg-[#F8FAFC]
            hover:bg-[#22983A]
            hover:text-white
          "
        >
          <Plus size={18} />
        </button>

      </div>

      <div className="space-y-5">

        {project?.files?.map((file) => (
          <ProjectFileItem
            key={file.id}
            file={file}
          />
        ))}

      </div>

    </div>
  );
};

export default ProjectFilesCard;