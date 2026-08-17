import { Inbox } from "lucide-react";

const EmptyState = ({
  icon: Icon = Inbox,
  title = "No Data Found",
  description = "There's nothing to display right now.",
  actionText,
  onAction,
  className = "",
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-center px-6 py-12 text-center ${className}`}
    >
      {/* Icon */}
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#F5F7FA]">
        <Icon
          size={40}
          className="text-[#9CA3AF]"
        />
      </div>

      {/* Title */}
      <h2 className="mb-2 text-xl font-semibold text-[#2D4058]">
        {title}
      </h2>

      {/* Description */}
      <p className="mb-6 max-w-md text-sm leading-6 text-[#8A9099]">
        {description}
      </p>

      {/* Action Button */}
      {actionText && onAction && (
        <button
          type="button"
          onClick={onAction}
          className="rounded-lg bg-[#22963F] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#1C7C35]"
        >
          {actionText}
        </button>
      )}
    </div>
  );
};

export default EmptyState;