import { messages } from "../dataMailChat/dataMailChat";
import MessageBubbleMail from "./MessageBubbleMail";
import MessageImagesMail from "./MessageImagesMail";
import MessageFileMail from "./MessageFileMail";
import "./chatmessagemail.css"

const ChatMessagesMail = () => {
  return (
    <div className="flex-1 overflow-y-auto bg-[#F8F9FB] px-6 py-6 chat-messages-mail">

      <div className="mx-auto flex max-w-[820px] flex-col gap-5 chat-messages-mail-container">

        {messages.map((message) => {
          switch (message.type) {

            case "sent":
            case "received":
              return (
                <MessageBubbleMail
                  key={message.id}
                  message={message}
                />
              );

            case "images":
              return (
                <MessageImagesMail
                  key={message.id}
                  message={message}
                />
              );

            case "file":
              return (
                <MessageFileMail
                  key={message.id}
                  message={message}
                />
              );

            case "divider":
              return (
                <div
                  key={message.id}
                  className="relative my-2 flex items-center chat-message-divider"
                >
                  <div className="flex-1 border-t border-[#E6EBF2]" />

                  <span className="mx-4 rounded-full bg-white px-3 py-1 text-xs font-medium text-[#98A2B3] shadow-sm">
                    {message.label}
                  </span>

                  <div className="flex-1 border-t border-[#E6EBF2]" />
                </div>
              );

            default:
              return null;
          }
        })}

      </div>

    </div>
  );
};

export default ChatMessagesMail;