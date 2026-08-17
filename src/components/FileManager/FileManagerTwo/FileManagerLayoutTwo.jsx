import { useState } from "react";

import LeftSidebarTwo from "./SidebarTwo/LeftSidebarTwo";
import Header from "./Header/Header";
import FileList from "./ContentTwo/FileList";
import FolderPreview from "../RightPanel/FolderPreview";

import "./FileManagerLayoutTwo.css";

const FileManagerLayoutTwo = () => {
  const [search, setSearch] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="file-manager-two flex h-screen bg-[#F8FAFC]">

      {/* Left Sidebar */}
      <div className="file-manager-two-sidebar">
        <LeftSidebarTwo
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
      </div>

      {/* Main Section */}
      <div className="file-manager-two-main flex flex-1 flex-col min-w-0">

        {/* Header */}
        <Header
          search={search}
          setSearch={setSearch}
          setOpen={() => setIsSidebarOpen(true)}
        />

        {/* Content */}
        <div className="file-manager-two-body flex flex-1 min-w-0 overflow-hidden">

          {/* File List */}
          <div className="file-manager-two-files">
            <FileList search={search} />
          </div>

          {/* Right Panel */}
          <div className="file-manager-two-preview">
            <FolderPreview />
          </div>

        </div>

      </div>

    </div>
  );
};

export default FileManagerLayoutTwo;