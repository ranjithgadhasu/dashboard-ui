const CustomBar = (props) => {
  const {
    x,
    y,
    width,
    height,
    payload,
  } = props;

  const expense = payload.expense;
  const income = payload.income;

  const greenHeight = (income / expense) * height;

  return (
    <g>
      {/* Cyan Bar */}
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx={width / 2}
        ry={width / 2}
        fill="#48CFCB"
      />

      {/* Green Bar */}
      <rect
        x={x + width * 0.00}
        y={y + height - greenHeight}
        width={width * 0.99}
        height={greenHeight}
        rx={(width * 0.64) / 2}
        ry={(width * 0.64) / 2}
        fill="#23983A"
      />
    </g>
  );
};

export default CustomBar;