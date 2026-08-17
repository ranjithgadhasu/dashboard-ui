import { useState } from "react";
import { Paperclip } from "lucide-react";
import { Smile, Image } from "lucide-react";
import FavoriteImage from "../../../../assets/images/FavoriteImage.png";

const CommentInput = ({ onSend }) => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message.trim()) return;

    onSend?.(message);

    setMessage("");
  };

  return (
    <div
      className="
        rounded-2xl
        border
        border-[#EEF2F7]
        bg-[#FCFCFD]
        p-5
      "
    >
      <div className="flex items-start gap-4">
        {/* Avatar */}
        <img
          src={FavoriteImage}
          alt="User"
          className="
            h-11
            w-11
            rounded-full
            object-cover
          "
        />

        {/* Input Area */}
        <div className="flex-1">
          <textarea
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write a comment..."
            className="
              w-full
              resize-none
              rounded-xl
              border
              border-[#E4E7EC]
              bg-white
              p-4
              text-[15px]
              text-[#344054]
              placeholder:text-[#98A2B3]
              outline-none
              transition
              focus:border-[#22983A]
            "
          />

          {/* Bottom */}
        {/* Bottom */}
<div className="mt-4 flex items-center justify-between">

  {/* Left Button */}
  <button
    onClick={handleSend}
    className="
      h-[40px]
      rounded-[10px]
      bg-[#22983A]
      px-6
      text-[15px]
      font-medium
      text-white
      transition
      hover:bg-[#1D8133]
    "
  >
    Comment
  </button>

  {/* Right Icons */}
  <div className="flex items-center gap-5">

    <button className="text-[#98A2B3] transition hover:text-[#22983A]">
      <Paperclip size={20} />
    </button>

    <button className="text-[#98A2B3] transition hover:text-[#22983A]">
      <Smile size={20} />
    </button>

    <button className="text-[#98A2B3] transition hover:text-[#22983A]">
      <Image size={20} />
    </button>

  </div>

</div>
        </div>
      </div>
    </div>
  );
};

export default CommentInput;
