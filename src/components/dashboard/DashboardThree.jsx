//import { useState } from "react";

//import DashboardHeader from "../dashboardthree/DashboardHeader";
//import NotificationDrawer from "../dashboardthree/notifications/NotificationDrawer";

import SummaryCards from "../dashboardthree/summarycards/SummaryCards";
import StatisticsChart from "../dashboardthree/Statistics/StatisticsChart";
import BalanceCard from "../dashboardthree/Balance/BalanceCard";
import MyCards from "../dashboardthree/MyCards/MyCards";
import Transactions from "../dashboardthree/Transactions/Transactions";

const DashboardThree = () => {
//  const [showNotification, setShowNotification] = useState(false);

  return (
    <div className="relative space-y-6">
      {/*<DashboardHeader
        onNotificationClick={() =>
          setShowNotification(!showNotification)
        }
      />
      <NotificationDrawer
        show={showNotification}
        onClose={() => setShowNotification(false)}
      />*/}

      <SummaryCards />

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-8">
          <StatisticsChart />
        </div>

        <div className="col-span-4">
          <BalanceCard />
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-8">
          <MyCards />
        </div>

        <div className="col-span-4">
          <Transactions />
        </div>
      </div>

    </div>
  );
};

export default DashboardThree;