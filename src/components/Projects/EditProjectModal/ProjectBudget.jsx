import { DollarSign } from "lucide-react";

const ProjectBudget = ({ project }) => {
  return (
    <div className="mt-6 px-6">

      <label
        className="
          mb-2
          block
          text-[14px]
          font-normal
          text-[#72757c]
        "
      >
        Budget
      </label>

      <div
        className="
          flex
          h-[40px]
          items-center
          rounded-xl
          border
          border-[#E4E7EC]
          bg-white
          px-4
          transition
          focus-within:border-[#22983A]
        "
      >
        <DollarSign
          size={17}
          className="text-[#98A2B3]"
        />

        <input
          type="text"
          defaultValue={project.budget}
          placeholder="$ 2,500.000"
          className="
            ml-2
            h-full
            w-full
            border-none
            bg-transparent
            text-[14px]
            text-[#344054]
            outline-none
            placeholder:text-[#98A2B3]
          "
        />
      </div>

    </div>
  );
};

export default ProjectBudget;