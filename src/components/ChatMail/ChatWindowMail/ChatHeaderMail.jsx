import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InviteMembersModal from "../ChatListMail/InviteMembersModal";
import ChatProfileSidebar from "../ChatProfile/ChatProfileSidebar";
import { people } from "../dataMailChat/dataMailChat";

import { Plus, MoreHorizontal, ArrowLeft} from "lucide-react";
import "./chatheadermail.css";

const ChatHeaderMail = ({ user }) => {
  const [openModal, setOpenModal] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/chatmail");
  };

  //const closeProfileModal = () => {
  //  setShowProfileModal(false);
  //};

  return (
    <>
      {/* =========================================
          CHAT HEADER
      ========================================= */}

      <div className="flex h-[72px] items-center justify-between border-b border-[#EEF2F7] bg-white px-6 chat-header-mail">
        {/* Left */}
        <div className="flex items-center gap-3 chat-header-mail-left">
          {/* Mobile Back Button */}
          <button
            type="button"
            onClick={handleBack}
            className="chat-header-mail-back"
            aria-label="Back to chats"
          >
            <ArrowLeft size={20} />
          </button>

          {/* Avatar */}
          <div className="relative chat-header-mail-avatar-wrapper">
            <img
              src={user?.avatar}
              alt={user?.name}
              className="h-11 w-11 rounded-full object-cover chat-header-mail-avatar"
            />

            {user?.online && (
              <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-[#34C759]" />
            )}
          </div>

          {/* User Info */}
          <div className="chat-header-mail-user-info">
            <h2 className="text-[15px] font-normal text-[#344054]">
              {user?.name}
            </h2>

            <p className="mt-1 text-xs text-[#98A2B3]">
              {user?.online ? "Online" : "Offline"}
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-2 chat-header-mail-actions">
          {/* Plus */}
          <button
            type="button"
            onClick={() => setOpenModal(true)}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-[#98A2B3] transition hover:bg-[#F5F7FA] hover:text-[#22C55E]"
          >
            <Plus size={18} />
          </button>

          {/* More */}
          <button
            type="button"
            onClick={() => setShowProfileModal(true)}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-[#98A2B3] transition hover:bg-[#F5F7FA] hover:text-[#22C55E]"
          >
            <MoreHorizontal size={18} />
          </button>
        </div>
      </div>

      {/* =========================================
          INVITE MODAL
      ========================================= */}

      <InviteMembersModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        people={people}
      />

      {/* =========================================
          MOBILE PROFILE MODAL
      ========================================= */}

      {showProfileModal && (
        <div
          className="mobile-chat-profile-modal"
          onClick={() => setShowProfileModal(false)}
        >
          <div
            className="mobile-chat-profile-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="mobile-chat-profile-modal-close"
              onClick={() => setShowProfileModal(false)}
            >
              ×
            </button>

            <ChatProfileSidebar />
          </div>
        </div>
      )}
    </>
  );
};

export default ChatHeaderMail;
