import { useState } from "react";
import { Search, SlidersHorizontal, ChevronDown } from "lucide-react";
import FilterModal from "../FilterModal/FilterModal";
import { useEffect, useRef } from "react";
import { productsData } from "../data/productsData";


const SearchBar = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [search, setSearch] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredProducts = productsData.filter((item) =>
    item.productName.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="flex items-center justify-between gap-4 rounded-2xl border border-[#EEF2F6] bg-white p-4 products-searchbar">
      {/* Search */}
      <div ref={wrapperRef} className="relative flex-1 products-search-wrapper">
        <div className="flex items-center rounded-xl border border-[#EEF2F6] bg-white px-4 products-search-input-wrapper">
          <Search size={18} className="text-[#A9B1BA] products-search-icon" />

          <input
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setShowSuggestions(true);
            }}
            onFocus={() => setShowSuggestions(true)}
            placeholder="Search products..."
            className="h-[44px] w-full bg-transparent px-3 text-[14px] outline-none products-search-input"
          />

          <button
            onClick={() => setShowFilter(true)}
            className="text-[#8A9099] hover:text-[#22963F] products-filter-btn"
          >
            <SlidersHorizontal size={18} />
          </button>
        </div>

        {showSuggestions && search && filteredProducts.length > 0 && (
          <div className="absolute left-0 right-0 top-[52px] z-50 overflow-hidden rounded-2xl border border-[#EEF2F6] bg-white shadow-xl products-search-suggestions">
            {filteredProducts.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setSearch(item.productName);
                  setShowSuggestions(false);
                }}
                className="flex w-full items-center px-6 py-4 text-left text-[15px] text-[#3F434A] transition hover:bg-[#F5F6F8] products-search-suggestion"
              >
                {item.productName}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Actions */}

      <button className="flex h-11 items-center gap-2 rounded-xl border border-[#EEF2F6] bg-white px-5 text-[14px] font-medium text-[#3F434A] transition hover:bg-[#F8F9FA] products-actions-btn">
        <span>Actions</span>

        <ChevronDown size={16} className="text-[#8A9099] products-actions-icon" />
      </button>
      <FilterModal
        open={showFilter}
        onClose={() => setShowFilter(false)}
        onSave={(filters) => {
          console.log(filters);
        }}
      />
    </div>
  );
};

export default SearchBar;
