import {
  CheckCircle2,
  Circle,
  GripVertical,
  Trash2,
} from "lucide-react";

const ChecklistItem = ({ item }) => {
  return (
    <div
      className="
        group
        flex
        items-center
        justify-between
        rounded-2xl
        px-5
        py-4
        transition
        hover:bg-[#F7F7F8]
      "
    >
      <div className="flex items-center gap-5">

        {item.completed ? (
          <CheckCircle2
            size={24}
            className="text-[#22983A]"
          />
        ) : (
          <Circle
            size={24}
            className="text-[#E4E7EC]"
          />
        )}

        <span
          className={`
            text-[14px]
            font-normal
            ${
              item.completed
                ? "line-through text-[#344054]"
                : "text-[#344054]"
            }
          `}
        >
          {item.title}
        </span>

      </div>

      <div className="flex items-center gap-5 opacity-0 transition group-hover:opacity-100">

        <GripVertical
          size={20}
          className="text-[#667085]"
        />

        <Trash2
          size={20}
          className="text-[#667085]"
        />

      </div>
    </div>
  );
};

export default ChecklistItem;