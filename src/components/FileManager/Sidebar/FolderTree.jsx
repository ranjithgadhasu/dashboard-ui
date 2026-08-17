import { useState } from "react";
import FolderItem from "./FolderItem";
import { fileManagerData } from "../data/fileManagerData";

const FolderTree = () => {

  const [folders, setFolders] = useState(fileManagerData.foldersTree);

  const toggleFolder = (id) => {

    setFolders((prev) =>
      prev.map((folder) =>
        folder.id === id
          ? {
              ...folder,
              expanded: !folder.expanded,
            }
          : folder
      )
    );

  };

  return (

    <div className="flex-1 overflow-y-auto">

      {folders.map((folder) => (

        <FolderItem
          key={folder.id}
          folder={folder}
          onToggle={toggleFolder}
        />

      ))}

    </div>

  );

};

export default FolderTree;