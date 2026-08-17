import { useState } from "react";

import { ChevronRight, ChevronDown, Folder } from "lucide-react";

import StorageCard from "./StorageCard";
import TrashItem from "./TrashItem";

import { fileManagerData } from "../data/fileManagerData";

const FolderSidebar = () => {
  const [openFolders, setOpenFolders] = useState({
    2: true,
  });

  const toggleFolder = (id) => {
    setOpenFolders((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <aside
      className="
        folder-sidebar-mobile
        flex
        h-full
        w-[260px]
        flex-col
        border-r
        border-[#EEF2F7]
        bg-white
      "
    >
      {/* Title */}

      <div className="px-8 pt-6">
        <h3
          className="
            text-[12px]
            font-semibold
            uppercase
            tracking-wider
            text-[#98A2B3]
          "
        >
          Folders
        </h3>
      </div>

      {/* Folder Tree */}

      <div className="folder-tree-mobile mt-2 flex-1 overflow-y-auto">
        {fileManagerData.foldersTree.map((folder) => (
          <div key={folder.id}>
            {/* Parent */}

            <div
              onClick={() => folder.children.length && toggleFolder(folder.id)}
              className="
                flex
                cursor-pointer
                items-center
                justify-between
                px-8
                py-2
                transition
                hover:bg-[#F8FAFC]
              "
            >
              <div className="flex items-center gap-3">
                <Folder size={18} fill="#FFD188" color="#FFD188" />

                <span
                  className="
                    text-[15px]
                    font-normal
                    text-[#37393D]
                  "
                >
                  {folder.name}
                </span>
              </div>

              {folder.children.length > 0 &&
                (openFolders[folder.id] ? (
                  <ChevronDown size={16} className="text-[#98A2B3]" />
                ) : (
                  <ChevronRight size={16} className="text-[#98A2B3]" />
                ))}
            </div>

            {/* Children */}

            {openFolders[folder.id] && (
              <div
                className="
                  ml-10
                  border-l
                  border-dashed
                  border-[#D8DEE9]
                  pl-6
                "
              >
                {folder.children.map((child) => (
                  <div
                    key={child.id}
                    className="
                      flex
                      items-center
                      gap-3
                      py-3
                    "
                  >
                    <Folder size={16} fill="#FFD188" color="#FFD188" />

                    <span
                      className="
                        text-[14px]
                        text-[#5E6673]
                      "
                    >
                      {child.name}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Trash */}

      <TrashItem />

      {/* Storage */}

      <StorageCard />
    </aside>
  );
};

export default FolderSidebar;
