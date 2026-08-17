import { ChevronLeft, ChevronRight } from "lucide-react";

const ProjectPagination = () => {
  return (
    <div
      className="
        flex
        items-center
        justify-between
        border-t
        border-[#EEF2F7]
        bg-white
        px-6
        py-5
      "
    >
      {/* Left */}
      <div className="flex items-center gap-3">

        <span className="text-[14px] text-[#667085]">
          Rows per page
        </span>

        <select
          className="
            rounded-lg
            border
            border-[#EEF2F7]
            bg-white
            px-3
            py-2
            text-[14px]
            text-[#344054]
            outline-none
          "
        >
          <option>10</option>
          <option>20</option>
          <option>50</option>
          <option>100</option>
        </select>

        <span className="text-[14px] text-[#98A2B3]">
          Showing 1-10 of 100
        </span>

      </div>

      {/* Right */}
      <div className="flex items-center gap-2">

        {/* Previous */}
        <button
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-xl
            border
            border-[#EEF2F7]
            bg-white
            text-[#98A2B3]
            transition
            hover:bg-[#F8FAFC]
          "
        >
          <ChevronLeft size={18} />
        </button>

        {/* Pages */}
        {[1, 2, 3, 4, 5].map((page) => (
          <button
            key={page}
            className={`
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              text-[14px]
              font-medium
              transition
              ${
                page === 1
                  ? "bg-[#22C55E] text-white"
                  : "text-[#667085] hover:bg-[#F8FAFC]"
              }
            `}
          >
            {page}
          </button>
        ))}

        {/* Next */}
        <button
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-xl
            border
            border-[#EEF2F7]
            bg-white
            text-[#98A2B3]
            transition
            hover:bg-[#F8FAFC]
          "
        >
          <ChevronRight size={18} />
        </button>

      </div>
    </div>
  );
};

export default ProjectPagination;