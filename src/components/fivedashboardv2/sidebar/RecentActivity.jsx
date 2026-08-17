import { MoreHorizontal } from "lucide-react";
import { recentActivityData } from "./recentActivityData";

const RecentActivity = () => {
  return (
    <div className="flex h-full flex-col border border-[#E9EEF5] bg-white">

      {/* Header */}

      <div className="flex items-center justify-between border-[#EEF2F6] px-6 py-5">

        <h2 className="text-[28px] font-medium text-[#3F434A]">
          Recent Activity
        </h2>

        <MoreHorizontal
          size={20}
          className="text-[#8A9099]"
        />

      </div>

      {/* Body */}

      <div className="flex-1 px-6 py-1">

        {recentActivityData.map((section) => (

          <div
            key={section.date}
            className="mb-5 text-[15px] font-normal"
          >

            {/* Date */}

            <h4 className="mb-5 text-[15px] font-normal text-[#8A9099]">
              {section.date}
            </h4>

            {/* Items */}

            {section.items.map((item, index) => (

              <div
                key={item.id}
                className="relative flex gap-4 pb-5"
              >

                {/* Timeline */}

                {index !== section.items.length - 1 && (
                  <span className="absolute left-[18px] top-10 h-[48px] w-px bg-[#E9EEF5]" />
                )}

                {/* Avatar */}

                <img
                  src={item.image}
                  alt={item.name}
                  className="h-9 w-9 rounded-full object-cover"
                />

                {/* Content */}

                <div className="flex-1">

                  <h5 className="text-[14px] font-normal text-[#8A9099]">
                    {item.name}
                  </h5>

                  <p className="text-[14px] font-normal leading-6 text-[#3F434A]">

                    {item.action}{" "}

                    <span className="font-medium text-[#22963F]">
                      {item.project}
                    </span>

                  </p>

                  <span className="text-[12px] font-normal text-[#B0B7C3]">
                    {item.time}
                  </span>

                </div>

              </div>

            ))}

          </div>

        ))}

      </div>

    </div>
  );
};

export default RecentActivity;