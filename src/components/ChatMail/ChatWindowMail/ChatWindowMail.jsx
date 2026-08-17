import ChatHeaderMail from "./ChatHeaderMail";
import ChatMessagesMail from "./ChatMessagesMail";
import ChatInputMail from "./ChatInputMail";
import"./chatwindowmail.css"


const ChatWindowMail = ({ person, messages }) => {
  return (
    <div className="flex h-full flex-col bg-white chat-window-mail">

      {/* Header */}
      <div className="shrink-0 chat-window-mail-header">
        <ChatHeaderMail user={person} />
      </div>

      {/* Messages */}
      <div className="min-h-0 flex-1 overflow-auto chat-window-mail-messages">
        <ChatMessagesMail messages={messages} />
      </div>

      {/* Bottom Input */}
      <div className="shrink-0 chat-window-mail-input">
        <ChatInputMail />
      </div>

    </div>
  );
};

export default ChatWindowMail;