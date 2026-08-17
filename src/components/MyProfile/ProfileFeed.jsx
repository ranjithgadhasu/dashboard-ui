import { useState } from "react";
import {
  Paperclip,
  Smile,
  Image as ImageIcon,
} from "lucide-react";

import {
  posts,
  profileData,
} from "./myProfileData";

import PostCard from "./PostCard";
import "./ProfileFeed.css";

const ProfileFeed = () => {
  const [postText, setPostText] = useState("");
  const [feedPosts, setFeedPosts] = useState(posts);

  const handleCreatePost = () => {
    if (!postText.trim()) return;

    const newPost = {
      id: Date.now(),

      author: {
        id: profileData.id,
        name: profileData.name,
        username: profileData.username,
        avatar: profileData.profileImage,
        verified: profileData.verified,
      },

      time: "Just now",
      privacy: "Public",
      content: postText,
      image: null,
      imageAlt: "",
      likes: 0,
      commentsCount: 0,
      shares: 0,
      liked: false,
      bookmarked: false,
      comments: [],
    };

    setFeedPosts((currentPosts) => [
      newPost,
      ...currentPosts,
    ]);

    setPostText("");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleCreatePost();
    }
  };

  return (
    <div className="profile-feed">

      {/* Create Post */}

      <div className="profile-create-post ">

        <div className="profile-create-top">

          <div className="profile-create-avatar">
            <img
              src={profileData.profileImage}
              alt={profileData.name}
            />
          </div>

          <div className="profile-create-input">
            <textarea
              value={postText}
              onChange={(event) =>
                setPostText(event.target.value)
              }
              onKeyDown={handleKeyDown}
              rows={3}
              placeholder="Write something..."
            />
          </div>

        </div>

        <div className="profile-create-actions">

          <button
            type="button"
            onClick={handleCreatePost}
            disabled={!postText.trim()}
            className="profile-post-button"
          >
            Post
          </button>

          <div className="profile-action-icons">

            <button
              type="button"
              aria-label="Attach file"
            >
              <Paperclip size={22} />
            </button>

            <button
              type="button"
              aria-label="Add emoji"
            >
              <Smile size={22} />
            </button>

            <button
              type="button"
              aria-label="Add image"
            >
              <ImageIcon size={22} />
            </button>

          </div>

        </div>

      </div>

      {/* Feed */}

      {feedPosts.length > 0 && (
        <div className="profile-feed-posts">
          {feedPosts.map((post) => (
            <PostCard
              key={post.id}
              post={post}
            />
          ))}
        </div>
      )}

    </div>
  );
};

export default ProfileFeed;