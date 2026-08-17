import { Search, Plus } from "lucide-react";

const SearchBar = ({ searchTerm = "", setSearchTerm = () => {} }) => {
  return (
    <div className="flex items-center justify-between gap-4 mb-6">

      {/* Search Input */}
      <div className="relative flex-1">

        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          type="text"
          placeholder="Search contacts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="
            w-full
            h-11
            pl-11
            pr-4
            rounded-xl
            border
            border-gray-200
            bg-white
            text-sm
            text-gray-700
            placeholder:text-gray-400
            outline-none
            focus:border-green-500
            focus:ring-2
            focus:ring-green-100
          "
        />

      </div>

      {/* Add Contact Button */}
      <button
        className="
          flex
          items-center
          gap-2
          px-5
          h-11
          rounded-xl
          bg-[#22C55E]
          text-white
          text-sm
          font-medium
          hover:bg-[#16A34A]
          transition
        "
      >
        <Plus size={18} />
        Add Contact
      </button>

    </div>
  );
};
export default SearchBar;