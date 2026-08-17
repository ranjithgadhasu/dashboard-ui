import { useState } from "react";

const ToggleSwitch = ({
  checked = false,
  onChange,
  disabled = false,
  size = "md",
}) => {
  const [enabled, setEnabled] = useState(checked);

  const handleToggle = () => {
    if (disabled) return;

    const value = !enabled;
    setEnabled(value);

    if (onChange) {
      onChange(value);
    }
  };

  const sizes = {
    sm: {
      wrapper: "w-9 h-5",
      thumb: "w-4 h-4",
      on: "translate-x-4",
      off: "translate-x-0",
    },
    md: {
      wrapper: "w-12 h-7",
      thumb: "w-5 h-5",
      on: "translate-x-5",
      off: "translate-x-0",
    },
    lg: {
      wrapper: "w-14 h-8",
      thumb: "w-6 h-6",
      on: "translate-x-6",
      off: "translate-x-0",
    },
  };

  const current = sizes[size];

  return (
    <button
      type="button"
      onClick={handleToggle}
      disabled={disabled}
      className={`
        relative
        inline-flex
        items-center
        rounded-full
        transition-all
        duration-300
        ${current.wrapper}
        ${
          enabled
            ? "bg-[#22C55E]"
            : "bg-[#D0D5DD]"
        }
        ${
          disabled
            ? "cursor-not-allowed opacity-60"
            : "cursor-pointer"
        }
      `}
    >
      <span
        className={`
          absolute
          left-1
          rounded-full
          bg-white
          shadow-md
          transition-all
          duration-300
          ${current.thumb}
          ${
            enabled
              ? current.on
              : current.off
          }
        `}
      />
    </button>
  );
};

export default ToggleSwitch;