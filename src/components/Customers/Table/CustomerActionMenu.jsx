import { useEffect, useRef, useState } from "react";
import {
  MoreVertical,
  Eye,
  Pencil,
  Ban,
  Trash2,
} from "lucide-react";
import "./customerAction.css"

const CustomerActionMenu = ({
  customer,
  onView,
  onEdit,
  onBlock,
  onDelete,
}) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
  }, []);

  const handleAction = (callback) => {
    callback?.(customer);
    setOpen(false);
  };

  return (
    <div
      className="relative inline-block customer-action-menu"
      ref={menuRef}
    >
      <button
        onClick={() => setOpen(!open)}
        className="rounded-lg p-2 text-[#8A9099] transition hover:bg-[#F5F6F8] hover:text-[#3F434A] customer-action-trigger"
        aria-label="Customer actions"
      >
        <MoreVertical size={18} />
      </button>

      {open && (
        <div className="absolute right-0 top-11 z-50 w-48 overflow-hidden rounded-xl border border-[#E9EDF3] bg-white shadow-xl customer-action-dropdown">
          <button
            onClick={() => handleAction(onView)}
            className="flex w-full items-center gap-3 px-4 py-3 text-left text-[14px] text-[#3F434A] transition hover:bg-[#F8F9FB] customer-action-item"
          >
            <Eye size={16} />
            View
          </button>

          <button
            onClick={() => handleAction(onEdit)}
            className="flex w-full items-center gap-3 px-4 py-3 text-left text-[14px] text-[#3F434A] transition hover:bg-[#F8F9FB] customer-action-item"
          >
            <Pencil size={16} />
            Edit
          </button>

          <button
            onClick={() => handleAction(onBlock)}
            className="flex w-full items-center gap-3 px-4 py-3 text-left text-[14px] text-[#F59E0B] transition hover:bg-[#FFF7ED] customer-action-item"
          >
            <Ban size={16} />
            Block
          </button>

          <button
            onClick={() => handleAction(onDelete)}
            className="flex w-full items-center gap-3 px-4 py-3 text-left text-[14px] text-[#EF4444] transition hover:bg-[#FEF2F2] customer-action-item"
          >
            <Trash2 size={16} />
            Delete
          </button>
        </div>
      )}
    </div>
  );
};
export default CustomerActionMenu;