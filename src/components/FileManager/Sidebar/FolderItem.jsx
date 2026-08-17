import {
  ChevronDown,
  ChevronRight,
  Folder,
} from "lucide-react";

import FolderChildren from "./FolderChildren";

const FolderItem = ({
  folder,
  onToggle,
}) => {

  return (

    <div>

      <div
        onClick={() => onToggle(folder.id)}
        className="
          flex
          cursor-pointer
          items-center
          justify-between
          px-8
          py-4
          hover:bg-[#F8FAFC]
        "
      >

        <div className="flex items-center gap-3">

          <Folder
            size={18}
            fill="#FFD188"
            color="#FFD188"
          />

          <span
            className="
              text-[16px]
              font-medium
              text-[#344054]
            "
          >
            {folder.name}
          </span>

        </div>

        {folder.expanded ? (

          <ChevronDown
            size={18}
            className="text-[#98A2B3]"
          />

        ) : (

          <ChevronRight
            size={18}
            className="text-[#98A2B3]"
          />

        )}

      </div>

      {folder.expanded &&
        folder.children.length > 0 && (

          <FolderChildren
            children={folder.children}
          />

      )}

    </div>

  );

};

export default FolderItem;