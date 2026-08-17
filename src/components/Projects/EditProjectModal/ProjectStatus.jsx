import { ChevronDown } from "lucide-react";

const ProjectStatus = ({ project }) => {
  return (
    <div className="mt-6 px-6">

      <label
        className="
          mb-2
          block
          text-[14px]
          font-normal
          text-[#6e7074]
        "
      >
        Status
      </label>

      <div className="relative">

        <select
          defaultValue={project.status}
          className="
            h-[40px]
            w-full
            appearance-none
            rounded-xl
            border
            border-[#E4E7EC]
            bg-white
            px-4
            pr-10
            text-[14px]
            text-[#344054]
            outline-none
            transition
            focus:border-[#22983A]
          "
        >
          <option value="Started">
            Started
          </option>

          <option value="In Progress">
            In Progress
          </option>

          <option value="On Hold">
            On Hold
          </option>

          <option value="Completed">
            Completed
          </option>
        </select>

        <ChevronDown
          size={18}
          className="
            pointer-events-none
            absolute
            right-4
            top-1/2
            -translate-y-1/2
            text-[#98A2B3]
          "
        />

      </div>

    </div>
  );
};

export default ProjectStatus;              