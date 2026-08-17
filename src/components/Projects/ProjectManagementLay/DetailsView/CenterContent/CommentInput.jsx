import { useState } from "react";
import {
  Paperclip,
  SendHorizontal,
  Smile,
} from "lucide-react";

import FavoriteImage from "../../../assets/images/FavoriteImage.png";

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
        bg-white
        p-5
      "
    >
      <div className="flex gap-4">

        {/* Avatar */}
        <img
          src={FavoriteImage}
          alt="User"
          className="
            h-12
            w-12
            rounded-full
            object-cover
            flex-shrink-0
          "
        />

        {/* Right */}
        <div className="flex-1">

          {/* Textarea */}
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
              bg-[#FCFCFD]
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
          <div className="mt-4 flex items-center justify-between">

            {/* Left Buttons */}
            <div className="flex items-center gap-3">

              <button
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-[#EEF2F7]
                  text-[#98A2B3]
                  transition
                  hover:bg-[#F8FAFC]
                "
              >
                <Smile size={18} />
              </button>

              <button
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-[#EEF2F7]
                  text-[#98A2B3]
                  transition
                  hover:bg-[#F8FAFC]
                "
              >
                <Paperclip size={18} />
              </button>

            </div>

            {/* Send */}
            <button
              onClick={handleSend}
              className="
                flex
                items-center
                gap-2
                rounded-xl
                bg-[#22983A]
                px-5
                py-3
                text-[14px]
                font-medium
                text-white
                transition
                hover:bg-[#1C7D31]
              "
            >
              <SendHorizontal size={18} />

              Send
            </button>

          </div>

        </div>

      </div>
    </div>
  );
};

export default CommentInput;