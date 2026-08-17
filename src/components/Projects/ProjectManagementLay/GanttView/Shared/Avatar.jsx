const Avatar = ({
  src,
  alt = "Avatar",
  size = 40,
  online = false,
  className = "",
}) => {
  return (
    <div
      className={`relative inline-flex ${className}`}
      style={{
        width: size,
        height: size,
      }}
    >
      {/* Avatar */}
      <img
        src={src}
        alt={alt}
        className="h-full w-full rounded-full object-cover"
      />

      {/* Online Status */}
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