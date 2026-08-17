import { mailFolders } from "./mailSidebarData";

const MailFolders = ({
  activeFolder,
  onFolderChange,
}) => {
  return (
    <div className="space-y-1">
      {mailFolders.map((folder) => {
        const Icon = folder.icon;
        const isActive = activeFolder === folder.name;

        return (
          <button
            key={folder.id}
            onClick={() => onFolderChange(folder.name)}
            className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 transition-all duration-200 ${
              isActive
                ? "bg-[#EEF7F1] text-[#22963F]"
                : "text-[#5E6472] hover:bg-[#F7F8FA]"
            }`}
          >
            {/* Left */}
            <div className="flex items-center gap-3">
              {folder.image ? (
                <img
                  src={folder.image}
                  alt={folder.name}
                  className="h-5 w-5 object-contain"
                />
              ) : (
                Icon && <Icon size={18} />
              )}

              <span
                className={`text-sm ${
                  isActive
                    ? "font-semibold"
                    : "font-medium"
                }`}
              >
                {folder.name}
              </span>
            </div>

            {/* Count */}
            {folder.count > 0 && (
              <span
                className={`flex h-6 min-w-[24px] items-center justify-center rounded-full px-2 text-xs font-semibold ${
                  isActive
                    ? "bg-[#22963F] text-white"
                    : "bg-[#F1F3F6] text-[#6B7280]"
                }`}
              >
                {folder.count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
};

export default MailFolders;