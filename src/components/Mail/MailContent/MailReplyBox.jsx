import { useState } from "react";
import {
  Type,
  ChevronDown,
  Bold,
  Italic,
  Underline,
  Link,
  Smile,
  Image,
  List,
  ListOrdered,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  Paperclip,
  Clock3,
} from "lucide-react";
import EmojiPickerModal from "./EmojiPickerModal";
import "./mailreplybox.css";

const MailReplyBox = () => {
  const [message, setMessage] = useState("");
  const [showEmoji, setShowEmoji] = useState(false);

  return (
    <>
      <div className="mail-reply-box overflow-hidden rounded-[20px] border border-[#E6EBF2] bg-white">
        {/* To */}
        <div className="mail-reply-to flex items-center justify-between px-5 py-4">
          <div className="flex items-center gap-3 min-w-0">
            <span className="text-[16px] font-medium text-[#525C60]">To:</span>

            <div className="flex min-w-0 items-center gap-2 rounded-lg border border-[#E6EBF2] bg-[#F8F9FC] px-3 py-1">
              <span className="truncate text-[15px] text-[#394150]">
                Regina Cooper
              </span>

              <button className="flex-shrink-0 text-[#899099] hover:text-[#394150]">
                ×
              </button>
            </div>
          </div>

          <div className="flex flex-shrink-0 items-center gap-6 text-[16px] text-[#899099]">
            <button>Cc</button>
            <button>Bcc</button>
          </div>
        </div>

        <div className="border-t border-[#EEF2F7]" />

        {/* Toolbar */}
        <div className="mail-reply-toolbar flex items-center gap-4 px-5 py-4 text-[#6B7280]">
          <div className="flex flex-shrink-0 items-center gap-1">
            <Type size={22} />
            <ChevronDown size={16} />
          </div>

          <div className="h-6 w-px flex-shrink-0 bg-[#E5E7EB]" />

          <Bold size={20} />
          <Italic size={20} />
          <Underline size={20} />

          <div className="h-6 w-px flex-shrink-0 bg-[#E5E7EB]" />

          <Link size={19} />

          <button
            type="button"
            onClick={() => setShowEmoji(!showEmoji)}
            className="relative hover:text-[#22963F]"
          >
            <Smile size={19} />
          </button>

          <Image size={19} />

          <div className="h-6 w-px flex-shrink-0 bg-[#E5E7EB]" />

          <List size={20} />
          <ListOrdered size={20} />

          <div className="h-6 w-px flex-shrink-0 bg-[#E5E7EB]" />

          <AlignLeft size={20} />
          <AlignCenter size={20} />
          <AlignRight size={20} />
          <AlignJustify size={20} />
        </div>

        <div className="border-t border-[#EEF2F7]" />

        {/* Editor */}
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type something"
          className="mail-reply-editor min-h-[220px] w-full resize-none border-0 px-5 py-5 text-[17px] text-[#394150] outline-none placeholder:text-[#899099]"
        />

        {/* Footer */}
        <div className="mail-reply-footer flex items-center justify-between px-5 pb-5">
          <div className="flex items-center">
            <button className="flex h-12 items-center rounded-l-xl bg-[#22963F] px-10 text-lg font-semibold text-white hover:bg-[#1E8739]">
              Send
            </button>

            <button className="flex h-12 w-14 items-center justify-center rounded-r-xl border-l border-[#43B95F] bg-[#22963F] text-white hover:bg-[#1E8739]">
              <Clock3 size={20} />
            </button>

            <button className="ml-8 text-[#899099] hover:text-[#22963F]">
              <Paperclip size={22} />
            </button>
          </div>

          <div className="text-xl text-[#B6BDC7]">◢</div>
        </div>
      </div>

      <EmojiPickerModal
        open={showEmoji}
        onClose={() => setShowEmoji(false)}
        onSelect={(emoji) => {
          setMessage((prev) => prev + emoji);
          setShowEmoji(false);
        }}
      />
    </>
  );
};

export default MailReplyBox;
