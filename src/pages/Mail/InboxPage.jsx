import { useState } from "react";
import { mailData } from "../../components/Mail/MailList/mailData";

import MailList from "../../components/Mail/MailList/MailList";
import MailContent from "../../components/Mail/MailContent/MailContent";
import"./inboxpage.css"

const InboxPage = () => {
  const [selectedMail, setSelectedMail] = useState(mailData[0]);

  // ADD THIS
  const [mobileView, setMobileView] = useState("list");

  // ADD THIS
  const handleSelectMail = (mail) => {
    setSelectedMail(mail);
    setMobileView("content");
  };

  return (
    <div className={`flex h-full inbox-page mobile-${mobileView}`}>

      <div className="w-[420px] border-r border-[#EEF2F7] bg-white inbox-mail-list">
        <MailList
          mails={mailData}
          selectedMail={selectedMail}
          onSelectMail={handleSelectMail}
        />
      </div>

      <div className="flex-1 overflow-hidden bg-white inbox-mail-content">
        <MailContent
          mail={selectedMail}
          onBack={() => setMobileView("list")}
        />
      </div>

    </div>
  );
};

export default InboxPage;