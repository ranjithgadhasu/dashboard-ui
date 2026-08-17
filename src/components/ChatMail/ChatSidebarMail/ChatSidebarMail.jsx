import ChatSearchMail from "../ChatListMail/ChatSearchMail";
import TeamSectionMail from "../ChatListMail/TeamSectionMail";
import PeopleSectionMail from "../ChatListMail/PeopleSectionMail";

const ChatSidebarMail = () => {
  return (
    <aside className="flex h-full w-[320px] flex-col border-r border-[#EAECF0] bg-white">

      {/* Search */}
      <div className="border-b border-[#EAECF0] px-4 py-4">
        <ChatSearchMail />
      </div>

      {/* Chat List */}
      <div className="flex-1 overflow-y-auto">

        <TeamSectionMail />

        <div className="border-t border-[#EAECF0]" />

        <PeopleSectionMail />

      </div>

    </aside>
  );
};

export default ChatSidebarMail;