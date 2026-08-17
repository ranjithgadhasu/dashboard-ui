import { Check } from "lucide-react";

const colors = [
  "#F8C9C9", // Light Red
  "#8ED9D2", // Teal
  "#FFE59A", // Yellow
  "#8FD19E", // Green
  "#A8E6F7", // Sky Blue

  "#A8E6A3", // Light Green
  "#D9F08A", // Lime
  "#D8A7F7", // Purple
  "#F6B3E8", // Pink
  "#D9D9D9", // Gray
];

const CalendarColorPicker = ({
  selectedColor,
  onSelect,
}) => {
  return (
    <div className="grid grid-cols-5 gap-3">
      {colors.map((color) => {
        const selected = selectedColor === color;

        return (
          <button
            key={color}
            type="button"
            onClick={() => onSelect(color)}
            className={`flex h-9 w-full items-center justify-center rounded-md border-2 transition-all duration-200 ${
              selected
                ? "border-[#22963F] shadow-sm"
                : "border-transparent hover:border-[#D1D5DB]"
            }`}
            style={{ backgroundColor: color }}
          >
            {selected && (
              <Check
                size={18}
                strokeWidth={3}
                className="text-white"
              />
            )}
          </button>
        );
      })}
    </div>
  );
};

export default CalendarColorPicker;