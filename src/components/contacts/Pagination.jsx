import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  ChevronDown,
} from "lucide-react";

const Pagination = () => {
  return (
    <div className="flex items-center justify-between border-t border-[#ECECEC] bg-white px-6 py-4">
      {/* Left */}
      <div className="flex items-center gap-5">
        {/* Rows Per Page */}
        <button
          className="
            flex
            items-center
            gap-2
            rounded-lg
            border
            border-[#E5E7EB]
            bg-white
            px-4
            py-2
            text-sm
            font-medium
            text-[#3F4149]
            hover:bg-[#F8F8F8]
          "
        >
          10
          <ChevronDown size={16} />
        </button>

        {/* Records */}
        <p className="text-sm text-[#8A8F99]">
          Showing <span className="font-medium text-[#3F4149]">1-10</span> of{" "}
          <span className="font-medium text-[#3F4149]">100</span>
        </p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-2">
        {/* First */}
        <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#E5E7EB] hover:bg-[#F8F8F8]">
          <ChevronsLeft size={16} />
        </button>

        {/* Previous */}
        <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#E5E7EB] hover:bg-[#F8F8F8]">
          <ChevronLeft size={16} />
        </button>

        {/* Page Numbers */}
        <button className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#23963D] text-sm font-semibold text-white">
          1
        </button>

        <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#E5E7EB] text-sm text-[#3F4149] hover:bg-[#F8F8F8]">
          2
        </button>

        <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#E5E7EB] text-sm text-[#3F4149] hover:bg-[#F8F8F8]">
          3
        </button>

        {/* Next */}
        <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#E5E7EB] hover:bg-[#F8F8F8]">
          <ChevronRight size={16} />
        </button>

        {/* Last */}
        <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#E5E7EB] hover:bg-[#F8F8F8]">
          <ChevronsRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default Pagination;