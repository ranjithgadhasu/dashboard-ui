import { useState } from "react";
import { Check } from "lucide-react";

const initialLabels = [
  {
    id: 1,
    name: "Design",
    color: "#42C96B",
    selected: false,
  },
  {
    id: 2,
    name: "Frontend",
    color: "#53D3C2",
    selected: true,
  },
  {
    id: 3,
    name: "Backend",
    color: "#FF6B6B",
    selected: false,
  },
];

const FilterLabels = () => {
  const [labels, setLabels] = useState(initialLabels);

  const toggleLabel = (id) => {
    setLabels((prev) =>
      prev.map((label) =>
        label.id === id
          ? {
              ...label,
              selected: !label.selected,
            }
          : label
      )
    );
  };

  return (
    <div>

      {/* Title */}
      <h4 className="mb-4 text-[14px] font-normal text-[#98A2B3]">
        Labels
      </h4>

      {/* Chips */}
      <div className="flex flex-wrap gap-2">

        {labels.map((label) => (
          <button
            key={label.id}
            type="button"
            onClick={() => toggleLabel(label.id)}
            className="flex items-center gap-2 rounded-md px-4 h-[28px] text-[12px] font-normal text-white transition-all duration-200 hover:opacity-90"
            style={{
              backgroundColor: label.color,
            }}
          >
            {label.name}

            {label.selected && (
              <Check
                size={15}
                strokeWidth={2.5}
              />
            )}

          </button>
        ))}

      </div>

    </div>
  );
};

export default FilterLabels;