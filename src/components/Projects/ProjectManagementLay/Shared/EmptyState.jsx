import { Inbox } from "lucide-react";

const EmptyState = ({
  title = "No Data Found",
  description = "There is nothing to display at the moment.",
  buttonText,
  onClick,
}) => {
  return (
    <div
      className="
        flex
        flex-col
        items-center
        justify-center
        rounded-3xl
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
          mb-6
          flex
          h-20
          w-20
          items-center
          justify-center
          rounded-full
          bg-[#F3FFF5]
        "
      >
        <Inbox
          size={36}
          className="text-[#22983A]"
        />
      </div>

      {/* Title */}
      <h2
        className="
          text-[24px]
          font-semibold
          text-[#344054]
        "
      >
        {title}
      </h2>

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
          onClick={onClick}
          className="
            mt-8
            rounded-xl
            bg-[#22983A]
            px-6
            py-3
            text-[15px]
            font-medium
            text-white
            transition
            hover:bg-[#1C7D31]
          "
        >
          {buttonText}
        </button>
      )}
    </div>
  );
};

export default EmptyState;