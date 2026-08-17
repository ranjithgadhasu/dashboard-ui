import { Check } from "lucide-react";

const ChecklistItem = ({ item, onToggle }) => {
  return (
    <div
      className="
        flex
        items-center
        justify-between
        rounded-2xl
        border
        border-[#EEF2F7]
        bg-white
        p-4
        transition-all
        duration-300
        hover:border-[#D9E2EC]
        hover:shadow-sm
      "
    >
      {/* Left */}
      <div className="flex items-center gap-4">

        {/* Checkbox */}
        <button
          onClick={() => onToggle?.(item.id)}
          className={`
            flex
            h-6
            w-6
            items-center
            justify-center
            rounded-md
            border-2
            transition-all
            ${
              item.completed
                ? "border-[#22983A] bg-[#22983A]"
                : "border-[#D0D5DD] bg-white"
            }
          `}
        >
          {item.completed && (
            <Check
              size={14}
              strokeWidth={3}
              className="text-white"
            />
          )}
        </button>

        {/* Content */}
        <div>

          <h4
            className={`
              text-[15px]
              font-medium
              ${
                item.completed
                  ? "text-[#98A2B3] line-through"
                  : "text-[#344054]"
              }
            `}
          >
            {item.title}
          </h4>

          {item.description && (
            <p className="mt-1 text-[13px] text-[#98A2B3]">
              {item.description}
            </p>
          )}

        </div>

      </div>

      {/* Status */}
      <span
        className={`
          rounded-full
          px-3
          py-1
          text-[12px]
          font-semibold
          ${
            item.completed
              ? "bg-[#ECFDF3] text-[#22983A]"
              : "bg-[#FFF7ED] text-[#F59E0B]"
          }
        `}
      >
        {item.completed ? "Completed" : "Pending"}
      </span>

    </div>
  );
};

export default ChecklistItem;