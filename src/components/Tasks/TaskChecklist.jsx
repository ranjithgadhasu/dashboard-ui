import {
  CheckCircle,
  Circle,
  ChevronUp,
} from "lucide-react";

const TaskChecklist = ({ checklist = [] }) => {
  if (!checklist.length) return null;

  const completedCount = checklist.filter(
    (item) => item.completed
  ).length;

  const progress = Math.round(
    (completedCount / checklist.length) * 100
  );

  return (
    <div className="mt-5">

      {/* Header */}
      <div className="mb-3 flex items-center justify-between">

        <h4 className="text-[13px] font-semibold uppercase text-[#667085]">
          SUB-TASKS: {checklist.length}
        </h4>

        <span className="text-[14px] font-medium text-[#98A2B3]">
          {progress}%
        </span>

      </div>

      {/* Progress */}
      <div className="h-[6px] rounded-full bg-[#EEF2F7]">

        <div
          className="h-full rounded-full bg-[#22C55E] transition-all duration-300"
          style={{
            width: `${progress}%`,
          }}
        />

      </div>

      {/* Collapse Icon */}
      <div className="my-3 flex justify-center">

        <ChevronUp
          size={18}
          className="text-[#98A2B3]"
        />

      </div>

      {/* Checklist */}
      <div className="space-y-3">

        {checklist.map((item) => (
          <div
            key={item.id}
            className="
              flex
              items-center
              justify-between
              rounded-xl
              bg-[#F8F9FB]
              px-4
              py-3
            "
          >
            <span className="text-[15px] font-medium text-[#344054]">
              {item.title}
            </span>

            {item.completed ? (
              <CheckCircle
                size={20}
                className="text-[#22C55E]"
              />
            ) : (
              <Circle
                size={20}
                className="text-[#D0D5DD]"
              />
            )}

          </div>
        ))}

      </div>

    </div>
  );
};

export default TaskChecklist;