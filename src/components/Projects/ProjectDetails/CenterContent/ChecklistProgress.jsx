const ChecklistProgress = ({ completed, total }) => {
  const percentage = total ? (completed / total) * 100 : 0;

  return (
    <div className="mb-8 h-[8px] w-full rounded-full bg-[#EEF2F7]">
      <div
        className="h-full rounded-full bg-[#22983A]"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};

export default ChecklistProgress;