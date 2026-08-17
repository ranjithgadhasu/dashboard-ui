import { Settings } from "lucide-react";
import ProfileImage from "../../../assets/images/ProfileDash.png"; 
import "./sidebar.css"

const ProfileCard = () => {
  return (
    <div className="flex items-center justify-between border-[#EEF2F6] bg-white px-6 py-5 profile-card-mobile
">

      {/* Left */}

      <div className="flex items-center gap-5 profile-card-left">

        {/* Profile */}

        <div className="relative profile-card-image-wrapper">

          <img
            src={ProfileImage}
            alt="Profile"
            className="h-[68px] w-[68px] rounded-full object-cover"
          />

          {/* Notification */}

          <span className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-[#FF6B6B] text-[13px] font-semibold text-white profile-card-notification">
            8
          </span>

        </div>

        {/* Name */}

        <div className="profile-card-info">

          <h2 className="text-[15px] font-normal text-[#3F434A]">
            ArtTemplate
          </h2>

          <p className="mt-2 text-[15px] font-normal text-[#8A9099]">
            example@mail.com
          </p>

        </div>

      </div>

      {/* Settings */}

      <button className="transition hover:rotate-90 profile-card-settings">

        <Settings
          size={19.2}
          strokeWidth={2}
          className="text-[#595F69] cursor-pointer"
        />

      </button>

    </div>
  );
};

export default ProfileCard;