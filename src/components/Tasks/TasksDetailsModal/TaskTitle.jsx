const TaskTitle = ({ title }) => {
  return (
    <div className="mb-8">

      <h1
        className="
          text-[20px]
          font-medium
          leading-none
          tracking-[-0.02em]
          text-[#344054]
        "
      >
        {title}
      </h1>

    </div>
  );
};

export default TaskTitle;