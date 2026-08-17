const CommentItem = ({ comment }) => {
  return (
    <div className="flex items-start gap-4">

      {/* Avatar */}
      <img
        src={comment.avatar}
        alt={comment.user}
        className="h-11 w-11 rounded-full object-cover flex-shrink-0"
      />

      {/* Content */}
      <div className="flex-1">

        {/* Name & Time */}
        <div className="flex items-center gap-3">

          <h4 className="text-[16px] font-semibold text-[#344054]">
            {comment.user}
          </h4>

          <span className="text-[14px] text-[#98A2B3]">
            {comment.time}
          </span>

        </div>

        {/* Message */}
        <p className="mt-2 whitespace-pre-line text-[16px] leading-7 text-[#667085]">
          {comment.message}
        </p>

        {/* Images */}
        {comment.images?.length > 0 && (
          <div className="mt-5 flex items-center gap-4">

            {comment.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt=""
                className="
                  h-[74px]
                  w-[74px]
                  rounded-2xl
                  object-cover
                "
              />
            ))}

            {comment.extraImages > 0 && (
              <div
                className="
                  flex
                  h-[64px]
                  w-[64px]
                  items-center
                  justify-center
                  rounded-2xl
                  bg-[#ECFDF3]
                  text-[15px]
                  font-medium
                  text-[#22983A]
                "
              >
                +{comment.extraImages}
              </div>
            )}

          </div>
        )}

      </div>

    </div>
  );
};

export default CommentItem;