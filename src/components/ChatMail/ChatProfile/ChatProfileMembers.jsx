import ChatProfileSection from "./ChatProfileSection";
import ChatProfileMemberItem from "./ChatProfileMemberItem";

const ChatProfileMembers = ({
  members,
  onMemberClick,
}) => {
  return (
    <ChatProfileSection
      title="Members"
      action="View All"
    >
      <div className="space-y-3">
        {members.map((member) => (
          <ChatProfileMemberItem
            key={member.id}
            member={member}
            onClick={onMemberClick}
          />
        ))}
      </div>
    </ChatProfileSection>
  );
};

export default ChatProfileMembers;