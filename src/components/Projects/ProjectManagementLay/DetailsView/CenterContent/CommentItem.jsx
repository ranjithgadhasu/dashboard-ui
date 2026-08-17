import {
  Heart,
  Reply,
  MoreHorizontal,
} from "lucide-react";

const CommentItem = ({ comment }) => {
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
      {/* Header */}
      <div className="flex items-start justify-between">

        {/* User */}
        <div className="flex items-center gap-3">

          <img
            src={comment.avatar}
            alt={comment.user}
            className="
              h-12
              w-12
              rounded-full
              object-cover
            "
          />

          <div>

            <h4
              className="
                text-[15px]
                font-semibold
                text-[#344054]
              "
            >
              {comment.user}
            </h4>

            <p
              className="
                mt-1
                text-[13px]
                text-[#98A2B3]
              "
            >
              {comment.role}
            </p>

          </div>

        </div>

        {/* Right */}
        <div className="flex items-center gap-3">

          <span
            className="
              text-[13px]
              text-[#98A2B3]
            "
          >
            {comment.time}
          </span>

          <button
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-lg
              transition
              hover:bg-[#F8FAFC]
            "
          >
            <MoreHorizontal
              size={18}
              className="text-[#98A2B3]"
            />
          </button>

        </div>

      </div>

      {/* Message */}
      <p
        className="
          mt-5
          text-[15px]
          leading-7
          text-[#667085]
        "
      >
        {comment.message}
      </p>

      {/* Footer */}
      <div
        className="
          mt-5
          flex
          items-center
          gap-6
        "
      >
        <button
          className="
            flex
            items-center
            gap-2
            text-[14px]
            font-medium
            text-[#98A2B3]
            transition
            hover:text-[#22983A]
          "
        >
          <Heart size={17} />

          Like

          <span>({comment.likes})</span>
        </button>

        <button
          className="
            flex
            items-center
            gap-2
            text-[14px]
            font-medium
            text-[#98A2B3]
            transition
            hover:text-[#22983A]
          "
        >
          <Reply size={17} />

          Reply
        </button>

      </div>
    </div>
  );
};

export default CommentItem;