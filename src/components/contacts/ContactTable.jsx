import { useState } from "react";
import ContactSearch from "./ContactSearch";
import ContactRow from "./ContactRow";
import Pagination from "./Pagination";
import { contacts } from "./data";
import "./ContactTable.css"

const ContactTable = () => {
  const [selectedRows, setSelectedRows] = useState([]);

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedRows(contacts.map((contact) => contact.id));
    } else {
      setSelectedRows([]);
    }
  };

  const handleRowCheck = (id) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter((item) => item !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
    }
  };

  return (
    <div className="contact-table-mobile flex h-full flex-col bg-white">

      {/* Search */}

      <div className="contact-search-mobile">
        <ContactSearch />
      </div>


      {/* Table */}

      <div className="contact-table-scroll flex-1 overflow-auto">

        <table className="contact-table-element w-full">

          <thead className="border-b border-[#ECECEC] bg-[#FAFAFA]">

            <tr>

              <th className="w-12 px-5 py-4">
                <input
                  type="checkbox"
                  checked={
                    selectedRows.length === contacts.length
                  }
                  onChange={handleSelectAll}
                  className="
                    h-4
                    w-4
                    cursor-pointer
                    accent-[#23963D]
                  "
                />
              </th>

              <th className="px-5 py-4 text-left text-[14px] font-normal text-[#928E8E]">
                Name
              </th>

              <th className="px-5 py-4 text-left text-[14px] font-normal text-[#928E8E]">
                Email
              </th>

              <th className="px-5 py-4 text-left text-[14px] font-normal text-[#928E8E]">
                Location
              </th>

              <th className="px-5 py-4 text-left text-[14px] font-normal text-[#928E8E]">
                Phone
              </th>

              <th className="w-10"></th>

            </tr>

          </thead>


          <tbody>

            {contacts.map((contact) => (
              <ContactRow
                key={contact.id}
                contact={contact}
                checked={selectedRows.includes(contact.id)}
                onCheck={() => handleRowCheck(contact.id)}
              />
            ))}

          </tbody>

        </table>

      </div>


      {/* Pagination */}

      <div className="contact-pagination-mobile">
        <Pagination />
      </div>

    </div>
  );
};

export default ContactTable;