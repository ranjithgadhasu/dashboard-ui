import { useState } from "react";

import CommentTabs from "./CommentTabs";
import CommentInput from "./CommentInput";
import CommentList from "./CommentList";

const ProjectComments = ({ project }) => {
  const [comments, setComments] = useState(
    project?.comments || []
  );

  const handleSend = (message) => {
    const newComment = {
      id: Date.now(),
      user: "You",
      role: "Project Manager",
      avatar: comments[0]?.avatar || "",
      time: "Just now",
      message,
      likes: 0,
    };

    setComments([newComment, ...comments]);
  };

  return (
    <div
      className="
        mt-8
        rounded-3xl
        border
        border-[#EEF2F7]
        bg-white
        p-6
      "
    >
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">

        <div>

          <h2
            className="
              text-[22px]
              font-semibold
              text-[#344054]
            "
          >
            Comments
          </h2>

          <p
            className="
              mt-1
              text-[14px]
              text-[#98A2B3]
            "
          >
            Discuss project updates
          </p>

        </div>

        <span
          className="
            rounded-full
            bg-[#F8FAFC]
            px-4
            py-2
            text-[14px]
            font-semibold
            text-[#22983A]
          "
        >
          {comments.length}
        </span>

      </div>

      {/* Tabs */}
      <CommentTabs />

      {/* Comment Input */}
      <CommentInput
        onSend={handleSend}
      />

      {/* Comments List */}
      <CommentList
        comments={comments}
      />

    </div>
  );
};

export default ProjectComments;