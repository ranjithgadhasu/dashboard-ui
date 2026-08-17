import { Search } from "lucide-react";
import { useState } from "react";

const ProjectSearch = ({ placeholder = "Search projects...", onSearch }) => {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    onSearch?.(value);
  };

  return (
    <div className="relative w-full">

      {/* Search Icon */}
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

      {/* Input */}
      <input
        type="text"
        value={search}
        onChange={handleChange}
        placeholder={placeholder}
        className="
          h-[48px]
          w-full
          rounded-xl
          border
          border-[#E4E7EC]
          bg-white
          py-3
          pl-11
          pr-4
          text-[14px]
          text-[#344054]
          placeholder:text-[#98A2B3]
          outline-none
          transition-all
          duration-200
          focus:border-[#22983A]
          focus:ring-4
          focus:ring-[#22983A]/10
        "
      />

    </div>
  );
};

export default ProjectSearch;