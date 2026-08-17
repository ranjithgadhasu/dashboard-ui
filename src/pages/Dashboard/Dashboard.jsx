import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import Download from "../../assets/icons/Download.png";
import StatCard from "../../components/dashboard/StatCard";
import StatisticsChart from "../../components/dashboard/StatisticsChart";
import AnalyticsChart from "../../components/dashboard/AnalyticsChart";
import SalesCard from "../../components/dashboard/SalesCard";
import MirroredBarChart from "../../components/dashboard/MirroredBarChart";
import RecentOrders from "../../components/dashboard/RecentOrders";
import Transactions from "../../components/dashboard/Transactions";




const options = ["Last 7 Days", "Last 30 Days", "Last 12 Months"];

const Dashboard = () => {
  const [selected, setSelected] = useState("Last 7 Days");
  const [open, setOpen] = useState(false);

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-[28px] font-medium text-[#3F434A]">Overview</h1>

        <div className="flex items-center gap-4">
          {/* Download Button */}

          <button className="flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-sm hover:bg-gray-50">
            <img src={Download} alt="Download" className="h-5 w-5" />
          </button>

          {/* Custom Dropdown */}

          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setOpen(!open)}
              className="flex w-44 items-center justify-between rounded-xl bg-white px-8 py-3 text-sm font-medium text-[#3F434A] shadow-sm"
            >
              {selected}
              <ChevronDown
                size={18}
                className={`text-[#8A9099] transition ${
                  open ? "rotate-180" : ""
                }`}
              />
            </button>
            {open && (
              <div className="absolute right-0 mt-2 w-44 overflow-hidden rounded-xl bg-white shadow-lg border border-gray-200 z-50">
                {options.map((option) => (
                  <button
                    key={option}
                    onClick={() => {
                      setSelected(option);
                      setOpen(false);
                    }}
                    className="w-full px-4 py-3 text-left text-sm text-[#3F434A] transition-colors duration-200 hover:bg-[#B9EB8E] hover:text-[#1E1E1E]"
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
     <div className="mt-8">
    <StatCard />
</div>

<div className="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-2">
  <StatisticsChart />
  <AnalyticsChart />
</div>
<div className="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-12">
  <div className="xl:col-span-4">
    <SalesCard />
  </div>

  <div className="xl:col-span-8">
    <MirroredBarChart />
  </div>
</div>
<div className="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-12">

    <div className="xl:col-span-8">
        <RecentOrders />
    </div>

    <div className="xl:col-span-4">
        <Transactions />
    </div>

</div>

    </>
  );
};

export default Dashboard;
