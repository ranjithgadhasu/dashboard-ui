import { useState } from "react";
import { useNavigate } from "react-router-dom";

import DashboardFiveLayout from "../dashboardFiveLayout/DashboardFiveLayout";
import Header from "../layout/Header";
import ContactTable from "./ContactTable";
import ContactProfile from "./ContactProfile";

import "./ContactMainLayout.css";

const ContactMainLayout = () => {
  const navigate = useNavigate();

  // Sidebar open / close state
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="contact-main-layout flex h-screen bg-[#F6F7FB]">
      {/* =================================
          SIDEBAR
          ================================= */}

      <DashboardFiveLayout
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* =================================
          RIGHT CONTENT
          ================================= */}

      <div className="contact-main-content flex flex-1 flex-col overflow-hidden">
        {/* =================================
            HEADER
            ================================= */}

        <Header setOpen={() => setIsSidebarOpen((prev) => !prev)} />

        {/* =================================
            PAGE
            ================================= */}

        <div className="contact-page-content flex-1 overflow-y-auto p-6">
          {/* =================================
              PAGE HEADER
              ================================= */}

          <div className="contact-page-header mb-6 flex items-center justify-between">
            {/* Title */}

            <h1 className="contact-page-title text-3xl font-semibold text-[#40434E]">
              Contacts
            </h1>

            {/* Navigation */}

            <div className="contact-page-navigation">
              <button
                onClick={() => navigate("/contacts-pagetwo")}
                className="contact-nav-button"
              >
                Contact-List
              </button>

              <button
                onClick={() => navigate("/contact-listpage")}
                className="contact-nav-button"
              >
                List-Grid
              </button>

              <button
                onClick={() => navigate("/contact-list-view")}
                className="contact-nav-button"
              >
                GridList
              </button>
            </div>

            {/* Add Contact */}

            <button
              className="
                contact-add-button
                rounded-md
                bg-[#23963D]
                px-4
                py-2
                text-white
              "
            >
              + Add Contact
            </button>
          </div>

          {/* =================================
              CONTACT CONTENT
              ================================= */}

          <div className="contact-content-wrapper overflow-hidden rounded-2xl border border-[#E8E8E8] bg-white shadow-sm">
            <div className="contact-content-grid grid grid-cols-12 min-h-[720px]">
              {/* Contact Table */}

              <div className="contact-table-section col-span-9 border-r border-[#ECECEC]">
                <ContactTable />
              </div>

              {/* Contact Profile */}

              <div className="contact-profile-section col-span-3">
                <ContactProfile />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMainLayout;
