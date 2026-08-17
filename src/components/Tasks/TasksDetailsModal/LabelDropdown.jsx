import { useState } from "react";
import { Search, Check } from "lucide-react";

import AddLabelModal from "./AddLabelModal";

import "./LabelDropdown.css";

const labels = [
  {
    id: 1,
    name: "Design",
    color: "#46C765",
    selected: true,
  },
  {
    id: 2,
    name: "Frontend",
    color: "#4CCDC1",
    selected: true,
  },
  {
    id: 3,
    name: "Backend",
    color: "#FF6F68",
    selected: true,
  },
];

const LabelDropdown = () => {
  const [search, setSearch] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const filtered = labels.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <>
      {/* Label Dropdown */}
      <div
        className="
          absolute
          left-30
          top-20
          z-50
          w-[260px]
          rounded-[28px]
          bg-white
          p-6
          shadow-[0_20px_50px_rgba(16,24,40,.15)]
          label-dropdown
        "
      >
        {/* Title */}
        <h3 className="mb-6 text-[15px] font-medium text-[#344054] label-dropdown-title">
          Labels
        </h3>

        {/* Search */}
        <div
          className="
            mb-8
            flex
            h-[40px]
            items-center
            rounded-2xl
            bg-[#F8F9FB]
            px-5
            label-dropdown-search
          "
        >
          <Search size={20} className="text-[#98A2B3]" />

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Label..."
            className="
              ml-3
              w-full
              bg-transparent
              text-[14px]
              outline-none
              placeholder:text-[#98A2B3]
              label-dropdown-search-input
            "
          />
        </div>

        {/* Labels */}
        <div className="space-y-4 label-dropdown-list">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between label-dropdown-item"
            >
              <span
                className="
                  rounded-xl
                  px-4
                  py-1.5
                  text-[13px]
                  font-medium
                  text-white
                  label-dropdown-label
                "
                style={{
                  backgroundColor: item.color,
                }}
              >
                {item.name}
              </span>

              {item.selected && (
                <Check
                  size={20}
                  className="text-[#22983A] label-dropdown-check"
                />
              )}
            </div>
          ))}
        </div>

        {/* Add Button */}
        <button
          type="button"
          onClick={() => setOpenModal(true)}
          className="
            mt-10
            h-[40px]
            w-full
            rounded-xl
            bg-[#22983A]
            text-[15px]
            font-medium
            text-white
            transition
            hover:bg-[#1E8735]
            label-dropdown-add
          "
        >
          Add New Label
        </button>
      </div>

      {/* Add Label Modal */}
      <AddLabelModal open={openModal} onClose={() => setOpenModal(false)} />
    </>
  );
};

export default LabelDropdown;
