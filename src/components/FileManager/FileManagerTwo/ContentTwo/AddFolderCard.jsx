import { Plus } from "lucide-react";

const AddFolderCard = ({
  title = "New Folder",
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="
        group
        flex
        min-h-[185px]
        w-full
        flex-col
        items-center
        justify-center
        rounded-2xl
        border-2
        border-dashed
        border-[#D0D5DD]
        bg-white
        transition-all
        duration-200
        hover:border-[#22C55E]
        hover:bg-[#F7FFF8]
      "
    >
      {/* Plus Icon */}

      <div
        className="
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          bg-[#F4F6F8]
          transition-all
          duration-200
          group-hover:bg-[#22C55E]
        "
      >
        <Plus
          size={28}
          className="
            text-[#98A2B3]
            group-hover:text-white
          "
        />
      </div>

      {/* Title */}

      <h3
        className="
          mt-5
          text-[16px]
          font-semibold
          text-[#37393D]
        "
      >
        {title}
      </h3>

      {/* Description */}

      <p
        className="
          mt-2
          text-center
          text-[13px]
          text-[#98A2B3]
        "
      >
        Create a new folder
      </p>
    </button>
  );
};

export default AddFolderCard;