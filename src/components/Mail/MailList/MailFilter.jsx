import { useState } from "react";
import { ChevronDown, Check } from "lucide-react";

const filterOptions = [
  "Recent",
  "Unread",
  "Starred",
  "Important",
  "Has Attachments",
];

const MailFilter = ({
  value = "Recent",
  onChange,
}) => {
  const [open, setOpen] = useState(false);

  const handleSelect = (option) => {
    onChange?.(option);
    setOpen(false);
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="
          flex
          items-center
          gap-2
          rounded-lg
          border
          border-[#E6EBF2]
          bg-white
          px-3
          py-2
          text-sm
          font-medium
          text-[#525C60]
          transition
          hover:border-[#22963F]
          hover:bg-[#F8FBF8]
        "
      >
        <span>{value}</span>

        <ChevronDown
          size={16}
          className={`transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div
          className="
            absolute
            right-0
            z-50
            mt-2
            w-52
            overflow-hidden
            rounded-xl
            border
            border-[#E6EBF2]
            bg-white
            shadow-lg
          "
        >
          {filterOptions.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => handleSelect(option)}
              className="
                flex
                w-full
                items-center
                justify-between
                px-4
                py-3
                text-left
                text-sm
                text-[#525C60]
                transition
                hover:bg-[#F5FBF6]
              "
            >
              <span>{option}</span>

              {value === option && (
                <Check
                  size={16}
                  className="text-[#22963F]"
                />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default MailFilter;