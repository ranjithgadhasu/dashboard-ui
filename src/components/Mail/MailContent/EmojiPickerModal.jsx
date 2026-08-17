import { Search } from "lucide-react";
import { popularEmojis, smileyEmojis, bottomTabs } from "./emojiData";

import "./emojipickermodal.css";

const EmojiPickerModal = ({ open, onSelect, onClose }) => {
  if (!open) return null;

  return (
    <>
      <div className="fixed inset-0 z-40" onClick={onClose} />

      <div className="emoji-picker-modal absolute bottom-[72px] left-[905px] z-50 w-[264px] overflow-hidden rounded-2xl border border-[#E6EBF2] bg-white shadow-2xl">
        {/* Search */}
        <div className="p-4">
          <div className="flex h-11 items-center gap-3 rounded-full bg-[#F7F8FB] px-4">
            <Search size={18} className="text-[#8A9099]" />

            <input
              placeholder="Search..."
              className="flex-1 bg-transparent text-[15px] outline-none"
            />
          </div>
        </div>

        {/* Popular */}
        <div className="px-5">
          <p className="mb-3 text-xs font-semibold uppercase text-[#8A9099]">
            Popular
          </p>

          <div className="mb-5 flex justify-between text-[28px]">
            {popularEmojis.map((emoji) => (
              <button
                key={emoji}
                onClick={() => onSelect?.(emoji)}
                className="transition hover:scale-125"
              >
                {emoji}
              </button>
            ))}
          </div>
        </div>

        <div className="border-t border-[#EEF2F7]" />

        {/* Smileys */}
        <div className="px-5 py-4">
          <p className="mb-3 text-xs font-semibold uppercase text-[#8A9099]">
            Smileys
          </p>

          <div className="grid grid-cols-7 gap-3">
            {smileyEmojis.map((emoji, index) => (
              <button
                key={index}
                onClick={() => onSelect?.(emoji)}
                className="text-[28px] transition hover:scale-125"
              >
                {emoji}
              </button>
            ))}
          </div>
        </div>

        <div className="border-t border-[#EEF2F7]" />

        {/* Bottom */}
        <div className="flex items-center justify-between px-5 py-3">
          {bottomTabs.map((emoji, index) => (
            <button
              key={index}
              className="text-[22px] opacity-70 transition hover:opacity-100"
            >
              {emoji}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default EmojiPickerModal;
