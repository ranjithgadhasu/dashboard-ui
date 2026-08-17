import { Search } from "lucide-react";

const SearchBar = ({
  value,
  onChange,
}) => {
  return (
    <div className="search-bar-mobile relative w-full max-w-[500px]">

      <Search
        size={18}
        className="
          absolute
          left-4
          top-1/2
          -translate-y-1/2
          text-[#98A2B3]
        "
      />

      <input
        type="text"
        name="search"
        placeholder="Search..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="
          search-input-mobile
          w-[861px]
          h-11
          rounded-xl
          border
          border-[#EEF2F7]
          bg-[#F8FAFC]
          pl-11
          pr-4
          text-[14px]
          outline-none
          focus:border-[#22C55E]
        "
      />

    </div>
  );
};

export default SearchBar;