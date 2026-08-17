import { Search, SlidersHorizontal } from "lucide-react"; 
import "./filetoolbar.css"
const SearchBar = ({ value, onChange }) => {
  return (
    <div
      className="
        search-bar-mobile
        flex
        items-center
        rounded-2xl
        border
        border-[#EEF2F7]
        bg-[(hsla(0, 0%, 97%, 1))]
        px-5
        shadow-sm
      "
    >
      {/* Search Icon */}

      <Search
        size={20}
        className="text-[#98A2B3] search-bar-icon"
      />

      {/* Input */}

      <input
        value={value}
        name="search"
        onChange={(e) => onChange(e.target.value)}
        type="text"
        placeholder="Search files, folders..."
        className="
          search-bar-input
          ml-4
          border-none
          bg-transparent
          text-[15px]
          text-[#344054]
          outline-none
          placeholder:text-[#98A2B3]
        "
      />

      {/* Divider */}

      <div className="search-bar-divider mx-4 ml-76 h-6 w-px bg-[#EEF2F7]" />

      {/* Filter Button */}

      <button
        type="button"
        className="
          search-bar-filter
          flex
          h-[40px]
          w-[111px]
          items-center
          justify-center
          rounded-xl
          transition
          hover:bg-[#F8FAFC]
        "
      >
        <SlidersHorizontal
          size={18}
          className="text-[#667085]"
        />
      </button>
    </div>
  );
};

export default SearchBar;