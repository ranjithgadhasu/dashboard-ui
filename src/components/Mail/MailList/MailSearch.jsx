import { Search } from "lucide-react";
import MailFilter from "./MailFilter";

const MailSearch = ({
  value = "",
  onChange,
  placeholder = "Search mail...",
}) => {
  return (
    <div className="flex w-[340px] items-center gap-3">
      {/* Search Input */}
      <div className="relative flex-1">
        <Search
          size={18}
          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#8A9099]"
        />

        <input
          type="text"
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          placeholder={placeholder}
          className="
            h-11
            w-full
            rounded-xl
            border
            border-[#E6EBF2]
            bg-[#F8F9FC]
            pl-11
            pr-4
            text-sm
            text-[#2D4058]
            placeholder:text-[#8A9099]
            outline-none
            transition-all
            duration-200
            focus:border-[#22963F]
            focus:bg-white
            focus:ring-2
            focus:ring-[#22963F]/20
          "
        />
      </div>

      {/* Filter */}
      <MailFilter />
    </div>
  );
};

export default MailSearch;