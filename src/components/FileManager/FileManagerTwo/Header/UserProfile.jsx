import { ChevronDown, Bell } from "lucide-react";

import ProfileDash from "../../../../assets/images/ProfileDash.png"; 

const UserProfile = ({
  name = "ArtTemplate",
  profileImage = ProfileDash,
}) => {
  return (
    <div className="flex items-center gap-5">

      {/* Notification */}

      <button
        className="
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-full
          transition
          hover:bg-[#F5F7FA]
        "
      >
        <Bell
          size={18}
          className="text-[#5E6673]"
        />
      </button>

      {/* Profile */}

      <button
        className="
          flex
          items-center
          gap-3
          rounded-xl
          px-2
          py-1.5
          transition
          hover:bg-[#F8FAFC]
        "
      >
        <img
          src={profileImage}
          alt={name}
          className="
            h-10
            w-10
            rounded-full
            object-cover
          "
        />

        <span
          className="
            text-[14px]
            font-medium
            text-[#37393D]
          "
        >
          {name}
        </span>

        <ChevronDown
          size={16}
          className="text-[#98A2B3]"
        />
      </button>

    </div>
  );
};

export default UserProfile;