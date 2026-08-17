import { useState } from "react";
import FolderMenu from "./FolderMenu";


const FolderCard = ({ folder }) => {
  const [showMenu, setShowMenu] = useState(false);
  return (
<>
    <div
      onClick={() => setShowMenu(!showMenu)}
      className="
    group
    cursor-pointer
    rounded-[24px]
    border
    border-transparent
    p-3
    transition-all
    duration-300
    hover:bg-[#e4e2e2]
    hover:border-[#EEF2F7]
  "
    >
      {/* Folder Icon */}

      <div className="flex justify-center">
        <img
          src={folder.icon}
          alt={folder.name}
          className="
            h-20
            w-24
            object-contain
            transition-transform
            duration-300
            group-hover:scale-105
          "
        />
      </div>

      {/* Folder Name */}

      <h3
        className="
          mt-2
          text-center
          text-[15px]
          font-normal
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
          text-[12px]
          text-[#98A2B3]
        "
      >
        {folder.size}
      </p>
    </div>
    <FolderMenu open={showMenu} />
</>
  );
};

export default FolderCard;
