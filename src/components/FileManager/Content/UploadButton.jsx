import { Upload } from "lucide-react";

const UploadButton = () => {
  return (
    <button
      className="
        flex
        h-12
        items-center
        justify-center
        gap-2
        rounded-xl
        bg-[#0a7c34]
        px-6
        text-[14px]
        font-semibold
        text-white
        transition-all
        duration-300
        hover:bg-[#16A34A]
        active:scale-95
        upload-button
      "
    >
      {/* Upload Icon */}

      <Upload size={18} />

      {/* Button Text */}

      <span className="text-[15px] font-medium">Upload</span>
    </button>
  );
};

export default UploadButton;