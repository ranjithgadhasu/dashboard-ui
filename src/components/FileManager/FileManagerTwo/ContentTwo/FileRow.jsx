import { useState } from "react";
import FileActionMenu from "./FileActionMenu";
import FileMenu from "./FileMenu";
import FileCheckbox from "./FileCheckbox";
import "./filerow.css"

const FileRow = ({
  file,
  checked,
  onToggle,
}) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div
      className="
        file-row-mobile
        grid
        grid-cols-[60px_2fr_1fr_120px_120px_60px]
        items-center
        px-6
        py-4
        border-b
        border-[#EEF2F7]
        transition-all
        duration-200
        hover:bg-[#F8FAFC]
      "
    >

      {/* Checkbox */}

      <div className="file-row-checkbox-mobile">
        <FileCheckbox
          checked={checked}
          onChange={onToggle}
        />
      </div>


      {/* File */}

      <div className="file-row-file-mobile flex items-center gap-4">

        <img
          src={file.icon}
          alt={file.name}
          className="
            file-row-icon-mobile
            w-10
            h-10
            object-contain
          "
        />

        <div className="file-row-name-mobile">

          <h3
            className="
              text-[15px]
              font-normal
              text-[#37393D]
            "
          >
            {file.name}
          </h3>

        </div>

      </div>


      {/* Date */}

      <span
        className="
          file-row-date-mobile
          text-[15px]
          font-normal
          text-[#5E6673]
        "
      >
        {file.modified}
      </span>


      {/* Size */}

      <span
        className="
          file-row-size-mobile
          text-[14px]
          text-[#5E6673]
        "
      >
        {file.size}
      </span>


      {/* Owner */}

      <div className="file-row-owner-mobile flex items-center">

        <img
          src={file.owner}
          alt="owner"
          className="
            file-row-owner-image-mobile
            w-9
            h-9
            rounded-full
            object-cover
          "
        />

      </div>


      {/* Menu */}

      <div className="file-row-menu-mobile relative flex items-center justify-center">

        <FileMenu
          file={file}
          onClick={() => setShowMenu((prev) => !prev)}
          onAction={(action, selectedFile) => {
            console.log(action, selectedFile);
          }}
        />

        <FileActionMenu
          open={showMenu}
          onClose={() => setShowMenu(false)}
        />
      </div>
    </div>
  );
};
export default FileRow;