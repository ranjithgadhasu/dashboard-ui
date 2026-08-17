import { Search } from "lucide-react";

const FilterSearch = ({
  value = "",
  onChange = () => {},
}) => {
  return (
    <div>

      <div className="relative">

        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-[#98A2B3]"
        />

        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search Tasks..."
          className="
            h-[40px]
            w-[340px]
            rounded-xl
            border
            border-[#E4E7EC]
            bg-white
            pl-11
            pr-4
            text-[14px]
            text-[#344054]
            placeholder:text-[#98A2B3]
            outline-none
            transition-all
            duration-200
            focus:border-[#22C55E]
            focus:ring-4
            focus:ring-[#22C55E]/10
          "
        />

      </div>

    </div>
  );
};

export default FilterSearch;