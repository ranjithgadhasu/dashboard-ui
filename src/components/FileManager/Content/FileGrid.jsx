import FileCard from "./FileCard";
import { fileManagerData } from "../data/fileManagerData";

const FileGrid = () => {
  return (
    <div
      className="
        grid
        gap-6
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
      "
    >
      {fileManagerData.files.map((file) => (
        <FileCard
          key={file.id}
          file={file}
        />
      ))}
    </div>
  );
};

export default FileGrid;