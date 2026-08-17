import ChatHeader from "./ChatHeader";
import ChatConversation from "./ChatConversation";
import ChatList from "./ChatList";
import ChatInput from "./ChatInput";

const ChatDrawer = ({ show, onClose }) => {
  return (
    <div
      className={`fixed inset-0 z-[9999] transition-all duration-300 ${
        show ? "visible bg-black/30" : "invisible bg-transparent"
      }`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0"
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`absolute right-0 top-0 flex h-screen w-[492px] flex-col bg-white shadow-2xl transition-transform duration-300 ${
          show ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <ChatHeader onClose={onClose} />

        {/* Body */}
        <div className="flex flex-1 overflow-hidden">

          {/* Conversation Section */}
          <div className="flex flex-1 flex-col overflow-hidden">

            {/* Messages */}
            <ChatConversation />

            {/* Input */}
            <ChatInput />

          </div>

          {/* Right Users */}
          <ChatList />

        </div>
      </div>
    </div>
  );
};

export default ChatDrawer;