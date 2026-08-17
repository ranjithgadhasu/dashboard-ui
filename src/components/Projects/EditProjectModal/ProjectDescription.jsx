const ProjectDescription = ({ project }) => {
  return (
    <div className="mt-6 px-6">

      <label
        className="
          mb-2
          block
          text-[14px]
          font-normal
          text-[#70757e]
        "
      >
        Description
      </label>

      <textarea
        rows={5}
        defaultValue={project.description}
        placeholder="Enter project description..."
        className="
          w-full
          resize-none
          rounded-xl
          border
          border-[#E4E7EC]
          bg-white
          p-4
          text-[14px]
          leading-6
          text-[#344054]
          outline-none
          transition
          placeholder:text-[#98A2B3]
          focus:border-[#22983A]
        "
      />

    </div>
  );
};

export default ProjectDescription;