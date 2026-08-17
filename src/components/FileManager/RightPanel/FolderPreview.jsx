import FolderInfo from "./FolderInfo";
import FolderSettings from "./FolderSettings";
import { fileManagerData } from "../data/fileManagerData";

const FolderPreview = () => {
  const { selectedFolder } = fileManagerData;

  return (
 <aside
  className="
    w-[319px]
    h-screen
    border-l
    border-[#EEF2F7]
    bg-white
    overflow-y-auto
    flex
    flex-col
  "
>
      <div className="px-7 pt-10">

        {/* Folder Icon */}

        <div className="flex justify-center">
          <img
            src={selectedFolder.icon}
            alt={selectedFolder.name}
            className="w-[110px] h-[90px] object-contain"
          />
        </div>

        {/* Folder Name */}

        <h2 className="mt-4 text-center text-[20px] font-medium text-[#37393D]">
          {selectedFolder.name}
        </h2>

        {/* Info */}

        <FolderInfo />

        {/* Settings */}

  <div className="mb-30">
          <FolderSettings/>
  </div>

      </div>
    </aside>
  );
};

export default FolderPreview;