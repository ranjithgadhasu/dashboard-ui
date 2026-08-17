import { useState } from "react";
import FileRow from "./FileRow";
import FileCheckbox from "./FileCheckbox";
import { fileListData } from "../data/fileListData";
import "./Filelist.css";

const FileList = ({ search }) => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const toggleFile = (id) => {
    setSelectedFiles((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id],
    );
  };

  const toggleAll = () => {
    if (selectedFiles.length === fileListData.length) {
      setSelectedFiles([]);
    } else {
      setSelectedFiles(fileListData.map((item) => item.id));
    }
  };

  const filteredFiles = fileListData.filter((file) =>
    file.name.toLowerCase().includes((search || "").toLowerCase()),
  );

  return (
    <div className="file-list-mobile bg-white rounded-2xl">
      {/* Mobile horizontal scroll container */}
      <div className="file-list-mobile-scroll">
        {/* Header */}
        <div
          className="
            file-list-header-mobile
            grid
            grid-cols-[60px_2fr_1fr_120px_120px_60px]
            items-center
            px-6
            py-4
            border-b
            border-[#EEF2F7]
          "
        >
          <FileCheckbox
            checked={
              selectedFiles.length === fileListData.length &&
              fileListData.length > 0
            }
            onChange={toggleAll}
          />

          <span className="text-sm font-medium text-[#98A2B3] text-name">
            Name
          </span>

          <span className="text-sm font-medium text-[#98A2B3] text-date">
            Date Modified
          </span>

          <span className="text-sm font-medium text-[#98A2B3] text-size">
            Size
          </span>

          <span className="text-sm font-medium text-[#98A2B3]">
            Owner
          </span>

          <span></span>
        </div>


        {/* Rows */}

        <div className="file-list-rows-mobile">

          {filteredFiles.map((file) => (
            <FileRow
              key={file.id}
              file={file}
              checked={selectedFiles.includes(file.id)}
              onToggle={() => toggleFile(file.id)}
            />
          ))}

        </div>

      </div>

    </div>
  );
};

export default FileList;