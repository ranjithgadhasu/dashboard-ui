import SearchBar from "./SearchBar";
import UploadButton from "./UploadButton";


const FileToolbar = () => {
  return (
    <div
      className="
        file-toolbar-mobile
        mb-8
        flex
        items-center
        justify-between
        gap-6
      "
    >
      {/* Search */}

      <div className="flex-1 file-search-mobile">
        <SearchBar />
      </div>

      {/* Upload */}

      <UploadButton />
    </div>
  );
};

export default FileToolbar;