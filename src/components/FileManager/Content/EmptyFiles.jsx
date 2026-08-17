import { FolderOpen, Upload } from "lucide-react";

const EmptyFiles = () => {
  return (
    <div
      className="
        flex
        min-h-[420px]
        flex-col
        items-center
        justify-center
        rounded-3xl
        border-2
        border-dashed
        border-[#E6EBF2]
        bg-white
        px-8
        text-center
      "
    >
      {/* Icon */}

      <div
        className="
          flex
          h-24
          w-24
          items-center
          justify-center
          rounded-full
          bg-[#F5F7FA]
        "
      >
        <FolderOpen
          size={42}
          className="text-[#98A2B3]"
        />
      </div>

      {/* Title */}

      <h2
        className="
          mt-8
          text-[28px]
          font-semibold
          text-[#37393D]
        "
      >
        No Files Found
      </h2>

      {/* Description */}

      <p
        className="
          mt-3
          max-w-[420px]
          text-[15px]
          leading-7
          text-[#98A2B3]
        "
      >
        This folder doesn't contain any files yet.
        Upload a file or create a new one to get started.
      </p>

      {/* Upload Button */}

      <button
        className="
          mt-8
          flex
          items-center
          gap-2
          rounded-xl
          bg-[#22C55E]
          px-6
          py-3
          text-[15px]
          font-semibold
          text-white
          transition-all
          duration-300
          hover:bg-[#16A34A]
        "
      >
        <Upload size={18} />

        Upload File
      </button>
    </div>
  );
};

export default EmptyFiles;