import { useState } from "react";
import CommentItem from "./CommentItem";

const TaskComments = ({
  comments = [],
  activity = [],
}) => {
  const [activeTab] = useState("comments");

  return (
    <div className="pb-8">

      {/* Comments */}
      {activeTab === "comments" && (
        <>
          {comments.map((comment) => (
            <CommentItem
              key={comment.id}
              comment={comment}
            />
          ))}

          {comments.length === 0 && (
            <div className="py-10 text-center text-[#98A2B3]">
              No comments available.
            </div>
          )}
        </>
      )}

      {/* Activity */}
      {activeTab === "activity" && (
        <div className="space-y-6">

          {activity.map((item) => (
            <div
              key={item.id}
              className="flex gap-4"
            >

              <div className="mt-2 h-2 w-2 rounded-full bg-[#22C55E]" />

              <div>

                <p className="text-[15px] text-[#344054]">
                  {item.text}
                </p>

                <p className="mt-1 text-[13px] text-[#98A2B3]">
                  {item.date}
                </p>

              </div>

            </div>
          ))}

        </div>
      )}

    </div>
  );
};

export default TaskComments;