import "./messagebuble.css"


const MessageBubbleMail = ({ message }) => {
  const isSent = message.type === "sent";

  return (
    <div
      className={`flex items-end gap-3 message-bubble-mail ${
        isSent
          ? "justify-start message-bubble-sent"
          : "justify-end message-bubble-received"
      }`}
    >
      {/* Left Avatar */}
      {isSent && (
        <img
          src={message.avatar}
          alt="User"
          className="h-10 w-10 rounded-full object-cover shrink-0 message-bubble-avatar message-bubble-avatar-left"
        />
      )}

      {/* Bubble + Time */}
      <div className="max-w-[70%] message-bubble-content">
        <div
          className={`rounded-2xl h-[60px] px-4 py-3 shadow-sm message-bubble ${
            isSent
              ? "rounded-bl-md bg-[#22C55E] text-white message-bubble-sent-content"
              : "rounded-br-md border border-[#E8EDF3] bg-white text-[#344054] message-bubble-received-content"
          }`}
        >
          <p className="whitespace-pre-wrap text-[15px] font-normal leading-6 message-bubble-text">
            {message.text}
          </p>
        </div>

        <p
          className={`mt-2 text-[11px] text-[#98A2B3] message-bubble-time ${
            isSent ? "text-left" : "text-right"
          }`}
        >
          {message.time}
        </p>
      </div>

      {/* Right Avatar */}
      {!isSent && (
        <img
          src={message.avatar}
          alt="User"
          className="h-10 w-10 rounded-full object-cover shrink-0 message-bubble-avatar message-bubble-avatar-right"
        />
      )}
    </div>
  );
};

export default MessageBubbleMail;