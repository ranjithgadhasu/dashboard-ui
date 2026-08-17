import TimelinePostCard from "./TimelinePostCard";

const TimelineColumn = ({ posts = [], side = "left" }) => {
  return (
    <div className="relative flex flex-col gap-[14px]">

      {posts.map((post) => (
        <TimelinePostCard
          key={post.id}
          post={post}
          side={side}
        />
      ))}

    </div>
  );
};

export default TimelineColumn;