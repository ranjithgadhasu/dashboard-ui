import { MoreHorizontal, Camera, X } from "lucide-react";

const ChatHeader = ({ onClose }) => {
  return (
    <header className="flex h-[58px] items-center justify-between border-b border-[#EEF2F6] bg-white px-5">

      {/* Left */}

      <button className="rounded-lg p-2 transition hover:bg-[#F8F9FB]">
        <MoreHorizontal
          size={18}
          strokeWidth={2.3}
          className="text-[#8A9099]"
        />
      </button>

      {/* Right */}

      <div className="flex items-center gap-2">

        <button className="rounded-lg p-2 transition hover:bg-[#F8F9FB]">
          <Camera
            size={16}
            strokeWidth={2.2}
            className="text-[#8A9099]"
          />
        </button>

        <button
          onClick={onClose}
          className="rounded-lg p-2 transition hover:bg-[#F8F9FB]"
        >
          <X
            size={16}
            strokeWidth={2.5}
            className="text-[#8A9099]"
          />
        </button>

      </div>

    </header>
  );
};

export default ChatHeader;