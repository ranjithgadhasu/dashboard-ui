import { Plus } from "lucide-react";

const ContactHeader = () => {
  return (
    <div className="mb-6 flex items-center justify-between">
      {/* Left */}
      <h1 className="text-[28px] font-medium text-[#40434E]">
        Contacts
      </h1>

      {/* Right */}
      <button
        type="button"
        className="
          flex
          items-center
          gap-2
          h-[40px]
          rounded-md
          bg-[#23963D]
          px-4
          text-[13px]
          font-medium
          text-white
          transition
          hover:bg-[#1D8134]
        "
      >
        <Plus size={16} strokeWidth={2.5} />
        Add Contact
      </button>
    </div>
  );
};

export default ContactHeader;