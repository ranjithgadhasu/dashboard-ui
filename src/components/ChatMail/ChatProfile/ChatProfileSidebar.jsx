import ChatProfileHeader from "./ChatProfileHeader";
import ChatProfileInfo from "./ChatProfileInfo";
import ChatProfileMedia from "./ChatProfileMedia";
import ChatProfileFiles from "./ChatProfileFiles";
import ChatProfileMembers from "./ChatProfileMembers";
import "./chatprofilemodel.css"

const ChatProfileSidebar = ({ profile, type }) => {
  if (!profile) return null;

  return (
    <div className="w-[320px] overflow-y-auto border-l border-[#EEF2F7] bg-white chat-profile-sidebar">

      <div className="chat-profile-sidebar-header">
        <ChatProfileHeader
          profile={profile}
          type={type}
        />
      </div>

      <div className="chat-profile-sidebar-info">
        <ChatProfileInfo
          info={profile.info}
        />
      </div>

      {profile.files && profile.files.length > 0 && (
        <div className="chat-profile-sidebar-files">
          <ChatProfileFiles
            files={profile.files}
          />
        </div>
      )}

      {profile.photos && profile.photos.length > 0 && (
        <div className="chat-profile-sidebar-media">
          <ChatProfileMedia
            media={profile.photos}
          />
        </div>
      )}

      {type === "team" &&
        profile.members &&
        profile.members.length > 0 && (
          <div className="chat-profile-sidebar-members">
            <ChatProfileMembers
              members={profile.members}
            />
          </div>
        )}

    </div>
  );
};

export default ChatProfileSidebar;