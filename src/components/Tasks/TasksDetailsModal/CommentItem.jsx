import {
  Heart,
  Reply,
  MoreHorizontal,
} from "lucide-react";

const CommentItem = ({ comment }) => {
  return (
    <div className="mb-8">

      {/* Header */}
      <div className="flex items-start justify-between">

        <div className="flex items-center gap-3">

          {/* Avatar */}
          <img
            src={comment.avatar}
            alt={comment.user}
            className="h-11 w-11 rounded-full object-cover"
          />

          {/* User */}
          <div>

            <h4 className="text-[15px] font-semibold text-[#344054]">
              {comment.user}
            </h4>

            <p className="mt-1 text-[12px] text-[#98A2B3]">
              {comment.time}
            </p>

          </div>

        </div>

        {/* Menu */}
        <button
          type="button"
          className="
            rounded-lg
            p-2
            transition
            hover:bg-[#F8F9FB]
          "
        >
          <MoreHorizontal
            size={18}
            className="text-[#98A2B3]"
          />
        </button>

      </div>

      {/* Message */}
      <p className="mt-4 pl-14 text-[15px] leading-7 text-[#667085]">
        {comment.message}
      </p>

      {/* Images */}
      {comment.images?.length > 0 && (

        <div className="mt-5 ml-14 flex gap-3">

          {comment.images.map((image, index) => (

            <div
              key={index}
              className="relative"
            >

              <img
                src={image}
                alt=""
                className="
                  h-20
                  w-20
                  rounded-xl
                  object-cover
                "
              />

              {index === 2 && comment.moreImages > 0 && (

                <div
                  className="
                    absolute
                    inset-0
                    flex
                    items-center
                    justify-center
                    rounded-xl
                    bg-black/50
                    text-[18px]
                    font-semibold
                    text-white
                  "
                >
                  +{comment.moreImages}
                </div>

              )}

            </div>

          ))}

        </div>

      )}

      {/* Footer */}
      <div className="mt-5 ml-14 flex items-center gap-6">

        <button
          type="button"
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
        </button>

        <button
          type="button"
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