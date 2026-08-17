import { Search, SlidersHorizontal, ChevronDown } from "lucide-react"; 
import "./searchbar.css"

const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="flex items-center gap-5 orders-searchbar">
      {/* Search Box */}
      <div className="flex h-[48px] flex-1 items-center rounded-xl border border-[#E5E7EB] bg-white px-4 orders-searchbox">
        <Search
          size={20}
          strokeWidth={1.8}
          className="mr-3 text-[#9CA3AF] orders-search-icon"
        />

        <input
          type="text"
          placeholder="Search customer..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 bg-transparent text-[14px] font-medium text-[#374151] placeholder:text-[#9CA3AF] focus:outline-none orders-search-input"
        />

        <button
          type="button"
          className="ml-4 flex h-8 w-8 items-center justify-center rounded-lg transition hover:bg-[#F3F4F6] orders-filter-button"
        >
          <SlidersHorizontal
            size={18}
            className="text-[#4B5563]"
          />
        </button>
      </div>

      <button
        type="button"
        className="flex h-[48px] items-center gap-2 rounded-xl border border-[#E5E7EB] bg-white px-5 text-[14px] font-medium text-[#4B5563] orders-actions-button"
      >
        Actions
        <ChevronDown size={16} className="text-[#9CA3AF]" />
      </button>
    </div>
  );
};

export default SearchBar;