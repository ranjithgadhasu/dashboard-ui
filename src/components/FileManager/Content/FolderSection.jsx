import { useNavigate } from "react-router-dom";
import FolderGrid from "./FolderGrid";

const FolderSection = () => {
    const navigate = useNavigate();
  return (
    <section>

      {/* Section Title */}

      <div className="mb-8 flex items-center justify-between">

        <h2
          className="
            text-[28px]
            font-medium
            text-[#37393D]
          "
        >
          Folders
        </h2>
        <button onClick={()=> navigate("/file-manager-list")} className="text-[14px] text-normal hover:text-green-600 hover:border-b-1 cursor-pointer">Folder-List</button>

      </div>

      {/* Folder Grid */}

      <FolderGrid />

    </section>
  );
};

export default FolderSection;