import { useState } from "react";

import {
  Paperclip,
  Smile,
  Image as ImageIcon,
} from "lucide-react";

import {
  profileData,
  posts,
} from "./myProfileTwoData";

import PostCardTwo from "./PostCardTwo";

const ProfileFeedTwo = () => {
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
      },

      time: "Just now",

      content: postText,

      image: null,

      imageAlt: "",

      likes: 0,

      commentsCount: 0,

      comments: [],
    };

    setFeedPosts((current) => [
      newPost,
      ...current,
    ]);

    setPostText("");
  };


  return (
    <div className="space-y-[12px]">

      {/* =====================================================
          CREATE POST
      ====================================================== */}

      <div className="rounded-[4px] border border-[#e7e7e7] bg-white p-[10px]">

        <div className="flex items-center gap-2">

          <img
            src={profileData.profileImage}
            alt={profileData.name}
            className="h-[24px] w-[24px] rounded-full object-cover"
          />

          <input
            type="text"
            value={postText}
            onChange={(event) =>
              setPostText(event.target.value)
            }
            placeholder="Write something..."
            className="min-w-0 flex-1 bg-transparent text-[7px] text-[#555] outline-none placeholder:text-[#aaa]"
          />

        </div>


        <div className="mt-3 flex items-center justify-between">

          <button
            type="button"
            onClick={handleCreatePost}
            className="rounded-[3px] bg-[#21943a] px-4 py-[5px] text-[7px] font-medium text-white"
          >
            Post
          </button>


          <div className="flex items-center gap-3 text-[#9aa0a8]">

            <Paperclip size={9} />

            <Smile size={9} />

            <ImageIcon size={9} />

          </div>

        </div>

      </div>


      {/* =====================================================
          POSTS
      ====================================================== */}

      {feedPosts.map((post) => (

        <PostCardTwo
          key={post.id}
          post={post}
        />

      ))}

    </div>
  );
};

export default ProfileFeedTwo;