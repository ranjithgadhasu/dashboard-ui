import ChecklistProgress from "./ChecklistProgress";
import ChecklistItem from "./ChecklistItem";
import AddChecklistItem from "./AddChecklistItem";

const ProjectChecklist = ({ project }) => {
  const checklist = project?.checklist || [];

  const completed = checklist.filter(
    (item) => item.completed
  ).length;

  return (
    <div
      className="
        mt-8
        rounded-3xl
        border
        border-[#EEF2F7]
        bg-white
        p-6
      "
    >
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">

        <div>

          <h2
            className="
              text-[22px]
              font-semibold
              text-[#344054]
            "
          >
            Checklist
          </h2>

          <p
            className="
              mt-1
              text-[14px]
              text-[#98A2B3]
            "
          >
            Track project tasks
          </p>

        </div>

        <span
          className="
            rounded-full
            bg-[#F8FAFC]
            px-4
            py-2
            text-[14px]
            font-semibold
            text-[#22983A]
          "
        >
          {completed}/{checklist.length}
        </span>

      </div>

      {/* Progress */}
      <ChecklistProgress
        completed={completed}
        total={checklist.length}
      />

      {/* Checklist */}
      <div className="mt-8 space-y-4">

        {checklist.length > 0 ? (
          checklist.map((item) => (
            <ChecklistItem
              key={item.id}
              item={item}
            />
          ))
        ) : (
          <div
            className="
              rounded-2xl
              border
              border-dashed
              border-[#D0D5DD]
              bg-[#FCFCFD]
              py-10
              text-center
            "
          >
            <h3
              className="
                text-[16px]
                font-semibold
                text-[#344054]
              "
            >
              No Checklist Items
            </h3>

            <p
              className="
                mt-2
                text-[14px]
                text-[#98A2B3]
              "
            >
              Add your first task below.
            </p>

          </div>
        )}

      </div>

      {/* Add Item */}
      <AddChecklistItem />

    </div>
  );
};

export default ProjectChecklist;