import { MoreVertical } from "lucide-react";

const ContactItem = ({ contact }) => {
  return (
    <div
      className="
        group
        flex
        items-center
        justify-between
        rounded-xl
        px-3
        py-2
        transition-all
        duration-300
        hover:bg-[#F7F8FA]
        cursor-pointer
      "
    >
      {/* Left */}

      <div className="flex items-center gap-3">

        <img
          src={contact.image}
          alt={contact.name}
          className="h-11 w-11 rounded-full object-cover"
        />

        <div>

          <h3 className="text-[16px] font-medium text-[#3F434A]">
            {contact.name}
          </h3>

          <p className="text-[14px] text-[#A1A8B3]">
            {contact.role}
          </p>

        </div>

      </div>

      {/* Right */}

      <button
        className="
          flex
          h-8
          w-8
          items-center
          justify-center
          rounded-full
          transition-all
          duration-300
          group-hover:bg-white
          group-hover:shadow-sm
        "
      >
        <MoreVertical
          size={18}
          className="text-[#8A9099]"
        />
      </button>

    </div>
  );
};

export default ContactItem;