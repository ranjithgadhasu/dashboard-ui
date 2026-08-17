import { Menu } from "lucide-react";

const MobileHeader = ({ setOpen }) => {
  return (
    <div className="mobile-header top-20">

      <button
        type="button"
        onClick={() => setOpen(true)}
        className="mobile-menu-button"
      >
        <Menu size={22} />
      </button>

    </div>
  );
};

export default MobileHeader;