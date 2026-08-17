import { Trash2 } from "lucide-react";

const TrashItem = () => {
  return (
    <div
      className="
        border-t
        border-[#EEF2F7]
        px-6
        py-5
      "
    >
      <button
        className="
          flex
          w-full
          items-center
          gap-3
          rounded-xl
          px-3
          py-3
          transition-all
          duration-200
          hover:bg-[#F8FAFC]
        "
      >
        <Trash2 size={18} className="text-[#98A2B3]" />

        <div className="flex flex-col items-left">
          <span
            className="
              text-[15px]
              font-normal
              text-[#37393D]
            "
          >
            Trash
          </span>
        </div>
      </button>
    </div>
  );
};

export default TrashItem;
