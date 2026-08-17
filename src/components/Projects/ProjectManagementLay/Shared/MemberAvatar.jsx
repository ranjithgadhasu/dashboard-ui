const MemberAvatar = ({
  src,
  alt,
  size = "md",
  bordered = true,
}) => {

  const sizes = {
    xs: "h-7 w-7",
    sm: "h-9 w-9",
    md: "h-11 w-11",
    lg: "h-14 w-14",
    xl: "h-16 w-16",
  };

  return (
    <img
      src={src}
      alt={alt}
      className={`
        ${sizes[size]}
        rounded-full
        object-cover
        flex-shrink-0
        ${bordered ? "border-[3px] border-white" : ""}
      `}
    />
  );
};

export default MemberAvatar;