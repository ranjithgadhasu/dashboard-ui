import ChatProfileMediaItem from "./ChatProfileMediaItem";

const ChatProfileMedia = ({ media }) => {
  return (
    <div className="px-8 py-8">
      <div className="mb-6 flex items-center justify-between">
        <h4 className="text-xs font-semibold uppercase tracking-wider text-[#98A2B3]">
          Media
        </h4>

        <button className="text-sm font-medium text-[#22C55E]">
          View All
        </button>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {media.map((item) => (
          <ChatProfileMediaItem
            key={item.id}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default ChatProfileMedia;