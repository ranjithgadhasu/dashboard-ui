import FileToolbar from "./FileToolbar";
import FolderSection from "./FolderSection";
import FileSection from "./FileSection";

const ContentArea = () => {
  return (
    <main
      className="
        flex-1
        overflow-y-auto
        bg-[#F8FAFC]
      "
    >
      <div className="p-8">

        {/* Toolbar */}

        <FileToolbar />

        {/* Folder Section */}

        <FolderSection />

        {/* Files */}

        <div className="mt-10">

          <FileSection />

        </div>

      </div>
    </main>
  );
};

export default ContentArea;