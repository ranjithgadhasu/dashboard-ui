import TaskLabels from "./TaskLabels";

const LabelsCard = ({ labels }) => {
  return (
    <div className="mb-8">

      <TaskLabels
        labels={labels}
      />

    </div>
  );
};

export default LabelsCard;