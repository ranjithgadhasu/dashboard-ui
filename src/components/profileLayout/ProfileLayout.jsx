import { Outlet } from "react-router-dom";
import ProfileHeader from "./ProfileHeader";
import ProfileSidebar from "./ProfileSidebar";
import "./profileLayout.css"


const ProfileLayout = () => {
  return (
    <div className="flex h-screen  profile-layout">

      <ProfileSidebar />

      <div className="flex-1 flex flex-col profile-main">

        <ProfileHeader />

        <main className="flex-1 overflow-visible bg-[#F7F8FA] p-6 profile-content">
          <Outlet />
        </main>

      </div>
 

    </div>
  );
};

export default ProfileLayout;