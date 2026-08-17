import { friends } from "./myProfileTwoData";

const FriendsListTwo = () => {
  return (
    <div className="rounded-[4px] border border-[#e7e7e7] bg-white px-3 py-3">

      {/* Header */}

      <h3 className="text-[7px] font-semibold uppercase text-[#555]">
        Friends
      </h3>


      {/* Friends */}

      <div className="mt-3 space-y-[9px]">

        {friends.map((friend) => (

          <div
            key={friend.id}
            className="flex items-center gap-2"
          >

            {/* Avatar */}

            <div className="relative shrink-0">

              <img
                src={friend.image}
                alt={friend.name}
                className="h-[23px] w-[23px] rounded-full object-cover"
              />

              {friend.online && (
                <span className="absolute bottom-0 right-0 h-[5px] w-[5px] rounded-full border border-white bg-[#58a447]" />
              )}

            </div>


            {/* Details */}

            <div className="min-w-0">

              <p className="truncate text-[7px] font-medium text-[#444]">
                {friend.name}
              </p>

              <p className="truncate text-[5.5px] text-[#aaa]">
                {friend.role}
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
};

export default FriendsListTwo;