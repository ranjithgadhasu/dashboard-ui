import { Upload } from "lucide-react";

const UploadButton = ({
  text = "Upload",
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="
        flex
        items-center
        gap-2
        h-[40px]
        rounded-lg
        bg-[#28A745]
        px-4
        py-2.5
        text-[14px]
        font-medium
        text-white
        transition-all
        duration-200
        hover:bg-[#22963D]
        mr-[150px]
        active:scale-95
      "
    >
      <Upload size={16} />

      <span>{text}</span>
    </button>
  );
};

export default UploadButton;