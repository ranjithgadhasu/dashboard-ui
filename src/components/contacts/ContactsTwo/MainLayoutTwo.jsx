import { useMemo, useState } from "react";

import SearchBarTwo from "./SearchBarTwo";
import AddContactButtonTwo from "./AddContactButtonTwo";
import ContactsGrid from "./ContactsGrid";
import { contactsData } from "./contactsData";

import Header from "../../layout/Header";
import DashboardFiveSidebar from "../../dashboardFiveLayout/DashboardFiveSidebar";

import "./MainLayoutTwo.css";

const MainLayoutTwo = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const filteredContacts = useMemo(() => {
    if (!searchTerm.trim()) {
      return contactsData;
    }

    const search = searchTerm.toLowerCase();

    return contactsData.filter(
      (contact) =>
        contact.name.toLowerCase().includes(search) ||
        contact.designation.toLowerCase().includes(search) ||
        contact.location.toLowerCase().includes(search) ||
        contact.email.toLowerCase().includes(search) ||
        contact.phone.toLowerCase().includes(search)
    );
  }, [searchTerm]);

  const handleAddContact = () => {
    console.log("Add Contact");
  };

  return (
    <div className="main-layout-two">

      {/* =================================
          SIDEBAR
          ================================= */}

      <div
        className={`main-layout-two-sidebar ${
          isSidebarOpen ? "is-open" : ""
        }`}
      >
        <DashboardFiveSidebar />
      </div>


      {/* =================================
          MOBILE OVERLAY
          ================================= */}

      {isSidebarOpen && (
        <div
          className="main-layout-two-overlay"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}


      {/* =================================
          HEADER
          ================================= */}

      <div className="main-layout-two-header">

        <Header
          setOpen={() =>
            setIsSidebarOpen((prev) => !prev)
          }
        />

      </div>


      {/* =================================
          MAIN CONTENT
          ================================= */}

      <main className="main-layout-two-content">

        <div className="main-layout-two-inner">

          {/* Search + Add Contact */}

          <div className="main-layout-two-topbar">

            <SearchBarTwo
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />

            <AddContactButtonTwo
              onClick={handleAddContact}
            />

          </div>


          {/* Contacts */}

          <div className="main-layout-two-cards">
            <ContactsGrid contacts={filteredContacts} />
          </div>

        </div>

      </main>

    </div>
  );
};

export default MainLayoutTwo;