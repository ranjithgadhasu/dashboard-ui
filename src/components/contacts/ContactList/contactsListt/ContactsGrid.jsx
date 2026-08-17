import ContactCard from "./ContactCard";
import { contactsListData } from "./contactsListData";

const ContactsGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
      {contactsListData.map((contact) => (
        <ContactCard
          key={contact.id}
          contact={contact}
        />
      ))}
    </div>
  );
};

export default ContactsGrid;