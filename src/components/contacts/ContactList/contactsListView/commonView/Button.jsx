const Button = ({
  children,
  type = "button",
  onClick,
  className = "",
  disabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        inline-flex
        items-center
        justify-center
        gap-2
        rounded-xl
        px-5
        py-2.5
        text-sm
        font-medium
        transition-all
        duration-200
        disabled:cursor-not-allowed
        disabled:opacity-50
        ${className}
      `}
    >
      {children}
    </button>
  );
};
export default Button;