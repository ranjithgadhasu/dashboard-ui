import { useEffect, useState } from "react";
import MailRow from "./MailRow";

const MailTable = ({ mails = [], search = "" }) => {
  const [mailList, setMailList] = useState([]);
  const [selectedMail, setSelectedMail] = useState(null);

  useEffect(() => {
    setMailList(mails);
  }, [mails]);

  // Select Row
  const handleRowClick = (mail) => {
    setSelectedMail(mail.id);
  };

  // Toggle Star
  const handleToggleStar = (id) => {
    setMailList((prev) =>
      prev.map((mail) =>
        mail.id === id
          ? { ...mail, starred: !mail.starred }
          : mail
      )
    );
  };

  // Toggle Bookmark
  const handleToggleBookmark = (id) => {
    setMailList((prev) =>
      prev.map((mail) =>
        mail.id === id
          ? { ...mail, bookmarked: !mail.bookmarked }
          : mail
      )
    );
  };

  // Toggle Checkbox
  const handleToggleSelect = (id) => {
    setMailList((prev) =>
      prev.map((mail) =>
        mail.id === id
          ? { ...mail, checked: !mail.checked }
          : mail
      )
    );
  };

  // Search Filter
  const filteredMails = mailList.filter((mail) => {
    const text = search.toLowerCase();

    return (
      mail.sender.toLowerCase().includes(text) ||
      mail.subject.toLowerCase().includes(text) ||
      mail.preview.toLowerCase().includes(text)
    );
  });

  return (
    <div className="flex-1 overflow-y-auto bg-white">
      {filteredMails.length === 0 ? (
        <div className="flex h-40 items-center justify-center text-gray-500">
          No mails found.
        </div>
      ) : (
        filteredMails.map((mail) => (
          <MailRow
            key={mail.id}
            mail={mail}
            selected={selectedMail === mail.id}
            onClick={handleRowClick}
            onToggleStar={handleToggleStar}
            onToggleBookmark={handleToggleBookmark}
            onToggleSelect={handleToggleSelect}
          />
        ))
      )}
    </div>
  );
};

export default MailTable;