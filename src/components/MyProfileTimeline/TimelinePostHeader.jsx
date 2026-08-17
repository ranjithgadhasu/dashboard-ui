const TimelinePostHeader = ({ post }) => {
  if (!post?.author) {
    return null;
  }

  const {
    name,
    avatar,
    username,
  } = post.author;

  return (
    <div className="flex min-w-0 items-center gap-[8px]">
      {/* AVATAR */}
      <div className="relative shrink-0">
        <img
          src={avatar}
          alt={name || "User"}
          className="h-[40px] w-[40px] rounded-full object-cover"
        />

        {/* Online indicator */}

        <span
          className="
            absolute
            bottom-0
            right-0
            h-[13px]
            w-[13px]
            rounded-full
            border-[1.5px]
            border-white
            bg-[#58a447]
          "
        />

      </div>


      {/* USER INFORMATION */}

      <div className="min-w-0">

        {/* Name */}

        <div className="flex mt-2 items-center gap-[5px]">

          <h3 className="truncate text-[15px] font-normal leading-[11px] text-[#333]">
            {name}
          </h3>

        </div>


        {/* Date / Username */}

        <div className="mt-[15px] flex items-center gap-[5px]">

          {post.date && (
            <span className="text-[13px] font-normal leading-[8px] text-[#aaa]">
              {post.date}
            </span>
          )}

          {post.date && username && (
            <span className="text-[13px] text-[#d0d0d0]">
              •
            </span>
          )}

        </div>

      </div>

    </div>
  );
};

export default TimelinePostHeader;