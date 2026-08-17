import MailHeaderTwo from "./MailHeaderTwo";
import "./mailheader.css";

const MailHeader = ({ mail, onBack }) => {
  return (
    <div className="mail-header border-b border-[#EEF2F7] bg-white">

      <MailHeaderTwo onBack={onBack} />

      <div className="mail-header-body px-10 pt-10 pb-8">

        {/* Top */}
        <div className="mail-header-top flex items-start justify-between">

          {/* Profile */}
          <div className="mail-profile flex items-center gap-5">

            <img
              src={mail.avatar}
              alt={mail.sender}
              className="h-14 w-14 rounded-full object-cover"
            />

            <div>
              <h3 className="text-[18px] font-semibold text-[#3F4654]">
                {mail.sender}
              </h3>

              <p className="mt-1 text-[16px] text-[#22963F]">
                {mail.email}
              </p>
            </div>

          </div>

          {/* Date */}
          <div className="mail-header-date">
            <p className="text-[18px] font-medium text-[#5D6470]">
              {mail.date} — {mail.time}
            </p>
          </div>

        </div>

        {/* Subject + Actions */}
        <div className="mail-subject mt-10 flex items-start justify-between">

          <h1 className="text-[28px] font-medium leading-tight text-[#3F4654]">
            {mail.subject}
          </h1>

        </div>

      </div>
    </div>
  );
};

export default MailHeader;