//import ChatSearchMail from "./ChatSearchMail";
//import TeamSectionMail from "./TeamSectionMail";
//import PeopleSectionMail from "./PeopleSectionMail";

//const ChatListMail = () => {
//  return (
//    <div className="flex h-full flex-col bg-white">

//      {/* Search */}
//      <div className="border-b border-[#EEF2F7] p-4">
//        <ChatSearchMail />
//      </div>

//      {/* Scrollable Area */}
//      <div className="flex-1 overflow-y-auto">

//        {/* Teams */}
//        <TeamSectionMail />

//        {/* People */}
//        <PeopleSectionMail />

//      </div>

//    </div>
//  );
//};

//export default ChatListMail;

import { useMemo, useState } from "react";
import ChatSearchMail from "./ChatSearchMail";
import TeamSectionMail from "./TeamSectionMail";
import PeopleSectionMail from "./PeopleSectionMail";
import { people, teams } from "../dataMailChat/dataMailChat";

const ChatListMail = () => {
  const [activeTab, setActiveTab] = useState("people");
  const [search, setSearch] = useState("");

  const filteredPeople = useMemo(() => {
    return people.filter((person) =>
      person.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const filteredTeams = useMemo(() => {
    return teams.filter((team) =>
      team.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div className="flex h-full flex-col bg-white">

      <div className="border-b border-[#EEF2F7] p-4">
        <ChatSearchMail
          value={search}
          onChange={setSearch}
        />
      </div>

      {/* Tabs */}

      <div className="flex border-b border-[#EEF2F7] px-5">

        <button
          onClick={() => setActiveTab("people")}
          className={`relative py-4 text-sm font-semibold transition ${
            activeTab === "people"
              ? "text-[#22C55E]"
              : "text-[#98A2B3]"
          }`}
        >
          MY CHATS

          {activeTab === "people" && (
            <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#22C55E]" />
          )}
        </button>

        <button
          onClick={() => setActiveTab("teams")}
          className={`relative ml-8 py-4 text-sm font-semibold transition ${
            activeTab === "teams"
              ? "text-[#22C55E]"
              : "text-[#98A2B3]"
          }`}
        >
          TEAMS

          {activeTab === "teams" && (
            <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#22C55E]" />
          )}
        </button>

      </div>

      <div className="flex-1 overflow-auto">

        {activeTab === "people" ? (
          <PeopleSectionMail people={filteredPeople} />
        ) : (
          <TeamSectionMail teams={filteredTeams} />
        )}

      </div>

    </div>
  );
};

export default ChatListMail;