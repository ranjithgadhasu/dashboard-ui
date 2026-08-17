import { useState } from "react";
import {
  Heart,
  Send,
  Smile,
} from "lucide-react";
import { BiCommentDetail } from "react-icons/bi";

import CommentItem from "./CommentItem";
import "./PostCard.css";

const PostCard = ({ post }) => {
  const [liked, setLiked] = useState(post.liked || false);
  const [likes, setLikes] = useState(post.likes || 0);
  const [commentText, setCommentText] = useState("");

  const handleLike = () => {
    setLiked((previous) => !previous);

    setLikes((previous) =>
      liked ? previous - 1 : previous + 1
    );
  };

  const handleCommentSubmit = () => {
    if (!commentText.trim()) return;

    setCommentText("");
  };

  const handleCommentKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleCommentSubmit();
    }
  };

  return (
    <article className="profile-post-card">

      {/* Post Header */}

      <div className="profile-post-header">

        <img
          src={post.author.avatar}
          alt={post.author.name}
          className="profile-post-avatar"
        />

        <div className="min-w-0">
          <p className="profile-post-author">
            {post.author.name}
          </p>

          <p className="profile-post-time">
            {post.time}
          </p>
        </div>

      </div>


      {/* Post Image */}

      {post.image && (
        <div className="profile-post-image-wrapper">

          <img
            src={post.image}
            alt={post.imageAlt || "Post image"}
            className="profile-post-image"
          />

        </div>
      )}


      {/* Post Content */}

      {post.content && (
        <div className="profile-post-content">

          <p>
            {post.content}
          </p>

        </div>
      )}


      {/* Like + Comments */}

      <div className="profile-post-stats">

        <button
          type="button"
          onClick={handleLike}
          className="profile-post-like"
        >
          <Heart
            size={20}
            strokeWidth={1.8}
            className="fill-[#ff6868] text-[#ff6868]"
          />

          <span>
            {likes}
          </span>
        </button>


        <div className="profile-post-comments-count">

          <BiCommentDetail
            size={20}
            className="text-[#7d8790]"
          />

          <span>
            {post.commentsCount ??
              post.comments?.length ??
              0}
          </span>

        </div>

      </div>


      {/* Comment Input */}

      <div className="profile-comment-wrapper">

        <div className="profile-comment-input">

          <input
            type="text"
            value={commentText}
            onChange={(event) =>
              setCommentText(event.target.value)
            }
            onKeyDown={handleCommentKeyDown}
            placeholder="Write a comment..."
          />

          <button
            type="button"
            aria-label="Add emoji"
            className="profile-comment-emoji"
          >
            <Smile size={20} strokeWidth={1.8} />
          </button>

          <button
            type="button"
            onClick={handleCommentSubmit}
            disabled={!commentText.trim()}
            aria-label="Send comment"
            className="profile-comment-send"
          >
            <Send size={20} strokeWidth={2} />
          </button>

        </div>

      </div>


      {/* Comments */}

      {post.comments?.length > 0 && (
        <div className="profile-comments">

          <div className="space-y-[38px]">

            {post.comments.map((comment) => (
              <CommentItem
                key={comment.id}
                comment={comment}
              />
            ))}

          </div>

        </div>
      )}

    </article>
  );
};

export default PostCard;