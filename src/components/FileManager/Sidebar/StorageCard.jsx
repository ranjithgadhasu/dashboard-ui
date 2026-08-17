import { fileManagerData } from "../data/fileManagerData";

const StorageCard = () => {
  const { storage } = fileManagerData;

  return (
    <div
      className="
        bg-white
        p-6
      "
    >
      {/* Header */}

      <div className="flex items-center justify-between">

        <h3
          className="
            text-[15px]
            font-normal
            text-[#37393D]
          "
        >
          Storage
        </h3>

        <span
          className="
            text-[14px]
            font-medium
            text-[#98A2B3]
          "
        >
          {storage.used}%
        </span>

      </div>

      {/* Progress */}

      <div
        className="
          mt-5
          h-[6px]
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
          "
          style={{
            width: `${storage.used}%`,
          }}
        />
      </div>
    </div>
  );
};

export default StorageCard;