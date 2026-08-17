import { useNavigate } from "react-router-dom";

const ChatSidebarItemMail = ({ item, active = false }) => {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      onClick={() => navigate(`/chat/${item.id}`)}
      className={`flex w-full items-center gap-3 border-b border-[#F2F4F7] px-5 py-4 text-left transition-all duration-200 ${
        active
          ? "bg-[#F8FAFC]"
          : "hover:bg-[#F9FAFB]"
      }`}
    >
      {/* Avatar */}
      <div className="relative shrink-0">

        <img
          src={item.avatar}
          alt={item.name}
          className="h-10 w-10 rounded-full object-cover"
        />

        {item.online && (
          <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-white bg-[#22C55E]" />
        )}

      </div>

      {/* Text */}
      <div className="min-w-0 flex-1">

        <div className="flex items-center justify-between">

          <h4 className="truncate text-[13px] font-medium text-[#344054]">
            {item.name}
          </h4>

          {item.unread > 0 && (
            <span className="flex h-5 min-w-[20px] items-center justify-center rounded-full bg-[#FF6B6B] px-1 text-[10px] font-semibold text-white">
              {item.unread}
            </span>
          )}

        </div>

        <p className="mt-1 truncate text-[12px] text-[#98A2B3]">
          {item.message}
        </p>

      </div>

    </button>
  );
};

export default ChatSidebarItemMail;