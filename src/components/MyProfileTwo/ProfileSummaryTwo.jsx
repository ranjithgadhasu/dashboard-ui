import { profileData } from "./myProfileTwoData";

const ProfileSummaryTwo = () => {
  return (
    <div className="rounded-[4px] border border-[#e7e7e7] bg-white px-4 py-4">

      {/* =====================================================
          PROFILE IMAGE
      ====================================================== */}

      <div className="flex justify-center">

        <img
          src={profileData.profileImage}
          alt={profileData.name}
          className="h-[62px] w-[62px] rounded-full object-cover"
        />

      </div>


      {/* =====================================================
          NAME
      ====================================================== */}

      <div className="mt-3 text-center">

        <h2 className="text-[10px] font-medium text-[#444]">
          {profileData.name}
        </h2>

        <p className="mt-1 text-[7px] text-[#999]">
          {profileData.role}
        </p>

      </div>


      {/* =====================================================
          INFO
      ====================================================== */}

      <div className="mt-5">

        <h3 className="text-[7px] font-semibold uppercase text-[#555]">
          Info
        </h3>


        <div className="mt-3 space-y-3">

          {/* Email */}
          <div>

            <p className="text-[6px] uppercase text-[#aaa]">
              Email
            </p>

            <p className="mt-1 break-all text-[7px] text-[#555]">
              {profileData.email}
            </p>

          </div>


          {/* Phone */}
          <div>

            <p className="text-[6px] uppercase text-[#aaa]">
              Phone
            </p>

            <p className="mt-1 text-[7px] text-[#555]">
              {profileData.phone}
            </p>

          </div>


          {/* Birthday */}
          <div>

            <p className="text-[6px] uppercase text-[#aaa]">
              Birthday
            </p>

            <p className="mt-1 text-[7px] text-[#555]">
              {profileData.birthday}
            </p>

          </div>


          {/* Location */}
          <div>

            <p className="text-[6px] uppercase text-[#aaa]">
              Location
            </p>

            <p className="mt-1 text-[7px] text-[#555]">
              {profileData.location}
            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default ProfileSummaryTwo;