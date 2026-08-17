const ProjectFooter = ({
  onSave,
}) => {
  return (
    <div
      className="
        mt-8
        flex
        items-center
        justify-end
        gap-3
        border-t
        border-[#EEF2F7]
        px-6
        py-5
      "
    >

      {/* Save */}

      <button
        onClick={onSave}
        className="
          h-[40px]
          rounded-xl
          bg-[#22983A]
          px-8
          text-[15px]
          font-semibold
          text-white
          shadow-sm
          transition
          hover:bg-[#1C7F31]
        "
      >
        Save
      </button>

    </div>
  );
};

export default ProjectFooter;