import { Search, ChevronDown } from "lucide-react";
import FilterIcon from "../../assets/images/Filter.png";
import "./ContactTable.css"

const ContactSearch = ({ search, setSearch }) => {
  return (
    <div className="flex items-center justify-between border-b border-[#ECECEC] bg-white p-4">

      {/* Left */}
      <div className="flex items-center rounded-xl border border-[#E5E7EB] overflow-hidden ">

        {/* Search */}
        <div className="relative w-[869px] ">
          <Search
            size={16}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]"
          />

          <input
            type="text"
             value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search contact..."
            className="
              h-[40px]
              w-full
              border-none
              bg-white
              pl-11
              pr-4
              text-[14px]
              text-[#40434E]
              outline-none
              placeholder:text-[#A1A7B3]
            "
          />
        </div>

        {/* Divider */}
        <div className="h-[46px] bg-[#E5E7EB]" />

        {/* Filter */}
        <button
          className="
            flex
            h-[46px]
            w-[54px]
            items-center
            justify-center
            bg-white
            hover:bg-[#F8F8F8]
            transition
          "
        >
          <img
            src={FilterIcon}
            alt="Filter"
            className="h-4 w-4"
          />
        </button>
      </div>

      {/* Actions */}
      <button
        className="
        search-gap-here
          flex
          h-[46px]
          items-center
          gap-2
          rounded-xl
          px-5
          text-[14px]
          font-medium
          border-1
         border-[#ECECEC]
          text-[#555]
          hover:bg-[#f7f0f0]
          transition
        "
      >
        Actions
        <ChevronDown size={16} />
      </button>

    </div>
  );
};

export default ContactSearch;