const ProjectBasicInfo = ({ project }) => {
  return (
    <div className="mt-6 space-y-5 px-6">

      {/* Project Name */}
      <div>

        <label
          className="
            mb-2
            block
            text-[14px]
            font-normal
            text-[#787a7e]
          "
        >
          Project Name
        </label>

        <input
          type="text"
          defaultValue={project.title}
          placeholder="Project Name"
          className="
            h-[40px]
            w-full
            rounded-xl
            border
            border-[#E4E7EC]
            bg-white
            px-4
            text-[14px]
            text-[#344054]
            outline-none
            transition
            placeholder:text-[#98A2B3]
            focus:border-[#22983A]
          "
        />

      </div>

      {/* Client Name */}
      <div>

        <label
          className="
            mb-2
            block
            text-[14px]
            font-normal
            text-[#878a91]
          "
        >
          Client Name
        </label>

        <input
          type="text"
          defaultValue={project.company}
          placeholder="Client Name"
          className="
            h-[40px]
            w-full
            rounded-xl
            border
            border-[#E4E7EC]
            bg-white
            px-4
            text-[14px]
            text-[#344054]
            outline-none
            transition
            placeholder:text-[#98A2B3]
            focus:border-[#22983A]
          "
        />

      </div>

    </div>
  );
};

export default ProjectBasicInfo;