const Avatar = ({
  src,
  alt = "Avatar",
  name = "",
  size = "md",
  rounded = true,
  online = false,
  className = "",
}) => {
  const sizes = {
    xs: "h-8 w-8 text-xs",
    sm: "h-10 w-10 text-sm",
    md: "h-12 w-12 text-base",
    lg: "h-14 w-14 text-lg",
    xl: "h-16 w-16 text-xl",
    "2xl": "h-20 w-20 text-2xl",
  };

  const initials = name
    ? name
        .trim()
        .split(" ")
        .slice(0, 2)
        .map((word) => word[0])
        .join("")
        .toUpperCase()
    : "?";

  return (
    <div className="relative inline-flex">
      {src ? (
        <img
          src={src}
          alt={alt}
          className={`
            ${sizes[size]}
            ${rounded ? "rounded-full" : "rounded-lg"}
            object-cover
            border border-[#E9EDF5]
            ${className}
          `}
        />
      ) : (
        <div
          className={`
            ${sizes[size]}
            ${rounded ? "rounded-full" : "rounded-lg"}
            flex items-center justify-center
            bg-[#22963F]
            text-white
            font-semibold
            select-none
            ${className}
          `}
        >
          {initials}
        </div>
      )}

      {online && (
        <span
          className="
            absolute
            bottom-0
            right-0
            h-3
            w-3
            rounded-full
            border-2
            border-white
            bg-[#22C55E]
          "
        />
      )}
    </div>
  );
};

export default Avatar;