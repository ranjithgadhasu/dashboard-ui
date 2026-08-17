import { Search, SlidersHorizontal, ChevronDown } from "lucide-react";
import "./customer.css"

const SearchToolbar = ({ search, setSearch }) => {
  return (
    <div className="flex items-center justify-between gap-5 border-b border-[#EEF2F6] px-4 py-4 searchbar-header">
      {/* Search */}
      <div className="relative flex-1">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]"
        />

        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search customer..."
          className="h-[48px] w-full rounded-2xl border border-[#E5E7EB] bg-white pl-12 pr-14 text-[14px] text-[#3F434A] placeholder:text-[#9CA3AF] outline-none transition focus:border-[#22963F] input-search"
        />

        {/* Filter Icon */}
        <button className="absolute right-4 top-1/2 -translate-y-1/2 text-[#6B7280] transition hover:text-[#22963F]">
          <SlidersHorizontal size={18} />
        </button>
      </div>

      {/* Actions */}
      <button className="flex h-[48px] items-center gap-2 rounded-2xl border border-[#E5E7EB] bg-white px-5 text-[14px] font-medium text-[#3F434A] transition hover:bg-[#F8F9FB] button-action">
        <span>Actions</span>

        <ChevronDown size={16} className="text-[#8A9099]" />
      </button>
    </div>
  );
};

export default SearchToolbar;
