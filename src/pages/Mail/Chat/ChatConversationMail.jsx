import { useParams } from "react-router-dom";
import {
  people,
  teams,
  teamChats,
} from "../../../components/ChatMail/dataMailChat/dataMailChat";

import ChatWindowMail from "../../../components/ChatMail/ChatWindowMail/ChatWindowMail";
import ChatProfileSidebar from "../../../components/ChatMail/ChatProfile/ChatProfileSidebar";

const ChatConversationMail = () => {
  const { id } = useParams();

  // ===========================
  // Check Team
  // ===========================

  const selectedTeam = teams.find(
    (team) => team.id === Number(id)
  );

  // ===========================
  // Check Person
  // ===========================

  const selectedPerson = people.find(
    (person) => person.id === Number(id)
  );

  // ===========================
  // TEAM CHAT
  // ===========================

  if (selectedTeam) {
    const team = teamChats[id];

    return (
      <div className="flex h-full">
        <div className="flex-1">
          <ChatWindowMail
            person={team.header}
            messages={team.messages}
          />
        </div>

        <ChatProfileSidebar
          profile={team.profile}
          type="team"
        />
      </div>
    );
  }

  // ===========================
  // PEOPLE CHAT
  // ===========================

  if (selectedPerson) {
    return (
      <div className="flex h-full">
        <div className="flex-1">
          <ChatWindowMail
            person={selectedPerson.header}
            messages={selectedPerson.messages}
          />
        </div>

        <ChatProfileSidebar
          profile={selectedPerson.profile}
          type="person"
        />
      </div>
    );
  }

  return null;
};

export default ChatConversationMail;