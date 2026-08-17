import { profileData, friends, photos } from "./myProfileTwoData";
import "./profilesidebartwo.css";

const ProfileSidebarTwo = () => {
  return (
    <aside className="profile-sidebar-two ml-15">

      {/* PROFILE */}

      <div className="flex flex-col items-center">

        <div className="relative">

          <img
            src={profileData.profileImage}
            alt={profileData.name}
            className="h-[150px] w-[150px] rounded-full mb-5 object-cover"
          />

          <span className="absolute bottom-[60px] right-[1px] h-[9px] w-[9px] rounded-full border-[2px] border-white bg-[#58a447]" />

        </div>

        <h2 className="mt-[8px] text-[24px] font-medium leading-[28px] text-[#444]">
          {profileData.name}
        </h2>

        <p className="mt-[8px] text-[14px] font-normal leading-[20px] text-[#999]">
          {profileData.role}
        </p>

      </div>


      {/* DIVIDER */}

      <div className="my-5 h-px bg-[#eeeeee]" />


      {/* INFO */}

      <section className="profile-sidebar-section">

        <h3 className="text-[15px] font-medium uppercase text-[#555]">
          Info
        </h3>

        <div className="mt-5 space-y-5">

          <div>
            <p className="text-[12px] font-medium uppercase text-[#aaa]">
              Email
            </p>

            <p className="mt-2 break-all text-[14px] text-[#555]">
              {profileData.email}
            </p>
          </div>

          <div>
            <p className="text-[12px] font-medium uppercase text-[#aaa]">
              Phone
            </p>

            <p className="mt-2 text-[14px] text-[#555]">
              {profileData.phone}
            </p>
          </div>

          <div>
            <p className="text-[12px] font-medium uppercase text-[#aaa]">
              Birthday
            </p>

            <p className="mt-2 text-[14px] text-[#555]">
              {profileData.birthday}
            </p>
          </div>

          <div>
            <p className="text-[12px] font-medium uppercase text-[#aaa]">
              Location
            </p>

            <p className="mt-2 text-[14px] text-[#555]">
              {profileData.location}
            </p>
          </div>

        </div>

      </section>


      {/* DIVIDER */}

      <div className="my-6 h-px bg-[#eeeeee]" />


      {/* FRIENDS */}

      <section className="profile-sidebar-section">

        <h3 className="text-[15px] font-medium uppercase text-[#555]">
          Friends
        </h3>

        <div className="mt-5 space-y-3">

          {friends.map((friend) => (
            <div
              key={friend.id}
              className="flex items-center gap-3"
            >

              <div className="relative shrink-0">

                <img
                  src={friend.image}
                  alt={friend.name}
                  className="h-[40px] w-[40px] rounded-full object-cover"
                />

                {friend.online && (
                  <span className="absolute bottom-0 right-0 h-[7px] w-[7px] rounded-full border border-white bg-[#58a447]" />
                )}

              </div>

              <div className="min-w-0">

                <p className="truncate text-[14px] text-[#444]">
                  {friend.name}
                </p>

                <p className="truncate text-[12px] text-[#aaa]">
                  {friend.role}
                </p>

              </div>

            </div>
          ))}

        </div>

      </section>


      {/* DIVIDER */}

      <div className="my-6 h-px bg-[#eeeeee]" />


      {/* PHOTOS */}

      <section className="profile-sidebar-section">

        <h3 className="text-[15px] font-medium uppercase text-[#555]">
          Photos
        </h3>

        <div className="mt-5 grid grid-cols-3 gap-2">

          {photos.map((photo) => (
            <img
              key={photo.id}
              src={photo.image}
              alt={photo.title}
              className="aspect-square w-full rounded-[5px] object-cover"
            />
          ))}

        </div>

      </section>

    </aside>
  );
};

export default ProfileSidebarTwo;