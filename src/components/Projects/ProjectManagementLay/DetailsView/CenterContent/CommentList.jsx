import CommentItem from "./CommentItem";

const CommentList = ({ comments = [] }) => {
  return (
    <div className="mt-8 space-y-6">

      {comments.length > 0 ? (
        comments.map((comment) => (
          <CommentItem
            key={comment.id}
            comment={comment}
          />
        ))
      ) : (
        <div
          className="
            rounded-2xl
            border
            border-dashed
            border-[#D0D5DD]
            bg-[#FCFCFD]
            py-10
            text-center
          "
        >
          <h3
            className="
              text-[16px]
              font-semibold
              text-[#344054]
            "
          >
            No Comments Yet
          </h3>

          <p
            className="
              mt-2
              text-[14px]
              text-[#98A2B3]
            "
          >
            Be the first person to start the discussion.
          </p>
        </div>
      )}

    </div>
  );
};

export default CommentList;