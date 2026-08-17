import { useLocation, useNavigate } from "react-router-dom"; 
import "./chatusermailcard.css"

const ChatUserCardMail = ({ user }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const active = location.pathname === `/chatmail/${user.id}`;

  const handleClick = () => {
    navigate(`/chatmail/${user.id}`);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`group flex w-full items-center gap-3 border-b border-[#EEF2F7] px-4 py-4 text-left transition-all duration-200 chat-user-card-mail
      ${
        active
          ? "bg-[#F8FAFC]"
          : "bg-white hover:bg-[#F8FAFC]"
      }`}
    >
      {/* Avatar */}
      <div className="relative flex-shrink-0 chat-user-card-avatar-wrapper">
        <img
          src={user.avatar}
          alt={user.name}
          className="h-11 w-11 rounded-full object-cover chat-user-card-avatar"
        />

        {user.online && (
          <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-[#22C55E] chat-user-card-online" />
        )}
      </div>

      {/* Right Content */}
      <div className="min-w-0 flex-1 chat-user-card-content">

        {/* Top */}
        <div className="flex items-center justify-between chat-user-card-top">

          <h4 className="truncate text-[14px] font-medium text-[#344054] chat-user-card-name">
            {user.name}
          </h4>

          {user.time && (
            <span className="ml-3 whitespace-nowrap text-[11px] text-[#98A2B3] chat-user-card-time">
              {user.time}
            </span>
          )}

        </div>

        {/* Bottom */}
        <div className="mt-1 flex items-center justify-between chat-user-card-bottom">

          <p className="truncate pr-3 text-[12px] text-[#98A2B3] chat-user-card-message">
            {user.message}
          </p>

          {user.unread > 0 && (
            <span className="flex h-5 min-w-[18px] items-center justify-center rounded-full bg-[#FF5E5E] px-1 text-[10px] font-semibold text-white chat-user-card-unread">
              {user.unread}
            </span>
          )}

        </div>

      </div>
    </button>
  );
};

export default ChatUserCardMail;