import { X } from "lucide-react";
import { useState } from "react";

const ComposeRecipients = ({
  recipients = [],
  cc = "",
  bcc = "",
  onRemove,
  onChange,
}) => {
  const [input, setInput] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && input.trim()) {
      e.preventDefault();

      onChange("to", [...recipients, input.trim()]);
      setInput("");
    }
  };

  return (
    <div className="space-y-2">
      {/* Label */}
      <div className="flex items-center justify-between">
        <label className="text-[14px] font-normal text-[#667085]">
          To
        </label>
        <div className="flex items-center gap-5">
          <button
            type="button"
            className="text-[14px] font-medium text-[#667085] hover:underline"
          >
            Cc
          </button>

          <button
            type="button"
            className="text-[14px] font-medium text-[#667085] hover:underline"
          >
            Bcc
          </button>
        </div>
      </div>
      {/* Input Box */}
      <div className="flex min-h-[40px] flex-wrap items-center gap-2 rounded-xl border border-[#E5E7EB] bg-white px-3 py-2 transition focus-within:border-[#22C55E] focus-within:ring-2 focus-within:ring-[#22C55E]/20">
        {/* Recipient Chips */}
        {recipients.map((person, index) => (
          <div
            key={index}
            className="flex items-center gap-2 rounded-full bg-[#F3F4F6] px-3 py-1.5"
          >
            <span className="text-sm font-medium text-[#344054]">
              {person}
            </span>

            <button
              type="button"
              onClick={() => onRemove(index)}
              className="rounded-full p-0.5 hover:bg-[#E5E7EB]"
            >
              <X
                size={14}
                className="text-[#667085]"
              />
            </button>
          </div>
        ))}

        {/* Text Input */}
        <input
          type="email"
          value={input}
          placeholder="Add recipient"
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="min-w-[160px] flex-1 border-none bg-transparent text-sm text-[#344054] outline-none placeholder:text-[#98A2B3]"
        />
      </div>

      {/* Optional CC */}
      {cc && (
        <div className="rounded-xl border border-[#E5E7EB] p-3">
          <label className="mb-2 block text-xs font-medium text-[#667085]">
            Cc
          </label>

          <input
            type="email"
            value={cc}
            onChange={(e) => onChange("cc", e.target.value)}
            className="w-full border-none outline-none text-sm"
          />
        </div>
      )}

      {/* Optional BCC */}
      {bcc && (
        <div className="rounded-xl border border-[#E5E7EB] p-3">
          <label className="mb-2 block text-xs font-medium text-[#667085]">
            Bcc
          </label>
          <input
            type="email"
            value={bcc}
            onChange={(e) => onChange("bcc", e.target.value)}
            className="w-full border-none outline-none text-sm"
          />
        </div>
      )}
    </div>
  );
};

export default ComposeRecipients;