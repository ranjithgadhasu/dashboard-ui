import BrowserCard from "../dashboardfour/cards/BrowserCard"
import CountryCard from "../dashboardfour/cards/CountryCard"
import PlatformCard from "../dashboardfour/cards/PlatformCard"
import SearchEngineCard from "../dashboardfour/cards/SearchEngineCard"
import OnlineUsers from "../dashboardfour/onlineusers/OnlineUsers"
import DashboardHeader from "../dashboardthree/DashboardHeader"
import SummaryCards from "../dashboardfour/summarycards/SummaryCards"
import AnalyticsChart from "./AnalyticsChart"
import StatisticsChart from "../dashboardfour//charts/StatisticsChart"
import "./dashboardfour.css"


const DashboardFour = () => {
  return (
    <>
    <DashboardHeader />

<SummaryCards />

<div className="grid grid-cols-12 gap-6">
    <div className="col-span-6 ">
        <StatisticsChart />
    </div>

    <div className="col-span-6 mt-15">
        <AnalyticsChart />
    </div>
</div>

<div className="mt-13 grid grid-cols-12 gap-6 dashboard-four-cards">

    <div className="col-span-4 dashboard-four-card browser-card">
        <BrowserCard />
    </div>

    <div className="col-span-4 dashboard-four-card platform-card">
        <PlatformCard />
    </div>

    <div className="col-span-4 row-span-2 dashboard-four-online-users">
        <OnlineUsers />
    </div>

    <div className="col-span-4 dashboard-four-card country-card">
        <CountryCard />
    </div>

    <div className="col-span-4 dashboard-four-card search-engine-card">
        <SearchEngineCard />
    </div>

</div>
    </>
  )
}

export default DashboardFour