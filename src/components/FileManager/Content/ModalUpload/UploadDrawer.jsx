import { X } from "lucide-react";
import UploadHeader from "./UploadHeader";
import UploadItem from "./UploadItem";
import { uploadData } from "./uploadData";
import "./uploaddrawer.css"

const UploadDrawer = ({
  open,
  onClose,
}) => {

  if (!open) return null;

  return (
    <>

      {/* Background */}

      <div
        onClick={onClose}
        className="upload-drawer-overlay fixed inset-0 bg-black/20 z-40"
      />

      {/* Drawer */}

      <div
        className="
          upload-drawer
          fixed
          right-0
          top-18
          z-50
          h-[650px]
          w-[500px]
          bg-white
          shadow-2xl
          overflow-y-auto
          rounded-md
          border-1
          border-[#adaaaa]
        "
      >

        {/* Close */}

        <button
          onClick={onClose}
          className="upload-drawer-close absolute right-6 top-4"
        >
          <X size={22} />
        </button>

        {/* Header */}

        <UploadHeader />

        {/* Upload Items */}

        <div className="upload-drawer-list mt-2 px-8">

          {uploadData.map((item) => (

            <UploadItem
              key={item.id}
              item={item}
            />

          ))}

        </div>

      </div>

    </>
  );
};

export default UploadDrawer;