import { useState } from "react";
import {
  Paperclip,
  Smile,
  Image as ImageIcon,
} from "lucide-react";

import { profileData } from "../MyProfile/myProfileData";

const TimelineCreatePost = () => {
  const [postText, setPostText] = useState("");

  const handlePost = () => {
    if (!postText.trim()) return;

    console.log("New post:", postText);

    setPostText("");
  };

  return (
    <div className="mb-[14px] w-full rounded-[14px] border border-[#eeeeee] bg-white px-[32px] py-[30px] shadow-[0_2px_10px_rgba(0,0,0,0.02)]">

      {/* =====================================================
          TOP
      ====================================================== */}

      <div className="flex items-center gap-[18px]">

        {/* Profile Image */}

        <img
          src={profileData.profileImage}
          alt={profileData.name}
          className="h-[56px] w-[56px] shrink-0 rounded-full object-cover"
        />


        {/* Text Input */}

        <textarea
          value={postText}
          onChange={(event) =>
            setPostText(event.target.value)
          }
          rows={1}
          placeholder="Write something..."
          className="
            min-h-[45px]
            flex-1
            resize-none
            overflow-hidden
            bg-transparent
            pt-[8px]
            text-[14px]
            font-normal
            leading-[28px]
            text-[#555]
            outline-none
            placeholder:text-[#8e96a3]
          "
        />

      </div>


      {/* =====================================================
          BOTTOM
      ====================================================== */}

      <div className="mt-[32px] flex items-center justify-between">

        {/* POST BUTTON */}

        <button
          type="button"
          onClick={handlePost}
          className="
            flex
            h-[32px]
            min-w-[75px]
            items-center
            justify-center
            rounded-[9px]
            bg-[#21943a]
            px-[24px]
            text-[12px]
            font-medium
            text-white
            transition
            hover:bg-[#1b7f31]
          "
        >
          Post
        </button>


        {/* ACTION ICONS */}

        <div className="flex items-center gap-[24px]">

          {/* Attachment */}

          <button
            type="button"
            aria-label="Attach file"
            className="
              flex
              items-center
              justify-center
              text-[#8d969e]
              transition
              hover:text-[#555]
            "
          >
            <Paperclip
              size={25}
              strokeWidth={1.8}
            />
          </button>


          {/* Emoji */}

          <button
            type="button"
            aria-label="Add emoji"
            className="
              flex
              items-center
              justify-center
              text-[#8d969e]
              transition
              hover:text-[#555]
            "
          >
            <Smile
              size={25}
              strokeWidth={1.8}
            />
          </button>


          {/* Image */}

          <button
            type="button"
            aria-label="Add image"
            className="
              flex
              items-center
              justify-center
              text-[#8d969e]
              transition
              hover:text-[#555]
            "
          >
            <ImageIcon
              size={25}
              strokeWidth={1.8}
            />
          </button>

        </div>

      </div>

    </div>
  );
};

export default TimelineCreatePost;