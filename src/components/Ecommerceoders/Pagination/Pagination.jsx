import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import "./pagination.css"

const Pagination = ({
  currentPage = 1,
  totalPages = 5,
  totalItems = 100,
  itemsPerPage = 10,
  onPageChange,
  onItemsPerPageChange,
}) => {
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  return (
    <div className="flex flex-col gap-5 rounded-b-2xl border-t-2xl border-[#EEF2F6] bg-white px-8 py-6 md:flex-row md:items-center md:justify-between products-pagination">

      {/* Left */}

      <div className="flex items-center gap-6 products-pagination-left">

        <select
          value={itemsPerPage}
          onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
          className="h-12 rounded-2xl border border-[#E5E7EB] bg-white px-5 text-[15px] text-[#3F434A] outline-none products-pagination-select"
        >
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={30}>30</option>
          <option value={50}>50</option>
        </select>

        <p className="text-[15px] font-normal text-[#8A9099] products-pagination-text">
          Showing {startItem} - {endItem} of {totalItems}
        </p>

      </div>

      {/* Right */}

      <div className="flex items-center gap-2 products-pagination-controls">

        <button className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F7F8FA] text-[#8A9099] pagination-button">
          <ChevronsLeft size={18} />
        </button>

        <button className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F7F8FA] text-[#8A9099] pagination-button">
          <ChevronLeft size={18} />
        </button>

        {[1, 2, 3].map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`flex h-11 w-11 items-center justify-center rounded-xl text-[15px] font-normal transition ${
              currentPage === page
                ? "bg-[#22A447] text-white"
                : "text-[#3F434A] hover:bg-[#F7F8FA]"
            }`}
          >
            {page}
          </button>
        ))}

        <span className="px-2 text-[#8A9099] pagination-dots">...</span>

        <button
          onClick={() => onPageChange(totalPages)}
          className="flex h-11 w-11 items-center justify-center rounded-xl text-[15px] font-normal hover:bg-[#F7F8FA] pagination-button"
        >
          {totalPages}
        </button>

        <button className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EDF8F0] text-[#22A447] pagination-next">
          <ChevronRight size={18} />
        </button>

        <button className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EDF8F0] text-[#22A447] pagination-next">
          <ChevronsRight size={18} />
        </button>
      </div>
    </div>
  );
};
export default Pagination;