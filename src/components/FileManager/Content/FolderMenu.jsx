import {
  Share2,
  Link,
  Download,
  Pencil,
  Copy,
  FolderInput,
  Trash2,
} from "lucide-react";

const FolderMenu = ({ open }) => {
  if (!open) return null;

  const menu = [
    { icon: Share2, label: "Share" },
    { icon: Link, label: "Sharing Link" },

    { divider: true },

    { icon: Download, label: "Download" },
    { icon: Pencil, label: "Rename" },
    { icon: Copy, label: "Copy" },
    { icon: FolderInput, label: "Move" },

    { divider: true },

    { icon: Trash2, label: "Delete", danger: true },
  ];

  return (
    <div
      className="
        absolute
        top-16
        mt-60
        left-1/2
        -translate-x-1/2
        w-[224px]
        h-[354px]
        rounded-[22px]
        bg-white
        shadow-[0_12px_40px_rgba(0,0,0,0.15)]
        border
        border-[#EEF2F7]
        z-50
        pt-5
        overflow-hidden
      "
    >
      {menu.map((item, index) =>
        item.divider ? (
          <div
            key={index}
            className="mt-4 border-t border-[#EEF2F7]"
          />
        ) : (
          <button
            key={index}
            className="
              flex
              w-full
              items-center
              gap-5
              px-8
              py-2
              text-left
              transition
              hover:bg-[#F8FAFC]
            "
          >
            <item.icon
              size={21}
              className={
                item.danger
                  ? "text-[#FF5C5C]"
                  : "text-[#98A2B3]"
              }
            />

            <span
              className={
                item.danger
                  ? "text-[15px] text-[#FF5C5C]"
                  : "text-[15px] text-[#4B5563]"
              }
            >
              {item.label}
            </span>
          </button>
        )
      )}
    </div>
  );
};

export default FolderMenu;