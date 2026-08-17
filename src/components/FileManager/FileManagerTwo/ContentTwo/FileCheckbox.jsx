import { Check } from "lucide-react";

const FileCheckbox = ({
  checked = false,
  onChange,
}) => {
  return (
    <button
      type="button"
      onClick={onChange}
      className={`
        flex
        h-5
        w-5
        items-center
        justify-center
        rounded-md
        border
        transition-all
        duration-200
        ${
          checked
            ? "border-[#22C55E] bg-[#22C55E]"
            : "border-[#D0D5DD] bg-white hover:border-[#22C55E]"
        }
      `}
    >
      {checked && (
        <Check
          size={14}
          strokeWidth={3}
          className="text-white"
        />
      )}
    </button>
  );
};

export default FileCheckbox;