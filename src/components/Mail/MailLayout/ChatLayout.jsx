import { Outlet, useLocation } from "react-router-dom";
import ChatListMail from "../../ChatMail/ChatListMail/ChatListMail";
import ChatMainSideBarMail from "../../ChatMail/ChatSidebarMail/ChatMainSideBarMail";
import ChatProfileSidebar from "../../ChatMail/ChatProfile/ChatProfileSidebar";
import "./chatlayout.css"

const ChatMailLayout = () => {
  const location = useLocation();

  // /chatmail       = chat list
  // /chatmail/:id   = opened chat
  const isChatOpen = location.pathname !== "/chatmail";

  return (
    <div className="flex h-screen overflow-hidden bg-[#F8F9FB] chat-mail-layout">

      {/* Main Sidebar */}
      <ChatMainSideBarMail />

      {/* Chat List */}
      <div
        className={`w-[380px] shrink-0 border-r border-[#E9EDF5] bg-white chat-mail-list ${
          isChatOpen ? "chat-mail-list-open-chat" : ""
        }`}
      >
        <ChatListMail />
      </div>

      {/* Chat Window */}
      <div
        className={`flex min-w-0 flex-1 flex-col bg-white chat-mail-window ${
          isChatOpen ? "chat-mail-window-open" : ""
        }`}
      >
        <Outlet />
      </div>

      {/* Profile */}
      <div className="chat-mail-profile">
        <ChatProfileSidebar />
      </div>

    </div>
  );
};

export default ChatMailLayout;