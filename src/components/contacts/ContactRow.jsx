import { MoreVertical } from "lucide-react";

const ContactRow = ({ contact, checked, onCheck }) => {
  return (
    <tr
      className={`border-b border-[#ECECEC] transition ${
        checked ? "bg-[#F3FFF4]" : "hover:bg-[#F9FAFB]"
      }`}
    >
      {/* Checkbox */}
      <td className="px-4 py-4">
        <input
          type="checkbox"
          checked={checked}
          onChange={onCheck}
          className="h-4 w-4 cursor-pointer rounded border-gray-300 accent-[#23963D]"
        />
      </td>

      {/* Name */}
      <td className="px-4 py-4">
        <div className="flex items-center gap-3">
          <img
            src={contact.avatar}
            alt={contact.name}
            className="h-10 w-10 rounded-full object-cover"
          />

          <div>
            <h4 className="text-[15px] font-normal text-[#40434E]">
              {contact.name}
            </h4>

            <p className="text-[12px] text-[#9CA3AF]">
              {contact.role}
            </p>
          </div>
        </div>
      </td>

      {/* Email */}
      <td className="px-4 py-4 text-[14px] text-[#6B7280]">
        {contact.email}
      </td>

      {/* Location */}
      <td className="px-4 py-4 text-[14px] text-[#40434E]">
        {contact.location}
      </td>

      {/* Phone */}
      <td className="px-4 py-4 text-[14px] text-[#9CA3AF]">
        {contact.phone}
      </td>

      {/* Status */}
<td className="px-4 py-4">
  <span
    className="
      inline-flex
      items-center
      justify-center
      rounded-full
      bg-[#ECF9F0]
      px-4
      py-1
      text-[12px]
      font-medium
      text-[#22A447]
    "
  >
    {contact.status}
  </span>
</td>

      {/* Menu */}
      <td className="px-4 py-4 text-right">
        <button className="rounded-md p-1 hover:bg-gray-100">
          <MoreVertical
            size={18}
            className="text-[#7C8593]"
          />
        </button>
      </td>
    </tr>
  );
};

export default ContactRow;