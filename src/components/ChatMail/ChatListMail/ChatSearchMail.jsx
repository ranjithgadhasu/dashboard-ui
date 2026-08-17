import { Search } from "lucide-react"; 
import"./ChatSearchMail.css"

const ChatSearchMail = ({
  value = "",
  onChange = () => {},
}) => {
  return (
    <div className="relative chat-search-mail">
      {/* Search Icon */}
      <Search
        size={15}
        strokeWidth={2}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A0A8B7] chat-search-mail-icon"
      />

      {/* Input */}
      <input
        type="text"
        value={value}
        name="chat-search"
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search..."
        className="
          h-11
          w-full
          rounded-lg
          border
          border-[#EEF2F7]
          bg-[#F8F9FB]
          pl-10
          pr-4
          text-[13px]
          font-normal
          text-[#344054]
          placeholder:text-[#98A2B3]
          outline-none
          transition-all
          duration-200
          focus:border-[#22C55E]
          focus:bg-white
          focus:ring-0
          chat-search-mail-input
        "
      />
    </div>
  );
};

export default ChatSearchMail;