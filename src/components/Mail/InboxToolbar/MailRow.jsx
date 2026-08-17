import {
  Star,
  Bookmark,
  Paperclip,
  Check, 
  Square,
} from "lucide-react";
//import MailAvatar from "../MailAvatar/MailAvatar";
import MailAvatar from "./MailAvatar";

const MailRow = ({
  mail,
  selected,
  onClick,
  onToggleStar,
  onToggleBookmark,
  onToggleSelect,
}) => {
  return (
    <div
      onClick={() => onClick(mail)}
      className={`flex cursor-pointer items-center border-b border-[#EEF2F7] px-5 py-3 transition-all duration-200 hover:bg-[#F9FAFB] ${
        selected ? "bg-[#F4F8FF]" : "bg-white"
      }`}
    >
      <button
  onClick={(e) => {
    e.stopPropagation();
    onToggleSelect(mail.id);
  }}
  className="mr-4"
>
  {mail.checked ? (
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
      className="text-[#D1D5DB]"
    />
  )}
</button>

      {/* Star */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onToggleStar(mail.id);
        }}
        className="mr-3"
      >
        <Star
          size={17}
          className={
            mail.starred
              ? "fill-[#FFC107] text-[#FFC107]"
              : "text-[#C7CDD8]"
          }
        />
      </button>

      {/* Bookmark */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onToggleBookmark(mail.id);
        }}
        className="mr-4"
      >
        <Bookmark
          size={17}
          className={
            mail.bookmarked
              ? "fill-[#FF6B6B] text-[#FF6B6B]"
              : "text-[#C7CDD8]"
          }
        />
      </button>

      {/* Avatar */}
      <div className="mr-4">
  <MailAvatar
    avatar={mail.avatar}
    name={mail.sender}
    size={36}
  />
</div>
 

      {/* Content */}
  

      <div className="flex flex-1 items-center overflow-hidden">

  <div className="w-[170px] shrink-0">
    <span className="truncate text-[14px] font-semibold text-[#2F3542]">
      {mail.sender}
    </span>
  </div>

  <div className="w-[230px] shrink-0 px-2">
    <span className="truncate text-[14px] font-medium text-[#2F3542]">
      {mail.subject}
    </span>
  </div>

  <div className="flex-1 overflow-hidden">
    <span className="truncate text-[13px] text-[#8B94A7]">
      — {mail.preview}
    </span>
  </div>

</div>

      {/* Attachment */}

      <div className="flex w-[90px] items-center justify-end gap-4">

  {mail.attachment && (
    <Paperclip
      size={15}
      className="text-[#8B94A7]"
    />
  )}

  <span className="w-[45px] text-right text-[13px] text-[#7A8190]">
    {mail.time}
  </span>

</div>

    </div>
  );
};

export default MailRow;