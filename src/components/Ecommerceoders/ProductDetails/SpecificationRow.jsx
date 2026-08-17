const SpecificationRow = ({ label, value }) => {
  return (
    <div className="flex items-center justify-between px-6 py-3">
      {/* Label */}
      <span className="text-[14px] line-through font-medium text-[#8A9099]">
        {label}
      </span>

      {/* Value */}
      <span className="text-[14px] font-medium line-through text-[#3F434A] text-right">
        {value}
      </span>
    </div>
  );
};

export default SpecificationRow;