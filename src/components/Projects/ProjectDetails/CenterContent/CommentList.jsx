import CommentItem from "./CommentItem";

const CommentList = ({ comments = [] }) => {
  if (comments.length === 0) {
    return (
      <div className="py-12 text-center text-[15px] text-[#98A2B3]">
        No comments available.
      </div>
    );
  }

  return (
    <div className="mt-8 space-y-8">
      {comments.map((comment) => (
        <CommentItem
          key={comment.id}
          comment={comment}
        />
      ))}
    </div>
  );
};

export default CommentList;