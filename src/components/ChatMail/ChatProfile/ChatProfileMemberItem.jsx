const ChatProfileMemberItem = ({
  member,
  onClick,
}) => {
  return (
    <button
      type="button"
      onClick={() => onClick?.(member)}
      className="
        flex
        w-full
        items-center
        gap-3
        rounded-xl
        p-2
        text-left
        transition
        hover:bg-[#F8F9FB]
      "
    >
      {/* Avatar */}
      <div className="relative shrink-0">
        <img
          src={member.avatar}
          alt={member.name}
          className="h-10 w-10 rounded-full object-cover"
        />

        {member.online && (
          <span
            className="
              absolute
              bottom-0
              right-0
              h-3
              w-3
              rounded-full
              border-2
              border-white
              bg-[#22C55E]
            "
          />
        )}
      </div>

      {/* Name & Role */}
      <div className="min-w-0 flex-1">
        <h4 className="truncate text-[14px] font-medium text-[#344054]">
          {member.name}
        </h4>

        <p className="truncate text-xs text-[#98A2B3]">
          {member.role}
        </p>
      </div>
    </button>
  );
};

export default ChatProfileMemberItem;