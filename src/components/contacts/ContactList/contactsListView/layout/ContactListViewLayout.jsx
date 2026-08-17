import { useState } from "react";

import PageContent from "./PageContent";
import ContactListView from "../listView/ContactListView";
import DashboardFiveSidebar from "../../../../dashboardFiveLayout/DashboardFiveSidebar";
import Header from "../../../../layout/Header";

import "./ContactListViewLayout.css";

const ContactListViewLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="contact-list-view-layout">

      {/* =================================
          SIDEBAR
          ================================= */}

      <div
        className={`contact-list-view-sidebar ${
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
          className="contact-list-view-overlay"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}


      {/* =================================
          MAIN SECTION
          ================================= */}

      <div className="contact-list-view-main">

        {/* Header */}

        <div className="contact-list-view-header">
          <Header
            setOpen={() => setIsSidebarOpen(true)}
          />
        </div>


        {/* Content */}

        <main className="contact-list-view-content">

          <PageContent>
            <ContactListView />
          </PageContent>

        </main>

      </div>

    </div>
  );
};
export default ContactListViewLayout;