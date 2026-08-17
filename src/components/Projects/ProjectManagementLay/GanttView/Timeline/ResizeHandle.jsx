const ResizeHandle = ({ position = "left" }) => {
  return (
    <div
      className={`
        absolute
        top-1/2
        -translate-y-1/2
        h-5
        w-[4px]
        rounded-full
        bg-white
        shadow-sm
        cursor-ew-resize
        ${
          position === "left"
            ? "left-[3px]"
            : "right-[3px]"
        }
      `}
    />
  );
};

export default ResizeHandle;