import { useState } from "react";
import { IoArrowUndoOutline } from "react-icons/io5";
import {
  Heart,
} from "lucide-react";

const CommentItem = ({ comment }) => {
  const [liked, setLiked] = useState(false);

  const [likes, setLikes] = useState(
    comment?.likes ?? 0
  );

  if (!comment) {
    return null;
  }

  // LIKE COMMENT //

  const handleLike = () => {
    setLiked((previous) => !previous);

    setLikes((previous) =>
      liked ? previous - 1 : previous + 1
    );
  };

  return (
    <div
      className={`flex items-start ${
        comment.isReply
          ? "ml-[48px]"
          : ""
      }`}
    >

      {/* AVATAR  */}

      <img
        src={comment.avatar}
        alt={comment.name}
        className="h-[38px] w-[38px] shrink-0 rounded-full object-cover"
      />
      {/* COMMENT BODY */}
      <div className="ml-[14px] min-w-0 flex-1">

        {/* NAME + TIME */}

        <div className="flex items-center gap-[12px]">

          <span className="text-[15px] font-medium leading-[22px] text-[#3f434a]">
            {comment.name}
          </span>

          <span className="text-[12px] font-normal leading-[20px] text-[#9aa0a8]">
            {comment.time}
          </span>

        </div>


        {/* COMMENT TEXT */}

        <p className="mt-[2px] text-[15px] font-normal leading-[23px] text-[#5f646d]">
          {comment.text}
        </p>


        {/* ACTIONS*/}

        <div className="mt-[10px] flex items-center gap-[22px]">

          {/* LIKE */}

          <button
            type="button"
            onClick={handleLike}
            className="flex items-center gap-[7px]"
          >

            <Heart
              size={17}
              strokeWidth={1.8}
              className={
                likes > 0 || liked
                  ? "fill-[#ff6b6b] text-[#ff6b6b]"
                  : "text-[#9299a3]"
              }
            />

            {likes > 0 && (
              <span className="text-[13px] text-[#444]">
                {likes}
              </span>
            )}

          </button>


          {/* REPLY */}

          <button
            type="button"
            aria-label="Reply"
            className="flex items-center text-[#9299a3] transition hover:text-[#555]"
          >

            <IoArrowUndoOutline
              size={17}
              strokeWidth={1.8}
            />

          </button>

        </div>


        {/* NESTED REPLIES */}

        {Array.isArray(comment.replies) &&
          comment.replies.length > 0 && (

            <div className="mt-[34px] space-y-[34px]">

              {comment.replies.map((reply) => (

                <CommentItem
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

export default CommentItem;