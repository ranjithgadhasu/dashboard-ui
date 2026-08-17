import { 
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import "./pagination.css"

const CustomersPagination = () => {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-[#E9EDF3] bg-white px-6 py-4 customers-pagination">
      {/* Left Section */}
      <div className="flex items-center gap-4 customers-pagination-left">
        {/* Page Size */}
        <div className="relative customers-page-size">
          <select className="h-11 w-[72px] appearance-none rounded-2xl border border-[#E5E7EB] bg-white px-5 pr-8 text-[16px] font-medium text-[#3F434A] outline-none transition hover:border-[#22963F] focus:border-[#22963F]">
            <option>10</option>
            <option>20</option>
            <option>50</option>
            <option>100</option>
          </select>

          <ChevronDownIcon />
        </div>

        {/* Showing */}
        <p className="text-[16px] font-normal text-[#8A9099] customers-showing">
          Showing <span className="text-[#3F434A]">1 - 10</span> of{" "}
          <span className="text-[#3F434A]">100</span>
        </p>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-2 customers-pagination-right">
        {/* First */}
        <button className="pagination-button flex h-9 w-9 items-center justify-center rounded-xl bg-[#F7F8FA] text-[#AEB4C0] transition hover:bg-[#EDF6EE] hover:text-[#22963F]">
          <ChevronsLeft size={18} strokeWidth={2.2} />
        </button>

        {/* Previous */}
        <button className="pagination-button flex h-9 w-9 items-center justify-center rounded-xl bg-[#F7F8FA] text-[#AEB4C0] transition hover:bg-[#EDF6EE] hover:text-[#22963F]">
          <ChevronLeft size={18} strokeWidth={2.2} />
        </button>

        {/* Active */}
        <button className="pagination-button flex h-9 w-9 items-center justify-center rounded-xl bg-[#22963F] text-[15px] font-semibold text-white shadow-sm">
          1
        </button>

        {/* Pages */}
        <button className="pagination-button flex h-9 w-9 items-center justify-center rounded-xl text-[15px] font-medium text-[#3F434A] transition hover:bg-[#F7F8FA]">
          2
        </button>

        <button className="pagination-button flex h-9 w-9 items-center justify-center rounded-xl text-[15px] font-medium text-[#3F434A] transition hover:bg-[#F7F8FA]">
          3
        </button>
        
        {/* Ellipsis */}
        <span className="pagination-dots flex h-9 w-9 items-center justify-center text-[16px] font-semibold text-[#3F434A]">
          ...
        </span>

        {/* Last Visible */}
        <button className="pagination-button flex h-9 w-9 items-center justify-center rounded-xl text-[15px] font-medium text-[#3F434A] transition hover:bg-[#F7F8FA]">
          5
        </button>

        {/* Next */}
        <button className="pagination-button flex h-9 w-9 items-center justify-center rounded-xl bg-[#EDF6EE] text-[#22963F] transition hover:bg-[#22963F] hover:text-white">
          <ChevronRight size={18} strokeWidth={2.2} />
        </button>

        {/* Last */}
        <button className="pagination-button flex h-9 w-9 items-center justify-center rounded-xl bg-[#EDF6EE] text-[#22963F] transition hover:bg-[#22963F] hover:text-white">
          <ChevronsRight size={18} strokeWidth={2.2} />
        </button>
      </div>
    </div>
  );
};

const ChevronDownIcon = () => (
  <svg
    className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#8A9099]"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
  </svg>
);

export default CustomersPagination;