import FolderCard from "./FolderCard";
import AddFolderCard from "./AddFolderCard";

import { fileManagerData } from "../data/fileManagerData";

const FolderGrid = () => {
  return (
    <div
      className="
        grid
        grid-cols-2
        gap-8
        sm:grid-cols-3
        lg:grid-cols-4
        xl:grid-cols-4
      "
    >
      {fileManagerData.folders.map((folder) => (
        <FolderCard
          key={folder.id}
          folder={folder}
        />
      ))}

      <AddFolderCard />
    </div>
  );
};

export default FolderGrid;