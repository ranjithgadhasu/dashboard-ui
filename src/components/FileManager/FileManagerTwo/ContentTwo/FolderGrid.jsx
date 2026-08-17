import { useState } from "react";

import FolderCard from "./FolderCard";
import { folderData } from "./folderData";

const FolderGrid = () => {

  const [selectedFolder, setSelectedFolder] = useState(null);

  const handleFolderClick = (folder) => {
    setSelectedFolder(folder.id);
  };

  return (

    <div
      className="
        p-6
        grid
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        xl:grid-cols-5
        gap-6
      "
    >

      {folderData.map((folder) => (

        <FolderCard
          key={folder.id}
          folder={folder}
          selected={selectedFolder === folder.id}
          onClick={() => handleFolderClick(folder)}
        />

      ))}

    </div>

  );

};

export default FolderGrid;