import ContactBadge from "./ContactBadge";
import ContactInfo from "./ContactInfo";
import ContactMenu from "./ContactMenu";

const ContactCard = ({ contact }) => {


  return (
    <div className="relative rounded-2xl border border-gray-200 bg-white p-6">

      {/* Three Dot Menu */}
      <ContactMenu contact={contact} />

      {/* Avatar */}
      <div className="flex justify-center">
        <img
          src={contact.avatar}
          alt={contact.name}
          className="h-28 w-28 rounded-3xl object-cover"
        />
      </div>

      {/* Name */}
      <h2 className="mt-5 text-center text-[22px] font-medium text-gray-800">
        {contact.name}
      </h2>

      {/* Designation */}
      <div className="mt-3 flex justify-center">
        <ContactBadge designation={contact.designation} />
      </div>

      {/* Contact Details */}
      <ContactInfo
        location={contact.location}
        email={contact.email}
        phone={contact.phone}
      />

    </div>
  );
};

export default ContactCard;