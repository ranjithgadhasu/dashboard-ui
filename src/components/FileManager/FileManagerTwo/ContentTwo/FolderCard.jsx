import { useState } from "react";
import clsx from "clsx";

import FileMenu from "../ContentTwo/FileMenu";

const FolderCard = ({
  folder,
  onClick,
  selected,
}) => {

  const [isHovered, setIsHovered] = useState(false);

  return (

    <div
      onClick={() => onClick?.(folder)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={clsx(
        `
          group
          relative
          cursor-pointer
          rounded-2xl
          border
          border-transparent
          bg-white
          p-5
          transition-all
          duration-200
        `,
        selected
          ? "border-[#22C55E] bg-[#F3FFF6]"
          : "hover:bg-[#F8FAFC]"
      )}
    >

      {/* Menu */}

      <div
        className={`
          absolute
          right-3
          top-3
          transition
          ${
            isHovered
              ? "opacity-100"
              : "opacity-0"
          }
        `}
      >
        <FileMenu file={folder} />
      </div>

      {/* Folder Icon */}

      <div className="flex justify-center">

        <img
          src={folder.icon}
          alt={folder.name}
          className="
            h-[72px]
            w-[90px]
            object-contain
          "
        />

      </div>

      {/* Folder Name */}

      <h3
        className="
          mt-5
          text-center
          text-[15px]
          font-medium
          text-[#37393D]
        "
      >
        {folder.name}
      </h3>

      {/* Folder Size */}

      <p
        className="
          mt-1
          text-center
          text-[13px]
          text-[#98A2B3]
        "
      >
        {folder.size}
      </p>

    </div>

  );
};

export default FolderCard;