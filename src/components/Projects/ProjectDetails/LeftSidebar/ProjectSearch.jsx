import { Search } from "lucide-react";

const ProjectSearch = () => {
  return (
    <div className="border-b border-[#EEF2F7] bg-white px-5 py-4">

      <div className="relative">

        <Search
          size={16}
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
          placeholder="Search..."
          className="
            h-[42px]
            w-full
            rounded-xl
            border
            border-[#E4E7EC]
            bg-[#F8FAFC]
            pl-11
            pr-4
            text-[14px]
            text-[#344054]
            placeholder:text-[#98A2B3]
            outline-none
            transition-all
            duration-200
            focus:border-[#22983A]
            focus:bg-white
          "
        />

      </div>

    </div>
  );
};

export default ProjectSearch;