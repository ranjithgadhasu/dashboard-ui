import { useState } from "react";
import { MoreHorizontal } from "lucide-react";

import TimelinePostHeader from "./TimelinePostHeader";
import TimelinePostMedia from "./TimelinePostMedia";
import TimelinePostStats from "./TimelinePostStats";
import TimelineCommentInput from "./TimelineCommentInput";
import TimelineComments from "./TimelineComments";

const TimelinePostCard = ({ post, side = "left" }) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(post?.likes || 0);

  const [comments, setComments] = useState(post?.comments || []);

  const [showComments, setShowComments] = useState(
    (post?.comments?.length || 0) > 0,
  );

  const handleLike = () => {
    setLiked((previous) => !previous);

    setLikes((previous) => (liked ? Math.max(0, previous - 1) : previous + 1));
  };

  const handleAddComment = (text) => {
    const trimmedText = text?.trim();

    if (!trimmedText) {
      return;
    }

    const newComment = {
      id: Date.now(),

      name: "Jane Wilson",

      avatar: post?.currentUserAvatar || post?.author?.avatar,

      time: "Just now",

      text: trimmedText,

      likes: 0,

      replies: [],
    };

    setComments((previous) => [...previous, newComment]);

    setShowComments(true);
  };

  const commentsCount = post?.commentsCount ?? comments.length;

  return (
    <article
      className={`
        relative
        overflow-visible
        rounded-[7px]
        border
        border-[#e7e7e7]
        bg-white
        shadow-[0_1px_3px_rgba(0,0,0,0.025)]
        ${side === "left" ? "lg:mr-[12px]" : "lg:ml-[12px]"}
      `}
    >
      {/* Horizontal connector */}

      <span
        className={`
          absolute
          top-[22px]
          hidden
          h-px
          w-[12px]
          bg-[#dfe3e5]
          lg:block
          ${side === "left" ? "-right-[12px]" : "-left-[12px]"}
        `}
      />

      {/* Timeline dot */}

      <span
        className={`
          absolute
          top-[19px]
          hidden
          h-[13px]
          w-[13px]
          rounded-full
          border-[2px]
          border-[#f5f6f7]
          bg-[#21943a]
          lg:block
          ${side === "left" ? "-right-[16px]" : "-left-[16px]"}
        `}
      />

      <div className="flex items-center justify-between px-[12px] pt-[11px]">
        <TimelinePostHeader post={post} />

        {/* More button */}

        <button
          type="button"
          aria-label="More options"
          className="
            flex
            h-[20px]
            w-[20px]
            shrink-0
            items-center
            justify-center
            rounded-[4px]
            text-[#aaa]
            transition
            hover:bg-[#f5f5f5]
            hover:text-[#555]
          "
        >
          <MoreHorizontal size={11} strokeWidth={2} />
        </button>
      </div>

      {post?.media && (
        <div className="px-[12px]">
          <TimelinePostMedia post={post} />
        </div>
      )}

      {post?.content && (
        <div className="px-[12px]">
          <p className="mt-[14px] font-normal leading-[1.6] text-[#666]">
            {post.content}
          </p>
        </div>
      )}

      <div className="px-[12px]">
        <TimelinePostStats
          post={{
            ...post,
            likes,
            commentsCount,
          }}
          liked={liked}
          onLike={handleLike}
          onCommentClick={() => setShowComments((previous) => !previous)}
        />
      </div>

      <div className="px-[12px] pb-[12px]">
        <TimelineCommentInput onSubmit={handleAddComment} />
      </div>

      {showComments && comments.length > 0 && (
        <div className="border-t border-[#f0f0f0] px-[12px] py-[11px]">
          <TimelineComments comments={comments} />
        </div>
      )}
    </article>
  );
};

export default TimelinePostCard;
