const ChatProfileMediaItem = ({ image }) => {
  return (
    <img
      src={image}
      alt=""
      className="h-16 w-16 rounded-xl object-cover"
    />
  );
};

export default ChatProfileMediaItem;