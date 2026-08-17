import { Heart } from "lucide-react";

const CommentItemTwo = ({ comment }) => {
  if (!comment) return null;

  return (
    <div
      className={`flex items-start gap-2 ${
        comment.isReply
          ? "ml-5"
          : ""
      }`}
    >

      <img
        src={comment.avatar}
        alt={comment.name}
        className="h-[18px] w-[18px] shrink-0 rounded-full object-cover"
      />

      <div className="min-w-0">

        <div className="flex items-center gap-2">

          <span className="text-[6px] font-medium text-[#444]">
            {comment.name}
          </span>

          <span className="text-[5px] text-[#aaa]">
            {comment.time}
          </span>
        </div>
        <p className="mt-1 text-[6px] leading-[1.4] text-[#666]">
          {comment.text}
        </p>
        <div className="mt-1 flex items-center gap-2">

          <Heart
            size={7}
            className="fill-[#ff6868] text-[#ff6868]"
          />

          {comment.likes > 0 && (
            <span className="text-[5px] text-[#666]">
              {comment.likes}
            </span>
          )}

        </div>


        {/* Nested Replies */}

        {comment.replies?.length > 0 && (

          <div className="mt-2 space-y-2">

            {comment.replies.map((reply) => (

              <CommentItemTwo
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

export default CommentItemTwo;