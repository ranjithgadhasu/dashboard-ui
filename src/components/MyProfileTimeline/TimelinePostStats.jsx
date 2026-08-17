import { Heart } from "lucide-react";
import { LuMessageSquareText } from "react-icons/lu";

const TimelinePostStats = ({ post, liked = false, onLike, onCommentClick }) => {
  return (
    <div className="mt-[11px] flex items-center justify-between border-t border-[#f0f0f0] pt-[9px]">
      {/* =====================================================
          LEFT
      ====================================================== */}

      <div className="flex items-center gap-[14px]">
        {/* LIKE */}

        <button
          type="button"
          onClick={onLike}
          className={`flex items-center gap-[4px] transition ${
            liked ? "text-[#ff6868]" : "text-[#888]"
          }`}
        >
          <Heart
            size={20}
            strokeWidth={1.8}
            className={liked ? "fill-current" : ""}
          />

          <span className="text-[14px] font-normal">{post.likes || 0}</span>
        </button>

        {/* COMMENTS */}

        <button
          type="button"
          onClick={onCommentClick}
          className="flex items-center gap-[4px] text-[#888] transition hover:text-[#555]"
        >
          <LuMessageSquareText size={20} strokeWidth={1.0} />

          <span className="text-[14px] font-normal">{post.commentsCount || 0}</span>
        </button>
      </div>
    </div>
  );
};

export default TimelinePostStats;
