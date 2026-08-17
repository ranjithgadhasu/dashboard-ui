import { useState } from "react";
import { Plus } from "lucide-react";
import ChatUserCardMail from "./ChatUserCardMail";
import InviteMembersModal from "./InviteMembersModal";
import "./pepolesection.css"

const PeopleSectionMail = ({ people }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div className="bg-white people-section-mail">

        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#EEF2F7] px-5 py-4 people-section-mail-header">

          <h3 className="text-[12px] font-semibold uppercase tracking-[1.2px] text-[#98A2B3] people-section-mail-title">
            People
          </h3>

          <button
            type="button"
            onClick={() => setOpenModal(true)}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-[#98A2B3] transition bg-[#F5F7FA] hover:text-[#22C55E] people-section-mail-add"
          >
            <Plus size={18} />
          </button>

        </div>

        {/* List */}
        <div className="people-section-mail-list">

          {people.length === 0 ? (
            <div className="flex items-center justify-center py-10 people-section-mail-empty">
              <p className="text-sm text-[#98A2B3]">
                No conversations found
              </p>
            </div>
          ) : (
            people.map((person) => (
              <ChatUserCardMail
                key={person.id}
                user={person}
              />
            ))
          )}

        </div>

      </div>

      <InviteMembersModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        people={people}
      />
    </>
  );
};

export default PeopleSectionMail;