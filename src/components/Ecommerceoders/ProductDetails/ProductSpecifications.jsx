import SpecificationRow from "./SpecificationRow";

const specifications = [
  {
    label: "Display",
    value: '6.1" inch',
  },
  {
    label: "Chip",
    value: "A13 Bionic chip",
  },
  {
    label: "Camera",
    value: "Dual 12MP Ultra Wide",
  },
  {
    label: "OS",
    value: "OS 13",
  },
    {
    label: "Capacity",
    value: "64GB",
  },
];

const ProductSpecifications = () => {
  return (
    <div className="mt-2 rounded-2xl border border-[#EEF2F6] bg-white">
      {/* Header */}
      <div className="border-b border-[#EEF2F6] px-6 py-4">
        <h3 className="text-[15px] line-through font-medium text-[#3F434A]">
          Specifications
        </h3>
      </div>

      {/* Body */}
      <div className="divide-y divide-[#EEF2F6]">
        {specifications.map((item, index) => (
          <SpecificationRow
            key={index}
            label={item.label}
            value={item.value}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductSpecifications;