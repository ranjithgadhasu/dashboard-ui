import { useState } from "react";

import Header from "../../layout/Header";

import FolderSidebar from "../Sidebar/FolderSidebar";
import ContentArea from "../Content/ContentArea";
import FolderPreview from "../RightPanel/FolderPreview";
import LeftSidebar from "../MainLeftSidebar/LeftSidebar";

import "./FileManagerLayout.css";

const FileManagerLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="file-manager-layout flex h-screen bg-[#F8FAFC]">

      {/* Dashboard Sidebar */}
      <LeftSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* Main Area */}
      <div className="file-manager-main flex flex-1 flex-col min-w-0">

        {/* Header */}
        <Header setOpen={setIsSidebarOpen} />

        {/* File Manager */}
        <div className="file-manager-body flex flex-1 min-w-0 overflow-hidden">

  <div className="mobile-folder-sidebar">
    <FolderSidebar />
  </div>

  <div className="mobile-content-area">
    <ContentArea />
  </div>

  <div className="mobile-folder-preview">
    <FolderPreview />
  </div>

</div>
      </div>
    </div>
  );
};

export default FileManagerLayout;