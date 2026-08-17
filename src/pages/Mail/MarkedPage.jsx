import { useState } from "react";
import MailToolbar from "../../components/Mail/InboxToolbar/MailToolbar";
import MailTable from "../../components/Mail/InboxToolbar/MailTable";
import { inboxMails } from "../../components/Mail/InboxToolbar/mailData";

const MarkedPage = () => {
  const [search, setSearch] = useState("");

  // Mail state
  const [mailList, setMailList] = useState([
    ...inboxMails,
    ...inboxMails,
    ...inboxMails,
  ]);

  // Check if all are selected
  const allSelected =
    mailList.length > 0 &&
    mailList.every((mail) => mail.checked);

  // Select / Deselect all
  const handleSelectAll = () => {
    setMailList((prev) =>
      prev.map((mail) => ({
        ...mail,
        checked: !allSelected,
      }))
    );
  };

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl bg-white">
      <MailToolbar
        search={search}
        setSearch={setSearch}
        total={200}
        currentPage={1}
        allSelected={allSelected}
        onSelectAll={handleSelectAll}
      />

      <MailTable
        mails={mailList}
        search={search}
      />
    </div>
  );
};

export default MarkedPage;