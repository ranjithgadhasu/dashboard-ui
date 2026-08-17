import { useState } from "react";

import {
  Heart,
  MessageCircle,
  Send,
  Smile,
} from "lucide-react";

import CommentItemTwo from "./CommentItemTwo";

const PostCardTwo = ({ post }) => {
  const [liked, setLiked] = useState(false);

  const [likes, setLikes] = useState(
    post.likes || 0
  );

  const [commentText, setCommentText] = useState("");


  const handleLike = () => {
    setLiked((previous) => !previous);

    setLikes((previous) =>
      liked
        ? previous - 1
        : previous + 1
    );
  };


  const handleComment = () => {
    if (!commentText.trim()) return;

    setCommentText("");
  };


  return (
    <article className="overflow-hidden rounded-[4px] border border-[#e7e7e7] bg-white">

      {/* =====================================================
          HEADER
      ====================================================== */}

      <div className="flex items-center gap-2 px-3 py-2">

        <img
          src={post.author.avatar}
          alt={post.author.name}
          className="h-[22px] w-[22px] rounded-full object-cover"
        />

        <div>

          <p className="text-[7px] font-medium text-[#444]">
            {post.author.name}
          </p>

          <p className="text-[5.5px] text-[#aaa]">
            {post.time}
          </p>

        </div>

      </div>


      {/* =====================================================
          IMAGE
      ====================================================== */}

      {post.image && (
        <div className="px-3">

          <img
            src={post.image}
            alt={post.imageAlt || "Post"}
            className="max-h-[280px] w-full rounded-[4px] object-cover"
          />

        </div>
      )}


      {/* =====================================================
          CONTENT
      ====================================================== */}

      {post.content && (
        <p className="px-3 pt-2 text-[6.5px] leading-[1.5] text-[#666]">
          {post.content}
        </p>
      )}


      {/* =====================================================
          COUNTS
      ====================================================== */}

      <div className="flex items-center gap-4 px-3 pt-2">

        <button
          type="button"
          onClick={handleLike}
          className="flex items-center gap-1"
        >

          <Heart
            size={8}
            className="fill-[#ff6868] text-[#ff6868]"
          />

          <span className="text-[6px] text-[#555]">
            {likes}
          </span>

        </button>


        <div className="flex items-center gap-1">

          <MessageCircle
            size={8}
            className="text-[#888]"
          />

          <span className="text-[6px] text-[#555]">
            {post.commentsCount || 0}
          </span>

        </div>

      </div>


      {/* =====================================================
          COMMENT INPUT
      ====================================================== */}

      <div className="px-3 py-2">

        <div className="flex h-[26px] items-center rounded-[5px] border border-[#e5e5e5] px-2">

          <input
            type="text"
            value={commentText}
            onChange={(event) =>
              setCommentText(event.target.value)
            }
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                handleComment();
              }
            }}
            placeholder="Write a comment..."
            className="min-w-0 flex-1 bg-transparent text-[6px] outline-none placeholder:text-[#aaa]"
          />

          <Smile
            size={9}
            className="mr-2 text-[#999]"
          />

          <button
            type="button"
            onClick={handleComment}
            className="text-[#21943a]"
          >
            <Send size={9} />
          </button>

        </div>

      </div>


      {/* =====================================================
          COMMENTS
      ====================================================== */}

      {post.comments?.length > 0 && (

        <div className="space-y-3 px-3 pb-3">

          {post.comments.map((comment) => (

            <CommentItemTwo
              key={comment.id}
              comment={comment}
            />

          ))}

        </div>

      )}

    </article>
  );
};

export default PostCardTwo;