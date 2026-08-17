import {
  MoreHorizontal,
  Paperclip,
} from "lucide-react";
import Important from "../../../assets/images/Important.png";


const MailItem = ({
  mail,
  active,
  onClick,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full border-b border-[#EEF2F7] px-5 py-5 text-left transition-all duration-200 ${
        active
          ? "bg-[#F6F9FC]"
          : "bg-white hover:bg-[#FAFBFC]"
      }`}
    >
      <div className="flex">

        {/* Avatar + More */}
        <div className="mr-4 flex flex-col items-center">
          <img
            src={mail.avatar}
            alt={mail.sender}
            className="h-11 w-11 rounded-full object-cover"
          />

          <MoreHorizontal
            size={18}
            className="mt-3 text-[#B0B7C3]"
          />
        </div>

        {/* Right */}
        <div className="min-w-0 flex-1">

          {/* Header */}
          <div className="flex items-start justify-between">

            <div className="min-w-0">

              <h4
                className={`truncate text-[14px] font-normal ${
                  mail.unread
                    ? "font-semibold text-[#899099]"
                    : "font-medium text-[#8A9099]"
                }`}
              >
                {mail.sender}
              </h4>

            </div>

            <div className="ml-3 flex items-center gap-3">

              {mail.hasAttachment && (
                <Paperclip
                  size={15}
                  className="text-[#B3BBC7]"
                />
              )}

              <span className="text-xs text-[#8A9099] whitespace-nowrap">
                {mail.time}
              </span>

            </div>

          </div>

          {/* Subject */}
          <h3 className="mt-2 truncate text-[15px] font-medium text-[#394150]">
            {mail.subject}
          </h3>

          {/* Preview */}
          <p className="mt-2 line-clamp-2 text-[14px] leading-6 text-[#8A9099]">
            {mail.preview}
          </p>

          {/* Footer */}
          <div className="mt-4 flex items-center justify-between">

            <img
              src={
                mail.bookmarked
                  ? Important
                  : Important
              }
              alt="bookmark"
              className="h-5 w-5 object-contain"
            />

            {mail.unread && (
              <span className="h-2.5 w-2.5 rounded-full bg-[#34C759]" />
            )}

          </div>
        </div>
      </div>
    </button>
  );
};

export default MailItem;