import { Check, Plus, GripVertical, Trash2 } from "lucide-react";

const TaskChecklistSection = ({
  checklist = [],
  progress = 0,
}) => {
  return (
    <div className="mb-10">

      {/* Header */}
      <div className="mb-3 flex items-center justify-between">

        <h4 className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#667085]">
          Checklist ({progress}%)
        </h4>

      </div>

      {/* Progress */}
      <div className="mb-6 h-[5px] w-full overflow-hidden rounded-full bg-[#EEF2F7]">

        <div
          className="h-full rounded-full bg-[#22983A]"
          style={{
            width: `${progress}%`,
          }}
        />

      </div>

      {/* Items */}
      <div className="space-y-2">

        {checklist.map((item) => (
          <div
            key={item.id}
            className="
              flex
              items-center
              justify-between
              rounded-xl
              px-3
              py-3
              transition
              hover:bg-[#F8F9FB]
            "
          >

            {/* Left */}
            <div className="flex items-center gap-3">

              {/* Checkbox */}
              {item.completed ? (
                <div className="flex h-5 w-5 items-center justify-center rounded-full border border-[#22C55E]">

                  <Check
                    size={13}
                    className="text-[#22C55E]"
                  />

                </div>
              ) : (
                <div className="h-5 w-5 rounded-full border border-[#D0D5DD]" />
              )}

              {/* Title */}
              <span
                className={`text-[14px] ${
                  item.completed
                    ? "text-[#98A2B3] line-through"
                    : "text-[#344054]"
                }`}
              >
                {item.title}
              </span>

            </div>

            {/* Right */}
            {item.completed && (
              <div className="flex items-center gap-3 text-[#98A2B3]">

                <button
                  type="button"
                  className="transition hover:text-[#344054]"
                >
                  <GripVertical size={17} />
                </button>

                <button
                  type="button"
                  className="transition hover:text-[#EF4444]"
                >
                  <Trash2 size={16} />
                </button>

              </div>
            )}

          </div>
        ))}

      </div>

      {/* Add Checklist */}
      <button
        type="button"
        className="
          mt-5
          flex
          items-center
          gap-2
          text-[14px]
          font-medium
          text-[#22983A]
          transition
          hover:text-[#1B7A30]
        "
      >
        <Plus size={16} />

        Add Checklist Item
      </button>

    </div>
  );
};

export default TaskChecklistSection;