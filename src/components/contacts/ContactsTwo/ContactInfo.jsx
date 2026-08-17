

const ContactInfo = ({ location, email, phone }) => {
  return (
    <div className="mt-6 border-t border-gray-100 pt-5 space-y-4">
      {/* Location */}
      <div className="flex items-center justify-between text-sm">
        <span className="font-normal text-[14px] text-gray-700">Location:</span>
        <span className="text-gray-400 text-right">{location}</span>
      </div>

      {/* Email */}
      <div className="flex items-center justify-between text-sm">
        <span className="font-normal text-[14px] text-gray-700">Email:</span>
        <span className="text-gray-400 text-right break-all">
          {email}
        </span>
      </div>

      {/* Phone */}
      <div className="flex items-center justify-between text-sm">
        <span className="font-normal text-[14px] text-gray-700">Phone:</span>
        <span className="text-gray-400 text-right">{phone}</span>
      </div>
    </div>
  );
};

export default ContactInfo;