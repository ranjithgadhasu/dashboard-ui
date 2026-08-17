import { Plus } from "lucide-react";
import ProfileDash from "../../assets/images/ProfileDash.png";

const users = [
  {
    id: 1,
    image: ProfileDash,
  },
  {
    id: 2,
    image: ProfileDash,
  },
  {
    id: 3,
    image: ProfileDash,
    badge: 8,
  },
  {
    id: 4,
    image: ProfileDash,
    active: true,
  },
  {
    id: 5,
    image: ProfileDash,
  },
  {
    id: 6,
    image: ProfileDash,
  },
  {
    id: 7,
    image: ProfileDash,
    badge: 4,
  },
];

const ChatList = () => {
  return (
    <div className="flex h-full w-[78px] flex-col items-center border-l border-[#EEF2F6] bg-white py-6">

      <div className="flex-1 space-y-5 overflow-y-auto">

        {users.map((user) => (
          <div key={user.id} className="relative flex justify-center">

            <img
              src={user.image}
              alt=""
              className={`h-12 w-12 rounded-full object-cover transition
                ${
                  user.active
                    ? "ring-4 ring-white shadow-xl"
                    : ""
                }`}
            />

            {user.badge && (
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#FF6B6B] text-[10px] font-semibold text-white">
                {user.badge}
              </span>
            )}

          </div>
        ))}

      </div>

      {/* Add Button */}

      <button className="mt-6 flex h-11 w-11 items-center justify-center rounded-full border-2 border-dashed border-[#6BCB77] text-[#21943A] transition hover:bg-[#EEF9F1]">

        <Plus size={20} />

      </button>

    </div>
  );
};

export default ChatList;