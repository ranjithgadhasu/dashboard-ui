const MessageImagesMail = ({ message }) => {
  const isSent = message.type === "sent";

  return (
   <div className={`flex ${isSent ? "justify-start" : "justify-end"}`}>
      <div className="max-w-[420px]">

        {/* Images */}
        <div
          className={`grid gap-2 ${
            message.images.length === 1
              ? "grid-cols-1"
              : message.images.length === 2
              ? "grid-cols-2"
              : "grid-cols-3"
          }`}
        >
          {message.images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl"
            >
              <img
                src={image}
                alt={`Shared ${index + 1}`}
                className="h-[70px] w-[70px] object-cover transition duration-300 hover:scale-105"
              />

              {/* Extra Images Overlay */}
              {index === 2 &&
                message.extra &&
                message.extra > 0 && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/55 text-lg font-semibold text-white">
                    +{message.extra}
                  </div>
                )}
            </div>
          ))}
        </div>

        {/* Time */}
        <p
          className={`mt-2 text-[11px] text-[#98A2B3] ${
            isSent ? "text-right" : "text-left"
          }`}
        >
          {message.time}
        </p>

      </div>
    </div>
  );
};

export default MessageImagesMail;