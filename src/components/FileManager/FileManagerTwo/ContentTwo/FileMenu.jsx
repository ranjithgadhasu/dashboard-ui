import { useState } from "react";
import { MoreVertical } from "lucide-react";
import FileActionMenu from "./FileActionMenu";

const FileMenu = ({
  file,
  onAction,
}) => {

  const [open, setOpen] = useState(false);

  return (

    <div className="relative">

      {/* Menu Button */}

      <button
        onClick={() => setOpen(!open)}
        className="
          flex
          h-9
          w-9
          items-center
          justify-center
          rounded-lg
          transition-all
          duration-200
          hover:bg-[#F5F7FA]
        "
      >
        <MoreVertical
          size={18}
          className="text-[#98A2B3]"
        />
      </button>

      {/* Action Menu */}

      <FileActionMenu
        isOpen={open}
        onClose={() => setOpen(false)}
        onAction={(action) => {
          onAction?.(action, file);
        }}
      />

    </div>

  );
};

export default FileMenu;