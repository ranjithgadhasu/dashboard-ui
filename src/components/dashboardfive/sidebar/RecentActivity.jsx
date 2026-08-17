import { MoreHorizontal } from "lucide-react";
import { recentActivityData } from "./recentActivityData";
import "./sidebar.css"

const RecentActivity = () => {
  return (
    <div className=" rounded-b-[20px] bg-white px-6 py-1 recent-activity">

      {/* Header */}

      <div className="mb-2 flex items-center justify-between">

        <h2 className="text-[28px] font-medium text-[#3F434A]">
          Recent Activity
        </h2>

        <MoreHorizontal
          size={22}
          className="text-[#8A9099]"
        />

      </div>

      <div className="max-h-full pr-2">

        {recentActivityData.map((section) => (

          <div key={section.date} className="mb-8">

            {/* Date */}

            <h4 className="mb-4 text-[13px] font-medium text-[#A0A6B2]">

              {section.date}

            </h4>

            {section.activities.map((item, index) => (

              <div
                key={index}
                className="mb-5 flex items-start"
              >

                {/* Time */}

                <div className="w-[41px] pt-1 text-[18px] font-medium text-[#3F434A]">

                  {item.time}

                </div>

                {/* Timeline */}

                <div className="mx-4 flex justify-center">

                  <div
                    className="w-[3px] rounded-full"
                    style={{
                      background: item.color,
                      height: "46px",
                    }}
                  />

                </div>

                {/* Content */}

                <div>

                  <h5 className="text-[14px] font-normal text-[#8A9099]">

                    {item.name}

                  </h5>

                  <p className="mt-1 text-[15px] font-normal text-[#3F434A]">

                    {item.action}{" "}

                    <span className="font-medium text-[#29A34A]">

                      {item.project}

                    </span>

                  </p>

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