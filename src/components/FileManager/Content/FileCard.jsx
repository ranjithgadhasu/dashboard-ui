const FileCard = ({ file }) => {
  return (
    <div
      className="
        group
        flex
        cursor-pointer
        flex-col
        items-center
        rounded-2xl
        p-2
        transition-all
        duration-200
        hover:bg-[#F7F7F7]
      "
    >
      {/* File Icon */}

      <img
        src={file.icon}
        alt={file.name}
        className="
          h-[78px]
          w-[60px]
          object-contain
          transition-transform
          duration-200
          group-hover:scale-105
        "
      />

      {/* File Name */}

      <h3
        className="
          mt-2
          w-full
          truncate
          text-center
          text-[15px]
          font-normal
          text-[#37393D]
        "
      >
        {file.name}
      </h3>

      {/* File Size */}

      <p
        className="
          mt-1
          text-center
          text-[12px]
          text-[#98A2B3]
        "
      >
        {file.size}
      </p>
    </div>
  );
};

export default FileCard;