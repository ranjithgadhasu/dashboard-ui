import {
  Paperclip,
  Smile,
  SendHorizonal,
} from "lucide-react";

const ChatInput = () => {
  return (
    <div className="border-t border-[#EEF2F6] bg-white">

      {/* Typing Status */}

      <div className="py-3 text-center">

        <span className="text-[14px] font-medium text-[#8A9099]">
          Regina Cooper is typing
        </span>

        <span className="ml-1 animate-pulse text-[#3F434A]">
          •••
        </span>

      </div>

      {/* Input */}

      <div className="flex items-center gap-3 px-5 pb-4">

        {/* Attachment */}

        <button className="transition hover:text-[#21943A]">
          <Paperclip
            size={18}
            className="rotate-45 text-[#8A9099]"
          />
        </button>

        {/* Textbox */}

        <input
          type="text"
          placeholder="Type a message"
          className="flex-1 border-none bg-transparent text-[15px] text-[#3F434A] placeholder:text-[#8A9099] focus:outline-none"
        />

        {/* Emoji */}

        <button className="transition hover:text-[#21943A]">
          <Smile
            size={18}
            className="text-[#8A9099]"
          />
        </button>

        {/* Send */}

        <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#21943A] transition hover:bg-[#1C8333]">

          <SendHorizonal
            size={18}
            strokeWidth={2.5}
            className="ml-[2px] text-white rotate-310"
          />

        </button>

      </div>

    </div>
  );
};

export default ChatInput;   