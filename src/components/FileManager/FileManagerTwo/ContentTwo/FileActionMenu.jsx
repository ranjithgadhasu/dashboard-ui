import {
  Share2,
  Link2,
  Download,
  Pencil,
  Copy,
  FolderInput,
  Trash2,
} from "lucide-react";

const menuItems = [
  {
    title: "Share",
    icon: Share2,
  },
  {
    title: "Sharing Link",
    icon: Link2,
  },

  {
    divider: true,
  },

  {
    title: "Download",
    icon: Download,
  },
  {
    title: "Rename",
    icon: Pencil,
  },
  {
    title: "Copy",
    icon: Copy,
  },
  {
    title: "Move",
    icon: FolderInput,
  },

  {
    divider: true,
  },

  {
    title: "Delete",
    icon: Trash2,
    danger: true,
  },
];

const FileActionMenu = ({
  open,
  onClose,
}) => {
  if (!open) return null;

  return (
    <>
      {/* Overlay */}

      <div
        className="fixed inset-0 z-40"
        onClick={onClose}
      />

      {/* Menu */}

      <div
        className="
          absolute
          right-0
          top-12
          z-50
          w-[250px]
          overflow-hidden
          rounded-2xl
          border
          border-[#EEF2F7]
          bg-white
          shadow-xl
        "
      >
        {menuItems.map((item, index) =>

          item.divider ? (

            <div
              key={index}
              className="my-2 border-t border-[#EEF2F7]"
            />

          ) : (

            <button
              key={index}
              className="
                flex
                w-full
                items-center
                gap-4
                px-5
                py-3
                text-left
                transition
                hover:bg-[#F8FAFC]
              "
            >
              <item.icon
                size={18}
                className={
                  item.danger
                    ? "text-[#EF4444]"
                    : "text-[#667085]"
                }
              />

              <span
                className={`
                  text-[15px]
                  ${
                    item.danger
                      ? "text-[#EF4444]"
                      : "text-[#37393D]"
                  }
                `}
              >
                {item.title}
              </span>
            </button>

          )

        )}
      </div>
    </>
  );
};

export default FileActionMenu;