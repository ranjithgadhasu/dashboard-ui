import { MoreHorizontal } from "lucide-react";

const badgeClasses = {
  green: "bg-green-50 text-green-600",
  blue: "bg-sky-50 text-sky-600",
  red: "bg-red-50 text-red-500",
  yellow: "bg-yellow-50 text-yellow-600",
  purple: "bg-purple-50 text-purple-600",
  orange: "bg-orange-50 text-orange-600",
};

const ContactCard = ({ contact }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-all duration-300">

      {/* Three Dots */}

      <div className="flex justify-end">
        <button className="text-gray-400 hover:text-gray-600">
          <MoreHorizontal size={20} />
        </button>
      </div>

      {/* Image */}

      <div className="flex justify-center mt-1">
        <img
          src={contact.image}
          alt={contact.name}
          className="w-32 h-32 object-cover rounded-[28px]"
        />
      </div>

      {/* Name */}

      <div className="text-center mt-6">

        <h2 className="text-[22px] font-medium text-gray-700">
          {contact.name}
        </h2>
        <span
          className={`inline-block mt-3 px-4 py-1 rounded-full text-xs font-medium ${badgeClasses[contact.badgeColor]}`}
        >
          {contact.designation}
        </span>
      </div>
      {/* Email */}
      <div className="mt-7 text-center">

        <p className="text-[14px] font-normal text-gray-400">
          {contact.email}
        </p>

        <p className="text-[14px] font-normal text-gray-400 mt-2">
          {contact.phone}
        </p>

      </div>

      {/* Buttons */}

      <div className="flex gap-3 mt-8">

        <button
          className="flex-1 h-11 cursor-pointer rounded-xl border border-gray-200
          text-gray-600 text-sm font-medium
          hover:bg-gray-50 transition"
        >
          Profile
        </button>

        <button
          className="flex-1 h-11 cursor-pointer rounded-xl border border-gray-200
          text-gray-600 text-sm font-medium
          hover:bg-gray-50 transition"
        >
          Message
        </button>

      </div>

    </div>
  );
};

export default ContactCard;