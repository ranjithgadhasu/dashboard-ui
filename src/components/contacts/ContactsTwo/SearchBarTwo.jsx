import { Search } from "lucide-react"; 
import "./searchbartwo.css"

const SearchBarTwo = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="relative w-full max-w-md search-bar-width">

      {/* Search Icon */}

      <Search
        size={18}
        className="
          absolute
          left-4
          top-1/2
          -translate-y-1/2
          text-gray-400
          search-icon-mobile
        "
      />

      {/* Input */}

      <input
        type="text"
        name="search-bar"
        placeholder="Search contacts..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="
          search-input-two

          h-[40px]

          w-[1138px]

          rounded-xl

          border
          border-gray-200

          bg-white

          pl-11
          pr-4

          text-sm
          text-gray-700

          placeholder:text-gray-400

          outline-none

          transition-all
          duration-200

          focus:border-green-500

          focus:ring-2
          focus:ring-green-100
        "
      />

    </div>
  );
};

export default SearchBarTwo;