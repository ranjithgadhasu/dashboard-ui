import { useState } from "react";
import { MoreHorizontal } from "lucide-react";
import EditContactModal from "./EditModal/EditContactModal";

const ContactMenu = ({ contact }) => {
  const [isOpen, setIsOpen] = useState(false);


  return (
 <>
    <div className="absolute top-4 right-4">
      <button
          onClick={() => {
    setIsOpen(true);
  }}
        className="flex h-8 w-8 items-center justify-center rounded-full text-gray-400 transition hover:bg-gray-100 hover:text-gray-700"
      >
        <MoreHorizontal size={18} />
      </button>
    </div>
     <EditContactModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        contact={contact}
      />
 </>
  );
};

export default ContactMenu;
