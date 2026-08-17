const TaskLabel = ({ labels = [] }) => {
  if (!labels.length) return null;

  return (
    <div className="mb-4 flex items-center gap-2">
      {labels.map((color, index) => (
        <span
          key={index}
          className="h-[6px] w-8 rounded-full"
          style={{
            backgroundColor: color,
          }}
        />
      ))}
    </div>
  );
};

export default TaskLabel;