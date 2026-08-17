import ComposeButton from "./ComposeButton";
import MailFolders from "./MailFolders";
import MailLabels from "./MailLabels";
import "./mailsidebar.css";

const MailSidebar = ({
  activeFolder,
  onFolderChange,
  onCompose,
  onMobileClose,
}) => {
  const handleFolderChange = (folder) => {
    onFolderChange(folder);

    if (onMobileClose) {
      onMobileClose();
    }
  };

  return (
    <aside className="mail-sidebar flex h-full w-[240px] flex-col border-r border-[#E9EDF5] bg-white">

      {/* Mobile Header */}
      <div className="mail-mobile-header">
        <span className="text-base font-semibold text-[#2D4058]">
          Mail
        </span>

        <button
          type="button"
          onClick={onMobileClose}
          className="mail-mobile-close"
        >
          ✕
        </button>
      </div>

      {/* Compose Button */}
      <div className="p-5">
        <ComposeButton onClick={onCompose} />
      </div>

      {/* Sidebar Content */}
      <div className="flex-1 overflow-y-auto px-3">
        <MailFolders
          activeFolder={activeFolder}
          onFolderChange={handleFolderChange}
        />

        <div className="my-6 border-t border-[#EEF2F7]" />

        <MailLabels />
      </div>

    </aside>
  );
};

export default MailSidebar;