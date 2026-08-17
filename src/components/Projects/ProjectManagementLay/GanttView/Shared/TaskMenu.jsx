import {
  Pencil,
  Clipboard,
  UserPlus,
  Copy,
  Trash2,
} from "lucide-react";

const colors = [
  "#FF6B6B",
  "#47C7B8",
  "#FFC93C",
  "#24A148",
  "#2CB7D8",
  "#45C463",
  "#A3E635",
  "#9333EA",
  "#E85AD5",
  "#E5E7EB",
];

const TaskMenu = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-40"
        onClick={onClose}
      />

      {/* Menu */}
      <div
        className="
          absolute
          left-80
          top-88
          z-50
          w-[224px]
          h-[346px]
          overflow-hidden
          rounded-[28px]
          bg-white
          shadow-2xl
          border
          border-[#EEF2F7]
        "
      >
        {/* Menu Items */}

        <div className="py-1">

          <MenuItem
            icon={<Pencil size={22} />}
            text="Edit Title"
          />

          <MenuItem
            icon={<Clipboard size={22} />}
            text="Add Subtask"
          />

          <MenuItem
            icon={<UserPlus size={22} />}
            text="Add Member"
          />

          <MenuItem
            icon={<Copy size={22} />}
            text="Duplicate"
          />

        </div>

        <div className="border-t border-[#EEF2F7]" />

        <div className="py-1">

          <MenuItem
            danger
            icon={<Trash2 size={22} />}
            text="Delete Task"
          />

        </div>

        <div className="border-t border-[#EEF2F7]" />

        <div className="grid grid-cols-5 gap-5 p-2">

          {colors.map((color) => (
            <button
              key={color}
              className="h-6 w-6 rounded-full"
              style={{ background: color }}
            />
          ))}

        </div>

      </div>
    </>
  );
};

const MenuItem = ({
  icon,
  text,
  danger = false,
}) => (
  <button
    className={`
      flex
      w-full
      items-center
      gap-3
      px-8
      py-3
      text-left
      transition
      hover:bg-[#F8FAFC]
      ${
        danger
          ? "text-[#FF5A5F]"
          : "text-[#667085]"
      }
    `}
  >
    {icon}

    <span className="text-[15px] font-normal">
      {text}
    </span>
  </button>
);

export default TaskMenu;