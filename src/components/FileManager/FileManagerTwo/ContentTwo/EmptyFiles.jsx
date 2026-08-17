import { FolderOpen } from "lucide-react";
import UploadButton from "../Header/UploadButton";

const EmptyFiles = ({
  title = "No files found",
  description = "Upload files or create a new folder to get started.",
  showButton = true,
  onUpload,
}) => {
  return (
    <div
      className="
        flex
        h-full
        w-full
        flex-col
        items-center
        justify-center
        px-6
        py-16
        text-center
      "
    >
      {/* Icon */}

      <div
        className="
          flex
          h-24
          w-24
          items-center
          justify-center
          rounded-full
          bg-[#F5F7FA]
        "
      >
        <FolderOpen
          size={48}
          className="text-[#98A2B3]"
        />
      </div>

      {/* Title */}

      <h2
        className="
          mt-6
          text-[22px]
          font-semibold
          text-[#37393D]
        "
      >
        {title}
      </h2>

      {/* Description */}

      <p
        className="
          mt-2
          max-w-[360px]
          text-[14px]
          leading-6
          text-[#98A2B3]
        "
      >
        {description}
      </p>

      {/* Upload Button */}

      {showButton && (
        <div className="mt-8">
          <UploadButton
            text="Upload Files"
            onClick={onUpload}
          />
        </div>
      )}
    </div>
  );
};

export default EmptyFiles;