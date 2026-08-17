import { Search } from "lucide-react";

const SearchInput = ({ placeholder }) => {
  return (
    <div className="relative w-full">

      <Search
        size={18}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
      />

      <input
        type="text"
        placeholder={placeholder}
        className="w-full h-11 pl-11 pr-4 rounded-lg border border-gray-200 bg-white text-sm outline-none focus:border-green-500"
      />

    </div>
  );
};

export default SearchInput;