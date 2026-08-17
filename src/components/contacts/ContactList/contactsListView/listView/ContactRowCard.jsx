import ContactMenu from "../../../ContactsTwo/ContactMenu";


const ContactRowCard = ({ contact }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5">

      {/* Top */}

      <div className="flex items-start justify-between">

        <div className="flex items-center gap-3">

          <img
            src={contact.image}
            alt={contact.name}
            className="w-10 h-10 rounded-xl object-cover"
          />

          <div>

            <h3 className="text-[18px] font-medium text-[#3E4453]">
              {contact.name}
            </h3>

            <p className="text-[13px] text-[#9CA3AF] mt-1">
              {contact.designation}
            </p>

          </div>

        </div>

        {/* Three Dots */}

        <ContactMenu contact={contact} />

      </div>

      <div className="border-t border-gray-100 my-5"></div>

      {/* Remaining Code */}

      <div className="space-y-4">

        <div className="flex justify-between">
          <span className="text-[14px] font-normal">Location:</span>
          <span className="text-[14px] font-normal text-[#9CA3AF] ">{contact.location}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-[14px] font-normal">Email:</span>
          <span className="text-[14px] font-normal text-[#9CA3AF] ">{contact.email}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-[14px] font-normal">Phone:</span>
          <span className="text-[14px] font-normal text-[#9CA3AF] ">{contact.phone}</span>
        </div>

      </div>

    </div>
  );
};

export default ContactRowCard;