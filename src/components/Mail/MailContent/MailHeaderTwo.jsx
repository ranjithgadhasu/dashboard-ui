import {
  ChevronLeft,
  ChevronRight,
  Bookmark,
  Printer,
  Trash2,
  ArrowLeft,
} from "lucide-react";

import Reply from "../../../assets/images/Reply.png";
import "./mailheadertwo.css";

const MailHeaderTwo = ({ onBack }) => {
  return (
    <div className="mail-header-two flex h-[74px] items-center justify-between border-b border-[#E9EDF5] bg-white px-8">

      {/* Left */}
      <div className="flex items-center">

        {/* Mobile Back Button */}
        <button
          type="button"
          onClick={onBack}
          className="mobile-mail-back rounded-lg p-2 transition hover:bg-[#F5F7FA]"
          title="Back"
        >
          <ArrowLeft
            size={22}
            className="text-[#525C60]"
          />
        </button>

        {/* Desktop Reply */}
        <button
          className="desktop-reply rounded-lg p-2 transition hover:bg-[#F5F7FA]"
          title="Reply"
        >
          <img
            src={Reply}
            alt="Reply"
            className="rotate-10"
          />
        </button>

      </div>

      {/* Center */}
      <div className="mail-header-navigation flex items-center gap-6">

        <button className="rounded-md p-1 hover:bg-[#F5F7FA]">
          <ChevronLeft
            size={24}
            className="text-[#8A9099]"
          />
        </button>

        <span className="text-[20px] font-medium text-[#3F4654]">
          1 of 200
        </span>

        <button className="rounded-md p-1 hover:bg-[#F5F7FA]">
          <ChevronRight
            size={24}
            className="text-[#8A9099]"
          />
        </button>

      </div>

      {/* Right */}
      <div className="mail-header-actions flex items-center gap-8">

        <button
          className="rounded-lg p-2 hover:bg-[#F5F7FA]"
          title="Bookmark"
        >
          <Bookmark
            size={26}
            fill="#FF6B6B"
            className="text-[#FF6B6B]"
          />
        </button>

        <button
          className="rounded-lg p-2 hover:bg-[#F5F7FA]"
          title="Print"
        >
          <Printer
            size={26}
            className="text-[#8A9099]"
          />
        </button>

        <button
          className="rounded-lg p-2 hover:bg-[#F5F7FA]"
          title="Delete"
        >
          <Trash2
            size={26}
            className="text-[#8A9099]"
          />
        </button>

      </div>

    </div>
  );
};

export default MailHeaderTwo;