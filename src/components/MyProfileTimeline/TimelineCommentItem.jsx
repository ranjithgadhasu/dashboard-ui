import { useState } from "react";
import { Heart } from "lucide-react";

const TimelineCommentItem = ({ comment }) => {
  const [liked, setLiked] = useState(false);

  const [likes, setLikes] = useState(comment?.likes || 0);

  if (!comment) {
    return null;
  }

  // ============================================================
  // LIKE COMMENT
  // ============================================================

  const handleLike = () => {
    setLiked((previous) => !previous);

    setLikes((previous) => (liked ? Math.max(0, previous - 1) : previous + 1));
  };

  return (
    <div
      className={`flex items-start gap-[7px] ${
        comment.isReply ? "ml-[22px]" : ""
      }`}
    >
      {/* ======================================================
          AVATAR
      ======================================================= */}

      <img
        src={comment.avatar}
        alt={comment.name || "User"}
        className="
          h-[40px]
          w-[40px]
          shrink-0
          rounded-full
          object-cover
        "
      />

      {/* COMMENT CONTENT */}

      <div className="min-w-0 flex-1">
        {/* NAME + TIME + MORE */}

        <div className="flex items-start justify-between">
          <div className="flex min-w-0 items-center gap-[7px]">
            <span className="truncate text-[14px] font-medium leading-[10px] text-[#333]">
              {comment.name}
            </span>

            <span className="shrink-0 text-[10px] font-normal leading-[10px] text-[#aaa]">
              {comment.time}
            </span>
          </div>
        </div>

        {/* ====================================================
            COMMENT TEXT
        ===================================================== */}

        <p className="mt-[2px] pr-[4px] text-[15px] font-normal leading-[1.45] text-[#666]">
          {comment.text}
        </p>

        {/* ====================================================
            ACTIONS
        ===================================================== */}

        <div className="mt-[5px] flex items-center gap-[10px]">
          {/* LIKE */}

          <button
            type="button"
            onClick={handleLike}
            className={`
              flex
              items-center
              gap-[3px]
              transition

              ${liked ? "text-[#ff6868]" : "text-[#999]"}
            `}
          >
            <Heart
              size={20}
              strokeWidth={1.8}
              className={liked ? "fill-current" : ""}
            />

            <span className="text-[14px] font-normal">
              {likes > 0 ? likes : "Like"}
            </span>
          </button>
        </div>

        {/* ====================================================
            NESTED REPLIES
        ===================================================== */}

        {comment.replies?.length > 0 && (
          <div className="mt-[9px] space-y-[9px]">
            {comment.replies.map((reply) => (
              <TimelineCommentItem
                key={reply.id}
                comment={{
                  ...reply,
                  isReply: true,
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TimelineCommentItem;
