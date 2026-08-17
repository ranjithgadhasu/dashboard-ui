import { useMemo, useState } from "react";
import { X, Search, Check } from "lucide-react";
import "./inviteMembersModal.css";

const InviteMembersModal = ({ open, onClose, people = [] }) => {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState([]);

  const filteredPeople = useMemo(() => {
    return people.filter((person) =>
      person.name.toLowerCase().includes(search.toLowerCase()),
    );
  }, [people, search]);

  const toggleMember = (member) => {
    const exists = selected.find((item) => item.id === member.id);

    if (exists) {
      setSelected(selected.filter((item) => item.id !== member.id));
    } else {
      setSelected([...selected, member]);
    }
  };

  if (!open) return null;

  return (
    <>
      {/* Overlay */}
      <div className="invite-members-overlay" onClick={onClose} />

      {/* Modal */}
      <div className="invite-members-modal">
        {/* Header */}
        <div className="invite-members-header">
          <div className="invite-members-title-wrapper">
            <h2 className="invite-members-title">Invite New Members</h2>

            <p className="invite-members-subtitle">
              Invite Members to Designers Team
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="invite-members-close"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>

        {/* Search */}
        <div className="invite-members-search-wrapper">
          <div className="invite-members-search">
            <Search size={16} className="invite-members-search-icon" />

            <input
              value={search}
              name="search-name"
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search members..."
              className="invite-members-search-input"
            />
          </div>
        </div>

        {/* Selected */}
        {selected.length > 0 && (
          <div className="invite-members-selected">
            {selected.map((member) => (
              <div key={member.id} className="invite-members-selected-item">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="invite-members-selected-avatar"
                />

                <span className="invite-members-selected-name">
                  {member.name}
                </span>

                <button
                  type="button"
                  onClick={() => toggleMember(member)}
                  className="invite-members-selected-remove"
                >
                  <X size={14} />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Members */}
        <div className="invite-members-list">
          {filteredPeople.map((member) => {
            return (
              <div
                key={member.id}
                onClick={() => toggleMember(member)}
                className="invite-member-item"
              >
                <div className="invite-member-info">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="invite-member-avatar"
                  />

                  <div className="invite-member-details">
                    <h4 className="invite-member-name">{member.name}</h4>

                    <p className="invite-member-role">{member.profile?.role}</p>
                  </div>
                </div>

                <div className="invite-member-check">
                  <Check
                    size={20}
                    strokeWidth={2.5}
                    className="text-[#22C55E]"
                  />
                </div>
              </div>
            );
          })}

          {filteredPeople.length === 0 && (
            <div className="invite-members-empty">No members found</div>
          )}
        </div>

        {/* Footer */}
        <div className="invite-members-footer">
          <button type="button" className="invite-members-button">
            Invite
          </button>
        </div>
      </div>
    </>
  );
};

export default InviteMembersModal;
