import { Plus } from "lucide-react";
import ChatUserCardMail from "./ChatUserCardMail";
//import { teams } from "../dataMailChat/dataMailChat";


const TeamSectionMail = ({ teams }) => {
  return (
    <div className="border-b border-[#EEF2F7]">

      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4">

        <h3 className="text-[15px] font-medium uppercase tracking-wider text-[#98A2B3]">
          Teams
        </h3>

        <button
          type="button"
          className="flex h-6 w-6 items-center justify-center rounded-full text-[#98A2B3] transition hover:bg-[#F3F4F6] hover:text-[#22C55E]"
        >
          <Plus size={15} />
        </button>

      </div>

      {/* Team List */}
    <div>

  {teams.length === 0 ? (
    <div className="flex items-center justify-center py-10">
      <p className="text-sm text-[#98A2B3]">
        No teams found
      </p>
    </div>
  ) : (
    teams.map((team) => (
      <ChatUserCardMail
        key={team.id}
        user={team}
      />
    ))
  )}

</div>

    </div>
  );
};

export default TeamSectionMail;