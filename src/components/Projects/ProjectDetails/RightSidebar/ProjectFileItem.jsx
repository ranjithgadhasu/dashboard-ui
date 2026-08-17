import { Download } from "lucide-react";

const ProjectFileItem = ({ file }) => {
  return (
    <div
      className="
        flex
        items-center
        justify-between
        rounded-xl
        px-2
        py-2
        transition-all
        duration-200
        hover:bg-[#F8FAFC]
      "
    >
      {/* Left */}
      <div className="flex items-center gap-4 min-w-0">

        {/* File Icon */}
        <img
          src={file.icon}
          alt={file.name}
          className="
            h-[44px]
            w-[44px]
            flex-shrink-0
            object-contain
          "
        />

        {/* File Info */}
        <div className="min-w-0">

          <h4
            className="
              max-w-[170px]
              truncate
              text-[15px]
              font-medium
              text-[#344054]
            "
          >
            {file.name}
          </h4>

          <p
            className="
              mt-1
              text-[14px]
              text-[#98A2B3]
            "
          >
            {file.size}
          </p>

        </div>

      </div>

      {/* Download */}
      <button
        className="
          flex
          h-9
          w-9
          items-center
          justify-center
          rounded-full
          text-[#98A2B3]
          transition
          hover:bg-[#F3F4F6]
          hover:text-[#22983A]
        "
      >
        <Download size={20} />
      </button>
    </div>
  );
};

export default ProjectFileItem;