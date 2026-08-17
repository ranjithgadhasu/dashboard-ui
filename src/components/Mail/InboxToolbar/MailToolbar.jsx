import {
  Square,
  Check,
  Trash2,
  Search,
  ChevronLeft,
  ChevronRight,
  Settings2,
} from "lucide-react";
import { FaCaretDown } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";

import ReadMail from "../../../assets/images/ReadMail.png";
import foldermove from "../../../assets/images/folder-move.png";
import alert from "../../../assets/images/alert.png";
import archive from "../../../assets/images/archive.png";

import "./mailtoolbar.css";

const MailToolbar = ({
  search,
  setSearch,
  total = 200,
  currentPage = 1,
  allSelected,
  onSelectAll,
}) => {
  return (
    <div className="mail-toolbar border-b border-[#EEF2F7] bg-white px-5 py-3">

      {/* Top / Left Actions */}
      <div className="mail-toolbar-actions flex items-center gap-3">

        <button
          onClick={onSelectAll}
          className="flex h-5 w-5 flex-shrink-0 items-center justify-center"
        >
          {allSelected ? (
            <div className="flex h-5 w-5 items-center justify-center rounded bg-[#22C55E]">
              <Check
                size={14}
                strokeWidth={3}
                className="text-white"
              />
            </div>
          ) : (
            <Square
              size={18}
              className="text-[#B8C0CC]"
            />
          )}
        </button>

        <button className="mail-toolbar-icon text-[#8E95A5] hover:text-[#22963F]">
          <FaCaretDown />
        </button>

        <button className="mail-toolbar-icon text-[#8E95A5] hover:text-[#22963F]">
          <img
            src={archive}
            alt="Archive"
            className="h-[18px] w-[18px]"
          />
        </button>

        <button className="mail-toolbar-icon text-[#8E95A5] hover:text-[#22963F]">
          <img
            src={alert}
            alt="Alert"
            className="h-[18px] w-[18px]"
          />
        </button>

        <button className="mail-toolbar-icon text-[#8E95A5] hover:text-[#22963F]">
          <Trash2 size={18} />
        </button>

        <div className="mail-toolbar-divider h-5 w-px bg-[#D9DEE8]" />

        <button className="mail-toolbar-icon text-[#8E95A5] hover:text-[#22963F]">
          <img
            src={foldermove}
            alt="Move to folder"
            className="h-[18px] w-[18px]"
          />
        </button>

        <button className="mail-toolbar-icon text-[#8E95A5] hover:text-[#22963F]">
          <img
            src={ReadMail}
            alt="Mark as read"
            className="h-[18px] w-[18px]"
          />
        </button>

      </div>

      {/* Search */}
      <div className="mail-toolbar-search relative w-[340px] xl:w-[420px]">

        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-[#98A2B3]"
        />

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
          className="h-11 w-full rounded-full border border-[#E5E7EB] bg-white pl-11 pr-5 text-sm text-[#344054] outline-none transition focus:border-[#22C55E] focus:ring-2 focus:ring-[#22C55E]/20"
        />

      </div>

      {/* Right */}
      <div className="mail-toolbar-right flex items-center gap-4">

        <span className="text-sm text-[#6B7280]">
          {currentPage} of {total}
        </span>

        <button className="text-[#8E95A5] hover:text-[#22963F]">
          <ChevronLeft size={18} />
        </button>

        <button className="text-[#8E95A5] hover:text-[#22963F]">
          <ChevronRight size={18} />
        </button>

        <button className="text-[#8E95A5] hover:text-[#22963F]">
          <Settings2 size={18} />
        </button>

        <IoSettingsOutline />

      </div>

    </div>
  );
};

export default MailToolbar;