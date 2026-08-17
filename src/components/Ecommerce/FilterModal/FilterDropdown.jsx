import { ChevronDown } from "lucide-react";

const FilterDropdown = ({
  label,
  value,
  options,
  onChange,
}) => {
  return (
    <div className="space-y-2">
      <label className="block text-[15px] font-medium text-[#8A9099]">
        {label}
      </label>

      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="h-12 w-full appearance-none rounded-2xl border border-[#E6EAF0] bg-white px-4 pr-12 text-[15px] text-[#3F434A] outline-none transition focus:border-[#22A447]"
        >
          {options.map((item) => (
            <option
              key={item.value}
              value={item.value}
            >
              {item.label}
            </option>
          ))}
        </select>

        <ChevronDown
          size={18}
          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#8A9099]"
        />
      </div>
    </div>
  );
};

export default FilterDropdown;