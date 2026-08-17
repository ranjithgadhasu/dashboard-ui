import { ArrowUp, ArrowDown } from "lucide-react";
import { profileCardsData } from "../../data/profileCardsData";

const ProfileCards = () => {
  return (
    <div className="grid grid-cols-4 gap-6 profile-cards">

      {profileCardsData.map((card) => (

        <div
          key={card.id}
          className="rounded-2xl border border-[#E9EEF5] bg-white px-6 py-5 profile-card"
        >

          <div className="flex items-center gap-4 profile-card-content">

            {/* Icon */}

            <div
              className={`flex h-[40px] w-[40px] items-center justify-center rounded-2xl profile-card-icon ${
                card.trend === "up"
                  ? "bg-[#EEF9F1]"
                  : "bg-[#EEF9F7]"
              }`}
            >
              {card.trend === "up" ? (
                <ArrowUp
                  size={24}
                  className="text-[#21943A]"
                />
              ) : (
                <ArrowDown
                  size={24}
                  className="text-[#45C9B2]"
                />
              )}
            </div>

            {/* Content */}

            <div className="flex-1 profile-card-info">

              <p className="text-[14px] font-normal text-[#8A9099]">
                {card.title}
              </p>

              <div className="mt-1 flex items-end gap-2 profile-card-value">

                <h2 className="text-[25px] font-medium leading-none text-[#3F434A]">
                  {card.value}
                </h2>

                <span
                  className={`mb-1 text-[15px] font-normal ${
                    card.trend === "up"
                      ? "text-[#49C96D]"
                      : "text-[#FD7972]"
                  }`}
                >
                  {card.percentage}
                </span>

              </div>

            </div>

          </div>

        </div>

      ))}

    </div>
  );
};

export default ProfileCards;