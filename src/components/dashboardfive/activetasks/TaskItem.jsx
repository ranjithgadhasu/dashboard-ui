import { Check, MoreVertical } from "lucide-react";

const TaskItem = ({ item, onToggle }) => {
  return (
    <div className="flex items-start justify-between task-item">

      <div className="flex flex-1 task-item-content">

        <div
          className="mr-5 mt-1 h-[56px] w-[3px] rounded-full"
          style={{ background: item.color }}
        />

        {/* Clickable Checkbox */}

        <button
          onClick={onToggle}
          className="mr-5 mt-4"
        >
          {item.completed ? (
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-[#22963F]">
              <Check
                size={15}
                className="text-white"
              />
            </div>
          ) : (
            <div className="h-6 w-6 rounded-md border border-[#E5E7EB] bg-white transition hover:border-[#22963F]" />
          )}
        </button>

        <div>

          <h4 className="text-[14px] font-normal text-[#8A9099]">
            {item.name}
          </h4>

          <p
            className={`mt-1 text-[14px] font-normal ${
              item.completed
                ? "text-[#3F434A] line-through"
                : "text-[#3F434A]"
            }`}
          >
            {item.text}{" "}
            <span className="font-medium text-[#22963F]">
              {item.project}
            </span>{" "}
            {item.target}
          </p>

        </div>

      </div>

      <MoreVertical
        size={18}
        className="text-[#8A9099]"
      />

    </div>
  );
};

export default TaskItem;