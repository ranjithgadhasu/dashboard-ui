import DashboardHeader from "./DashboardHeader";

import IncomeCard from "./income/IncomeCard";

import BalanceCard from "./balance/BalanceCard";
import Payments from "./payments/Payments";

import ProfileCard from "../dashboardfive/sidebar/ProfileCard";

import Cards from "./cards/Cards";
import Contacts from "./contacts/Contacts";
import TransactionsSix from "./transactions/TransactionsSix";
import "./dashboard.css";

const DashboardSix = () => {
  return (
    <div className="dashboard-six-desktop grid grid-cols-12 gap-6">

      {/* Left Section */}

      <div className="col-span-8 space-y-6 dashboard-six-left">

        {/* Header */}

        <div className="dashboard-six-header">
          <DashboardHeader />
        </div>

        {/* Income + Balance */}

        <div className="grid grid-cols-12 gap-6 dashboard-six-income-balance">

          <div className="col-span-3 dashboard-six-income">
            <IncomeCard />
          </div>

          <div className="col-span-9 dashboard-six-balance">
            <BalanceCard />
          </div>

        </div>

        {/* Transactions + Payments */}

        <div className="grid grid-cols-12 gap-6 dashboard-six-transactions-payments">

          <div className="col-span-6 dashboard-six-transactions">
            <TransactionsSix />
          </div>

          <div className="col-span-6 dashboard-six-payments">
            <Payments />
          </div>

        </div>

      </div>

      {/* Right Sidebar */}

      <div className="col-span-4 space-y-6 bg-white dashboard-six-sidebar">

        {/* Reuse Dashboard #5 Profile */}

          <div className="dashboard-six-profile">
          <ProfileCard />
        </div>

        <div className="dashboard-six-cards">
          <Cards />
        </div>

           <div className="dashboard-six-contacts">
          <Contacts />
        </div>

      </div>

    </div>
  );
};

export default DashboardSix;