import { useState } from "react";

import MailTopbar from "./MailTopbar";
import MailSidebar from "../MailSidebar/MailSidebar";
import ComposeModal from "../Compose/ComposeModal";

import InboxPage from "../../../pages/Mail/InboxPage";
import MarkedPage from "../../../pages/Mail/MarkedPage";
import DraftPage from "../../../pages/Mail/DraftPage";
import SentPage from "../../../pages/Mail/SentPage";
import ImportantPage from "../../../pages/Mail/ImportantPage";
import DeletedPage from "../../../pages/Mail/DelatedPage";
import "./MailLayout.css"

const MailLayout = () => {
  const [activeFolder, setActiveFolder] = useState("Inbox");
  const [showCompose, setShowCompose] = useState(false);

  const [mobileView, setMobileView] = useState("list");

  const renderPage = () => {
    switch (activeFolder) {
      case "Inbox":
        return <InboxPage />;

      case "Marked":
        return <MarkedPage />;

      case "Drafts":
        return <DraftPage />;

      case "Sent":
        return <SentPage />;

      case "Important":
        return <ImportantPage />;

      case "Deleted":
        return <DeletedPage />;

      default:
        return <InboxPage />;
    }
  };

  return (
    <>
      <div className="flex h-full flex-col bg-[#F8F9FC]">
       <MailTopbar
  onMobileMenuClick={() => setMobileView("folders")}
/>

        <div className="flex flex-1 overflow-hidden">

          {/* Mail Sidebar */}
   {/* Mail Sidebar */}
<div
  className={`mail-sidebar-wrapper ${
    mobileView === "folders" ? "mobile-mail-sidebar-open" : ""
  }`}
>
  <MailSidebar
    activeFolder={activeFolder}
    onFolderChange={(folder) => {
      setActiveFolder(folder);
      setMobileView("list");
    }}
    onCompose={() => setShowCompose(true)}
    onMobileClose={() => setMobileView("list")}
  />
</div>

{/* Mail Page */}
<div
  className={`mail-page-wrapper ${
    mobileView === "list" ? "mobile-mail-page-open" : ""
  }`}
>
  {renderPage()}
</div>

        </div>
      </div>

      <ComposeModal
        open={showCompose}
        onClose={() => setShowCompose(false)}
        onSend={(mail) => console.log(mail)}
        onSaveDraft={(draft) => console.log(draft)}
      />
    </>
  );
};

export default MailLayout;