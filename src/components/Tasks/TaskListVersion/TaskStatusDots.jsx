const TaskStatusDots = ({ colors = [] }) => {
  return (
    <div className="flex items-center gap-[10px]">
      {colors.map((color, index) => (
        <span
          key={index}
          className="
            h-[15px]
            w-[15px]
            rounded-[5px]
            shadow-sm
          "
          style={{
            backgroundColor: color,
          }}
        />
      ))}
    </div>
  );
};

export default TaskStatusDots;