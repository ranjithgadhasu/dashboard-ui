import { useState } from "react";
import { Plus } from "lucide-react";
import AddContactModal from "./addModal/AddContactModal";

const AddContactButtonTwo = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="
          inline-flex
          items-center
          gap-2
          h-[40px]
          px-5
          rounded-xl
          bg-green-600
          text-white
          text-sm
          font-medium
          shadow-sm
          transition-all
          duration-300
          hover:bg-green-700
          hover:shadow-md
          active:scale-95
        "
      >
        <Plus size={18} strokeWidth={2.5} />

        <span>Add Contact</span>
      </button>

      <AddContactModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
};

export default AddContactButtonTwo;