import { useState } from "react";

import Header from "../layout/Header";
import Sidebar from "../layout/Sidebar";

import ProfileFeed from "../MyProfile/ProfileFeed";
import ProfileSidebarTwo from "./ProfileSidebarTwo";

import "./MyProfileTwoLayout.css";

const MyProfileTwoLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="my-profile-two-layout">

      {/* Mobile overlay */}
      {isSidebarOpen && (
        <div
          className="my-profile-two-overlay"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`my-profile-two-sidebar ${
          isSidebarOpen ? "my-profile-two-sidebar-open" : ""
        }`}
      >
        <Sidebar
          onClose={() => setIsSidebarOpen(false)}
        />
      </aside>


      {/* Main */}
      <main className="my-profile-two-main">

        {/* Header */}
        <div className="my-profile-two-header">
          <Header
            setOpen={() => setIsSidebarOpen(true)}
          />
        </div>


        {/* Content */}
        <div className="my-profile-two-content">

          <div className="my-profile-two-grid">

            {/* Profile sidebar */}
            <aside className="my-profile-two-profile-sidebar">
              <ProfileSidebarTwo />
            </aside>


            {/* Feed */}
            <section className="my-profile-two-feed">
              <ProfileFeed />
            </section>

          </div>

        </div>

      </main>

    </div>
  );
};

export default MyProfileTwoLayout;