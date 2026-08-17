import {
  Send,
  ChevronDown,
  Clock3,
  Paperclip,
} from "lucide-react";

const ComposeFooter = ({
  form,
  onSend,
}) => {
  const isDisabled =
    !form.subject.trim() ||
    !form.message.trim();

  return (
    <div className="flex items-center justify-between border-t border-[#E5E7EB] bg-white px-6 py-4">

      {/* Left */}
      <div className="flex items-center gap-3">

        {/* Send Button */}
        <button
          type="button"
          onClick={onSend}
          disabled={isDisabled}
          className="
            flex
            items-center
            rounded-lg
            overflow-hidden
            bg-[#22C55E]
            text-white
            shadow-sm
            transition
            hover:bg-[#16A34A]
            disabled:cursor-not-allowed
            disabled:opacity-50
          "
        >
          <span className="flex items-center gap-2 px-5 py-2.5 text-sm font-medium">
            <Send size={16} />
            Send
          </span>

          <span className="border-l border-white/20 px-3 py-2.5">
            <ChevronDown size={16} />
          </span>
        </button>

        {/* Schedule Send */}
        <button
          type="button"
          title="Schedule Send"
          className="
            rounded-lg
            p-2.5
            text-[#6B7280]
            transition
            hover:bg-[#F3F4F6]
            hover:text-[#22C55E]
          "
        >
          <Clock3 size={19} />
        </button>

        {/* Attach */}
        <button
          type="button"
          title="Attach File"
          className="
            rounded-lg
            p-2.5
            text-[#6B7280]
            transition
            hover:bg-[#F3F4F6]
            hover:text-[#22C55E]
          "
        >
          <Paperclip size={19} />
        </button>

      </div>

      {/* Right */}
      <span className="text-sm text-[#98A2B3]">
        Draft saved automatically
      </span>

    </div>
  );
};

export default ComposeFooter;