import SearchBar from "./SearchBar";
import UploadButton from "./UploadButton";
import UserProfile from "./UserProfile";
import "./header.css"

const Header = ({ search, setSearch }) => {
  return (
    <header
      className="
        file-manager-two-header
        flex
        items-center
        justify-between
        h-[72px]
        px-6
        bg-white
        border-b
        border-[#EEF2F7]
      "
    >

      {/* Left - Search */}

      <div className="file-manager-two-header-search flex-1 max-w-[650px]">
        <SearchBar
          value={search}
          onChange={setSearch}
        />
      </div>


      {/* Right */}

      <div className="file-manager-two-header-actions flex items-center gap-4">

        <UploadButton />

        <UserProfile />

      </div>

    </header>
  );
};

export default Header;