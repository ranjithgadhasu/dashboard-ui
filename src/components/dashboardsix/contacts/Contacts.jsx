import { useState } from "react";
import { Plus } from "lucide-react";
import ContactModel from "./ContactModel";

import ContactItem from "./ContactItem";
import { contactsData } from "./contactsData";
import "./contacts.css"

const Contacts = () => {
  const [showContactModal, setShowContactModal] = useState(false);
  return (
    <div className="rounded-[20px] border-none border-[#E9EEF5] bg-white p-6 contacts-sizes">
      {/* Header */}

      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-[20px] font-medium text-[#3F434A]">Contacts</h2>

        <button
          onClick={() => setShowContactModal(true)}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F7F8FA] transition hover:bg-[#EEF2F6]"
        >
          <Plus size={16} className="cursor-pointer text-[#8A9099]" />
        </button>
      </div>

      {/* List */}

      <div className="space-y-2">
        {contactsData.map((contact) => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
      </div>
      {showContactModal && (
  <ContactModel
    onClose={() => setShowContactModal(false)}
  />
)}
    </div>
  );
};

export default Contacts;
