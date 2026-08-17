import { MoreVertical } from "lucide-react";

const UploadHeader = ({
  totalFiles = 8,
}) => {
  return (
    <div
      className="
        flex
        h-[120px]
        overflow-hidden
        rounded-t-[5px]
      "
    >
      {/* Left */}

      <div
        className="
          flex
          flex-1
          items-center
          bg-[#23963C]
          px-10
        "
      >
        <h2
          className="
            text-[20px]
            font-semibold
            text-white
          "
        >
          Uploading {totalFiles} files
        </h2>
      </div>

      {/* Right */}

      <div
        className="
          flex
          w-[110px]
          items-center
          justify-center
          bg-[#44474F]
        "
      >
        <button
          className="
            rounded-xl
            p-3
            transition
            hover:bg-white/10
          "
        >
          <MoreVertical
            size={28}
            className="text-white"
          />
        </button>
      </div>
    </div>
  );
};

export default UploadHeader;