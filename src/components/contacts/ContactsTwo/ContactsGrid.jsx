import ContactCard from "./ContactCard";

const ContactsGrid = ({ contacts }) => {
  if (contacts.length === 0) {
    return (
      <div className="flex h-72 items-center justify-center rounded-xl border border-dashed border-gray-300 bg-white">
        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-700">
            No Contacts Found
          </h3>
          <p className="mt-2 text-sm text-gray-500">
            Try searching with another keyword.
          </p>
        </div>
      </div>
    );
  }
  return (
    <div className="mt-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {contacts.map((contact) => (
          <ContactCard
            key={contact.id}
            contact={contact}
          />
        ))}
      </div>
    </div>
  );
};

export default ContactsGrid;