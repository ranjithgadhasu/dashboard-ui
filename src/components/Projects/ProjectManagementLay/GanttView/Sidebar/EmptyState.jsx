import { FolderOpen } from "lucide-react";

const EmptyState = ({
  icon: Icon = FolderOpen,
  title = "No Data Found",
  description = "There is nothing to display at the moment.",
  buttonText,
  onButtonClick,
}) => {
  return (
    <div
      className="
        flex
        flex-col
        items-center
        justify-center
        rounded-2xl
        border
        border-dashed
        border-[#D0D5DD]
        bg-white
        px-8
        py-16
        text-center
      "
    >
      {/* Icon */}
      <div
        className="
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-full
          bg-[#F3FFF5]
        "
      >
        <Icon
          size={30}
          className="text-[#22C55E]"
        />
      </div>

      {/* Title */}
      <h3
        className="
          mt-6
          text-[22px]
          font-semibold
          text-[#344054]
        "
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className="
          mt-3
          max-w-md
          text-[15px]
          leading-7
          text-[#98A2B3]
        "
      >
        {description}
      </p>

      {/* Button */}
      {buttonText && (
        <button
          onClick={onButtonClick}
          className="
            mt-8
            rounded-xl
            bg-[#22C55E]
            px-6
            py-3
            text-[14px]
            font-medium
            text-white
            transition
            hover:bg-[#16A34A]
          "
        >
          {buttonText}
        </button>
      )}
    </div>
  );
};

export default EmptyState;