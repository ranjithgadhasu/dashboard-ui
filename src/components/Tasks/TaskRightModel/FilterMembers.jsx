import { useState } from "react";
import { Search, X } from "lucide-react";

import FavoriteImage  from "../../../assets/images/FavoriteImage.png"; // Change path if needed

const FilterMembers = () => {
  const [member, setMember] = useState({
    name: "Shane Black",
    avatar: FavoriteImage,
  });

  return (
    <div>

      {/* Title */}
      <h4 className="mb-1 text-[14px] font-normal text-[#98A2B3]">
        Members
      </h4>

      {/* Search Box */}
      <div
        className="
          flex
          h-[40px]
          w-[343px]
          items-center
          justify-between
          rounded-xl
          border
          border-[#E4E7EC]
          bg-white
          px-3
          py-1
        "
      >
        {/* Selected Member */}
        <div className="flex items-center">

          {member && (
            <div
              className="
                flex
                h-[32px]
                items-center
                gap-2
                rounded-lg
                border
                border-[#E4E7EC]
                bg-[#F8F9FB]
                px-2
                py-1
              "
            >
              <img
                src={member.avatar}
                alt={member.name}
                className="h-6 w-6 rounded-full object-cover"
              />

              <span className="flex text-[14px] font-normal text-[#344054]">
                {member.name}
              </span>

              <button
                type="button"
                onClick={() => setMember(null)}
              >
                <X
                  size={14}
                  className="text-[#98A2B3]"
                />
              </button>

            </div>
          )}

        </div>

        {/* Search Icon */}
        <button
          type="button"
          className="rounded-md p-1 hover:bg-[#F3F4F6]"
        >
          <Search
            size={18}
            className="text-[#98A2B3]"
          />
        </button>

      </div>

    </div>
  );
};

export default FilterMembers;