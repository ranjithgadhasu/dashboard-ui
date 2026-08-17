import { useState } from "react";
import {
  Smile,
  Send,
} from "lucide-react";

const TimelineCommentInput = ({ onSubmit }) => {
  const [commentText, setCommentText] = useState("");

  const handleSubmit = () => {
    const trimmedText = commentText.trim();

    if (!trimmedText) return;

    if (onSubmit) {
      onSubmit(trimmedText);
    }

    setCommentText("");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="mt-[12px] w-full">

      {/* =====================================================
          COMMENT INPUT
      ====================================================== */}

      <div className="flex h-[56px] w-full items-center rounded-[7px] border border-[#e5e5e5] bg-white px-[9px]">

        {/* =================================================
            INPUT
        ================================================== */}

        <input
          type="text"
          value={commentText}
          onChange={(event) => {
            setCommentText(event.target.value);
          }}
          onKeyDown={handleKeyDown}
          placeholder="Write a comment..."
          className="
            min-w-0
            flex-1
            bg-transparent
            text-[14px]
            font-normal
            leading-none
            text-[#555]
            outline-none
            placeholder:text-[#aaa]
          "
        />


        {/* =================================================
            EMOJI
        ================================================== */}

        <button
          type="button"
          aria-label="Add emoji"
          className="
            mr-[8px]
            flex
            shrink-0
            items-center
            justify-center
            text-[#8d969e]
            transition
            cursor-pointer
            hover:text-[#555]
          "
        >
          <Smile
            size={20}
            strokeWidth={1.8}
          />
        </button>


        {/* =================================================
            SEND
        ================================================== */}

        <button
          type="button"
          onClick={handleSubmit}
          disabled={!commentText.trim()}
          aria-label="Send comment"
          className={`
            flex
            rotate-[45deg]
            shrink-0
            items-center
            justify-center
            transition
            cursor-pointer
            ${
              commentText.trim()
                ? "text-[#21943a]"
                : "text-[#21943a]"
            }
          `}
        >
          <Send
            size={20}
            strokeWidth={6.2}
          />
        </button>

      </div>

    </div>
  );
};

export default TimelineCommentInput;