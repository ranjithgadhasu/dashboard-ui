import FriendsList from "./FriendsList";
import PhotosGrid from "./PhotosGrid";
import ProfileFeed from "./ProfileFeed";
import Sidebar from "../layout/Sidebar";
import Header from "../layout/Header";
import ProfileMain from "./ProfileMain";

import "./MyProfileLayout.css";

const MyProfileLayout = () => {
  return (
    <div className="my-profile-layout ml-30">
      {/* =================================
          SIDEBAR
          ================================= */}

      <div className="my-profile-sidebar">
        <Sidebar />
      </div>

      {/* =================================
          MAIN
          ================================= */}

      <main className="my-profile-main">
        {/* Header */}

        <div className="my-profile-header">
          <Header />
        </div>

        {/* Page */}

        <div className="my-profile-content">
          <div className="my-profile-inner">
            {/* Profile */}

            <ProfileMain />

            {/* Friends / Photos / Feed */}

            <div className="my-profile-body">
              {/* Left */}

              <aside className="my-profile-left">
                <FriendsList />

                <PhotosGrid />
              </aside>

              {/* Feed */}

              <section className="my-profile-feed">
                <ProfileFeed />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MyProfileLayout;
