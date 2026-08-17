import { MoreHorizontal } from "lucide-react";
import { FaBolt } from "react-icons/fa";

import OnlineUsersChart from "./OnlineUsersChart";
import OnlineUsersLegend from "./OnlineUsersLegend";
import { onlineUsersData } from "./onlineUsersData";
import "./onlineusers.css"

const OnlineUsers = () => {
  return (
    <div className="mt-3 rounded-[20px] border border-[#E9EEF5] bg-white p-8 online-users-card">

      {/* Header */}

      <div className="flex items-center justify-between online-users-header">

        <h2 className="text-[20px] font-medium text-[#3F434A]">
          Online Users
        </h2>

        <MoreHorizontal
          size={22}
          className="text-[#8A9099]"
        />

      </div>

      {/* Chart */}

      <div className="mt-5 flex items-center justify-between online-users-chart-section">

        <OnlineUsersChart />

        <OnlineUsersLegend />

      </div>

      {/* Lightning */}

      <div className="mt-8 flex justify-center online-users-bolt">

        <FaBolt
          className="text-[#FFC83D]"
          size={22}
        />

      </div>

      {/* Bottom */}

      <div className="mt-2 grid grid-cols-3 online-users-stats">

        {onlineUsersData.map((item, index) => (

          <div
            key={item.name}
            className={`text-center online-users-stat ${
              index !== 2 ? "border-r border-[#EEF2F6]" : ""
            }`}
          >
            <h3 className="text-[28px] font-medium text-[#3F434A]">
              {item.users}
            </h3>

            <p className="text-[14px] font-normal text-[#8A9099]">
              {item.name}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
};

export default OnlineUsers;