import Header from "../../layout/Header";
import DashboardFiveSidebar from "../../dashboardFiveLayout/DashboardFiveSidebar";
import PageContent from "./contactsListt/PageContent";
import ContactList from "../../../pages/Contacts/ContactList";

import "./ContactListLayout.css";

const ContactListLayout = () => {
  return (
    <div className="contact-list-layout">

      {/* =================================
          SIDEBAR
          ================================= */}

      <div className="contact-list-sidebar">
        <DashboardFiveSidebar />
      </div>


      {/* =================================
          MAIN SECTION
          ================================= */}

      <div className="contact-list-main">

        {/* Header */}

        <div className="contact-list-header">
          <Header />
        </div>


        {/* Page Content */}

        <main className="contact-list-content">

          <PageContent>
            <ContactList />
          </PageContent>

        </main>

      </div>

    </div>
  );
};
export default ContactListLayout;