import { MoreVertical } from "lucide-react";

import CalendarButton from "../common/CalendarButton";
import { newFollowersData } from "../../data/newFollowersData";

const NewFollowers = () => {
  return (
    <div className="rounded-[24px] border border-[#E9EEF5] bg-white p-8 new-followers-card">

      {/* Header */}

      <div className="mb-8 flex items-center justify-between new-followers-header">

        <h2 className="text-[20px] font-medium text-[#3F434A]">
          New Followers
        </h2>

        <CalendarButton />

      </div>

      {/* Followers List */}

      <div className="space-y-6 new-followers-list">

        {newFollowersData.map((item) => (

          <div
            key={item.id}
            className="flex items-center justify-between new-follower-item"
          >

            {/* Left */}

            <div className="flex items-center gap-5 new-follower-left">

              <img
                src={item.image}
                alt={item.name}
                className="h-12 w-12 rounded-full object-cover new-follower-image"
              />

              <div className="new-follower-info">

                <h3 className="text-[14px] font-normal leading-none text-[#3F434A]">
                  {item.name}
                </h3>

                <p className="mt-2 text-[12px] font-normal text-[#8A9099]">
                  {item.role}
                </p>

              </div>

            </div>

            {/* Right */}

            <div className="flex items-center gap-6 new-follower-actions">

              <button
                className="
                  h-[40px]
                  w-[108px]
                  rounded-2xl
                  bg-[#EEF9F1]
                  text-[14px]
                  font-medium
                  text-[#21943A]
                  transition-all
                  duration-200
                  hover:bg-[#21943A]
                  hover:text-white
                  new-follower-follow-button
                "
              >
                Follow
              </button>

              <button className="rounded-full p-1 hover:bg-[#F5F7FA] new-follower-more">
                <MoreVertical
                  size={20}
                  className="text-[#8A9099]"
                />
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
};

export default NewFollowers;