import { Search, Check } from "lucide-react";
import { useState } from "react";
import FavoriteImage from "../../../assets/images/FavoriteImage.png";

const members = [
  {
    id: 1,
    name: "Regina Cooper",
    avatar: FavoriteImage,
    selected: true,
  },
  {
    id: 2,
    name: "Jacob Hawkins",
    avatar: FavoriteImage,
    selected: true,
  },
  {
    id: 3,
    name: "Jane Wilson",
    avatar: FavoriteImage,
    selected: true,
  },
];

const AssignDropdown = () => {
  const [search, setSearch] = useState("");

  const filtered = members.filter((member) =>
    member.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      className="
        absolute
        left-0
        top-14
        z-50
        w-[285px]
        rounded-[24px]
        border
        border-[#EEF2F7]
        bg-white
        p-6
        shadow-[0_20px_40px_rgba(16,24,40,0.12)]
      "
    >
      <h3 className="mb-5 text-[15px] font-medium text-[#344054]">
        Assign To
      </h3>

      {/* Search */}
      <div className="mb-6 flex items-center rounded-xl bg-[#F8F9FB] px-4 py-3">
        <Search
          size={20}
          className="text-[#98A2B3]"
        />

        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Find Person..."
          className="ml-3 w-full bg-transparent text-[15px] outline-none placeholder:text-[#98A2B3]"
        />
      </div>

      {/* Members */}
      <div className="space-y-5">
        {filtered.map((member) => (
          <button
            key={member.id}
            className="flex w-full items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <img
                src={member.avatar}
                alt={member.name}
                className="h-9 w-9 rounded-full"
              />

              <span className="text-[18px] text-[#344054]">
                {member.name}
              </span>
            </div>

            {member.selected && (
              <Check
                size={20}
                className="text-[#22C55E]"
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AssignDropdown;