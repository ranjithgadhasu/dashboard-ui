import { Search, SlidersHorizontal, ChevronDown } from "lucide-react";

const ProjectTableToolbar = () => {
  return (
    <div className="flex items-center justify-between border-b border-[#EEF2F7] p-5">

      {/* Search */}
      <div className="relative w-full max-w-[700px]">

        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-[#98A2B3]"
        />

        <input
          type="text"
          placeholder="Search customer..."
          className="
            h-[46px]
            w-full
            rounded-xl
            border
            border-[#EEF2F7]
            bg-white
            pl-11
            pr-12
            text-[14px]
            text-[#344054]
            outline-none
            transition
            placeholder:text-[#98A2B3]
            focus:border-[#22C55E]
          "
        />

        {/* Filter Button */}
        <button
          className="
            absolute
            right-2
            top-1/2
            flex
            h-9
            w-9
            -translate-y-1/2
            items-center
            justify-center
            rounded-lg
            transition
            hover:bg-[#F8FAFC]
          "
        >
          <SlidersHorizontal
            size={17}
            className="text-[#98A2B3]"
          />
        </button>

      </div>

      {/* Actions */}
      <button
        className="
          ml-4
          flex
          h-[46px]
          items-center
          gap-2
          rounded-xl
          border
          border-[#EEF2F7]
          bg-white
          px-5
          text-[14px]
          text-[#667085]
          transition
          hover:border-[#22C55E]
        "
      >
        Actions

        <ChevronDown
          size={16}
          className="text-[#98A2B3]"
        />
      </button>

    </div>
  );
};

export default ProjectTableToolbar;