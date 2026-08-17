const ProjectProgress = ({ progress }) => {
  return (
    <div
      className="
        h-[8px]
        w-full
        overflow-hidden
        rounded-full
        bg-[#EEF2F7]
      "
    >
      <div
        className="
          h-full
          rounded-full
          bg-[#22C55E]
          transition-all
          duration-500
        "
        style={{
          width: `${progress}%`,
        }}
      />
    </div>
  );
};

export default ProjectProgress;