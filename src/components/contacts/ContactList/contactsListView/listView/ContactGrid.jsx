import ContactRowCard from "./ContactRowCard";
import { contactsListViewData } from "./contactsListViewData";

const ContactGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {contactsListViewData.map((contact) => (
        <ContactRowCard
          key={contact.id}
          contact={contact}
        />
      ))}
    </div>
  );
};

export default ContactGrid;