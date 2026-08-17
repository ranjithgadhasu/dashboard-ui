const MailAvatar = ({
  avatar,
  name,
  size = 40,
  online = false,
}) => {
  // If no avatar image, show initials
  const initials = name
    ?.split(" ")
    .map((word) => word[0])
    .join("")
    .substring(0, 2)
    .toUpperCase();

  return (
    <div
      className="relative flex-shrink-0"
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
    >
      {avatar ? (
        <img
          src={avatar}
          alt={name}
          className="h-full w-full rounded-full object-cover"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center rounded-full bg-[#22963F] text-sm font-semibold text-white">
          {initials}
        </div>
      )}

      {online && (
        <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-[#22C55E]" />
      )}
    </div>
  );
};

export default MailAvatar;