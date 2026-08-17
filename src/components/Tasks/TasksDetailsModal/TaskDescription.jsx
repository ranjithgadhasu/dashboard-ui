const TaskDescription = ({ description }) => {
  return (
    <div className="mb-8">

      {/* Heading */}
      <h4 className="mb-3 text-[14px] font-medium uppercase tracking-[0.12em] text-[#98A2B3]">
        Description
      </h4>

      {/* Description */}
      <p className="text-[14px] font-normal leading-7 text-[#667085]">
        {description}
      </p>

    </div>
  );
};

export default TaskDescription;