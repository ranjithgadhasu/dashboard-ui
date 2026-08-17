import { Minus, Plus } from "lucide-react";

const ZoomControls = () => {
  return (
    <div className="absolute bottom-6 right-8 flex items-center gap-4">
      {/* Today Button */}
      <button
        className="
          h-[40px]
          min-w-[140px]
          rounded-3xl
          bg-white
          px-10
          text-[14px]
          font-normal
          text-[#4B5563]
          shadow-sm
          transition
          hover:shadow-md
        "
      >
        Today
      </button>

      {/* Days Control */}
      <div
        className="
          flex
          h-[40px]
          items-center
          gap-10
          rounded-3xl
          bg-white
          px-8
          shadow-sm
        "
      >
        <button
          className="
            text-[#d4dde9]
            transition
            hover:text-[#22C55E]
          "
        >
          <Minus size={25} strokeWidth={2.5} />
        </button>

        <span
          className="
            text-[14px]
            font-normal
            text-[#4B5563]
          "
        >
          Days
        </span>

        <button
          className="
            text-[#374151]
            transition
            hover:text-[#22C55E]
          "
        >
          <Plus size={25} strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
};

export default ZoomControls;