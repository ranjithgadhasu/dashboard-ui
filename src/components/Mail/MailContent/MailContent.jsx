import MailHeader from "./MailHeader";
import MailBody from "./MailBody";
import MailAttachments from "./MailAttachments";

import MailReplyBox from "./MailReplyBox";

const MailContent = ({ mail,onBack }) => {
  if (!mail) {
    return (
      <div className="flex h-full items-center justify-center bg-white">
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-[#2D4058]">
            No Mail Selected
          </h3>

          <p className="mt-2 text-[#899099]">
            Select an email to read.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col bg-white">

      {/* Header */}
      <MailHeader mail={mail}  onBack={onBack} />

      {/* Body */}
      <div className="flex-1 overflow-y-auto">

        <div className="mx-auto w-full max-w-[920px] px-8 py-8">

          <MailBody mail={mail} />

          {mail.hasAttachment && (
            <div className="mt-8">
              <MailAttachments attachments={mail.attachments} />
            </div>
          )}

        
          <div className="mt-6">
            <MailReplyBox />
          </div>

        </div>

      </div>

    </div>
  );
};

export default MailContent;