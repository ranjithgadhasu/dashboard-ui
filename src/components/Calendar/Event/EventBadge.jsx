const badgeColors = {
  blue: "bg-[#3B82F6]",
  green: "bg-[#22C55E]",
  yellow: "bg-[#F59E0B]",
  red: "bg-[#EF4444]",
  purple: "bg-[#8B5CF6]",
  pink: "bg-[#EC4899]",
  cyan: "bg-[#06B6D4]",
  orange: "bg-[#F97316]",
};

const EventBadge = ({
  color = "blue",
  label,
  size = "sm",
}) => {
  const sizes = {
    xs: "h-2 w-2",
    sm: "h-3 w-3",
    md: "h-4 w-4",
    lg: "h-5 w-5",
  };

  return (
    <div className="flex items-center gap-2">
      <span
        className={`${sizes[size]} rounded-full ${
          badgeColors[color] || badgeColors.blue
        }`}
      />

      {label && (
        <span className="text-[13px] font-medium text-[#3F434A]">
          {label}
        </span>
      )}
    </div>
  );
};

export default EventBadge;