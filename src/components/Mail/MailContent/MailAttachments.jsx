import {
  Download,
  FileText,
  FileArchive,
  FileSpreadsheet,
  FileImage,
  File,
} from "lucide-react";

const getFileIcon = (name) => {
  const ext = name.split(".").pop().toLowerCase();

  switch (ext) {
    case "pdf":
      return <FileText size={34} className="text-[#EF4444]" />;

    case "zip":
    case "rar":
      return <FileArchive size={34} className="text-[#8A9099]" />;

    case "xls":
    case "xlsx":
      return <FileSpreadsheet size={34} className="text-[#16A34A]" />;

    case "png":
    case "jpg":
    case "jpeg":
      return <FileImage size={34} className="text-[#2563EB]" />;

    default:
      return <File size={34} className="text-[#8A9099]" />;
  }
};

const MailAttachments = ({ attachments = [] }) => {
  if (!attachments.length) return null;

  return (
    <div className="flex flex-wrap gap-8">
      {attachments.map((file) => (
        <div
          key={file.id}
          className="flex h-[94px] w-[320px] items-center justify-between rounded-[20px] border border-[#E6EBF2] bg-white px-5 transition hover:border-[#22963F]"
        >
          <div className="flex items-center gap-5">

            <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-[#EEF2F7]">
              {getFileIcon(file.name)}
            </div>

            <div>

              <h4 className="text-[17px] font-medium text-[#394150]">
                {file.name}
              </h4>

              <p className="mt-1 text-[15px] text-[#899099]">
                {file.size}
              </p>

            </div>

          </div>

          <button className="transition hover:text-[#22963F]">
            <Download
              size={24}
              className="text-[#899099]"
            />
          </button>
        </div>
      ))}
    </div>
  );
};

export default MailAttachments;