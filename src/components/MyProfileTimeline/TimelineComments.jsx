import TimelineCommentItem from "./TimelineCommentItem";

const TimelineComments = ({ comments = [] }) => {
  // No comments
  if (!comments.length) {
    return null;
  }

  return (
    <div className="mt-[12px]">

      {/* =====================================================
          COMMENTS LIST
      ====================================================== */}

      <div className="space-y-[10px]">

        {comments.map((comment) => (
          <TimelineCommentItem
            key={comment.id}
            comment={comment}
          />
        ))}

      </div>

    </div>
  );
};

export default TimelineComments;