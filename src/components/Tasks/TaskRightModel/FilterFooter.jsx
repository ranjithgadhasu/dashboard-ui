const FilterFooter = ({
  onReset = () => {},
  onApply = () => {},
}) => {
  return (
    <div className="border-t border-[#EEF2F7] pt-6">

      <div className="flex items-center justify-between gap-4">
             {/* Apply Button */}
        <button
          type="button"
          onClick={onApply}
          className="
            flex-1
            rounded-xl
            bg-[#22C55E]
            h-[40px]
            w-[138px]
            px-5
            py-3
            text-[15px]
            font-semibold
            text-white
            transition-all
            duration-200
            hover:bg-[#16A34A]
          "
        >
          Apply Filters
        </button>

        {/* Reset Button */}
<button
  type="button"
  onClick={onReset}
  className="
    bg-transparent
    p-0
    text-[15px]
    font-medium
    text-[#22983A]
    hover:text-[#1B7A30]
  "
>
  <span className="border-b border-[#22983A] cursor-pointer">
    Reset all Filters
  </span>
</button>

      </div>

    </div>
  );
};

export default FilterFooter;