const TaskConnector = ({
  top = 0,
  left = 0,
  height = 60,
  width = 50,
}) => {
  return (
    <div
      className="absolute pointer-events-none"
      style={{
        top,
        left,
        width,
        height,
      }}
    >
      {/* Vertical */}
      <div
        className="
          absolute
          left-0
          top-0
          border-l
          border-dashed
          border-[#BFC7D5]
        "
        style={{
          height: height - 18,
        }}
      />

      {/* Horizontal */}
      <div
        className="
          absolute
          bottom-0
          border-b
          border-dashed
          border-[#BFC7D5]
        "
        style={{
          left: 0,
          width,
        }}
      />
    </div>
  );
};

export default TaskConnector;