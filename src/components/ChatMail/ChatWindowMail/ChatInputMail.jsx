import { useState } from "react";
import EmojiPicker from "emoji-picker-react";
import {
  Smile,
  Paperclip,
  SendHorizonal,
} from "lucide-react";

const ChatInputMail = () => {
  const [message, setMessage] = useState("");
  const [showEmoji, setShowEmoji] = useState(false);

  const handleSend = () => {
    if (!message.trim()) return;

    console.log("Send:", message);
    setMessage("");
    setShowEmoji(false);
  };

  const onEmojiClick = (emojiData) => {
    setMessage((prev) => prev + emojiData.emoji);
  };

  return (
    <div className="relative border-t border-[#EEF2F7] bg-white px-6 py-4">
      {/* Emoji Picker */}
      {showEmoji && (
        <div className="absolute bottom-20 left-14 z-50 overflow-hidden rounded-2xl shadow-2xl">
          <EmojiPicker
            onEmojiClick={onEmojiClick}
            width={360}
            height={430}
            searchPlaceholder="Search..."
            previewConfig={{ showPreview: false }}
            skinTonesDisabled
          />
        </div>
      )}

      <div className="flex items-center gap-3 rounded-2xl border border-[#E5E7EB] bg-[#F8F9FB] px-4 py-3">
        {/* Attachment */}
        <button
          type="button"
          className="text-[#98A2B3] transition hover:text-[#22C55E]"
        >
          <Paperclip size={20} />
        </button>

        {/* Emoji */}
        <button
          type="button"
          onClick={() => setShowEmoji((prev) => !prev)}
          className={`transition ${
            showEmoji ? "text-[#22C55E]" : "text-[#98A2B3]"
          } hover:text-[#22C55E]`}
        >
          <Smile size={22} />
        </button>

        {/* Input */}
        <input
          type="text"
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSend();
            }
          }}
          className="flex-1 bg-transparent text-[14px] text-[#344054] outline-none placeholder:text-[#98A2B3]"
        />

        {/* Send */}
        <button
          type="button"
          onClick={handleSend}
          disabled={!message.trim()}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-[#22C55E] text-white transition hover:bg-[#16A34A] disabled:cursor-not-allowed disabled:bg-[#D1D5DB]"
        >
          <SendHorizonal size={20} className="rotate-[-45deg]" />
        </button>
      </div>
    </div>
  );
};

export default ChatInputMail;