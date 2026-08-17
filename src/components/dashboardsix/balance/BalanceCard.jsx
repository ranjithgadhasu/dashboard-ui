import { useState } from "react";
import { ArrowUp, ArrowDown } from "lucide-react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Calendar from "../../../assets/icons/Calendar.png"; // Keep your relative asset path
import BalanceChart from "./BalanceChart";
import { balanceSummary } from "./balanceData";
import "./balance.css"

const BalanceCard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(balanceSummary.dateRange);

  const dateOptions = [
    "19 Aug – 25 Aug",
    "12 Aug – 18 Aug",
    "05 Aug – 11 Aug",
  ];

  return (
    <div className="flex h-[402px] ml-[-50px] flex-col rounded-[20px] border border-[#E9EEF5] bg-white p-7 w-[780px] max-w-3xl balance-card">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between balance-card-header">
        <h2 className="text-[20px] font-medium text-[#1A1D1F]">
          Balance
        </h2>
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2.5 rounded-[12px] border border-[#E9EEF5] bg-white px-4 py-2.5"
          >
            <img src={Calendar} alt="" className="h-4 w-4 object-contain" />
            <span className="text-[14px] font-medium text-[#6F767E]">
              {selectedDate}
            </span>
            <MdOutlineKeyboardArrowDown
              size={18}
              className={`text-[#8A9099] transition ${isOpen ? "rotate-180" : ""}`}
            />
          </button>

          {isOpen && (
            <div className="absolute right-0 top-[110%] z-50 w-[180px] overflow-hidden rounded-xl border border-[#E9EEF5] bg-white shadow-lg">
              {dateOptions.map((date) => (
                <button
                  key={date}
                  onClick={() => {
                    setSelectedDate(date);
                    setIsOpen(false);
                  }}
                  className="block w-full px-4 py-3 text-left text-[14px] text-[#6F767E] hover:bg-[#F7F8FA]"
                >
                  {date}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Income & Spending Indicators */}
      <div className="mb-6 flex items-center gap-10 balance-card-indicators">
        {/* Income Card Segment */}
        <div className="flex items-center gap-3.5">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#EEF9F1]">
            <ArrowUp size={20} className="text-[#34C759]" />
          </div>
          <div>
            <h3 className="text-[18px] font-normal text-[#1A1D1F] leading-tight">
              {balanceSummary.income}
            </h3>
            <p className="text-[13px] text-[#9A9FA5]">Income</p>
          </div>
        </div>

        {/* Spending Card Segment */}
        <div className="flex items-center gap-3.5">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#EBF3FE]">
            <ArrowDown size={20} className="text-[#2F80ED]" />
          </div>
          <div>
            <h3 className="text-[18px] font-normal text-[#1A1D1F] leading-tight">
              {balanceSummary.spending}
            </h3>
            <p className="text-[13px] text-[#9A9FA5]">Spending</p>
          </div>
        </div>
      </div>

      {/* Dynamic Graph Canvas Wrapper */}
      <div className="flex-1 min-h-[220px] balance-card-chart">
        <BalanceChart />
      </div>
    </div>
  );
};

export default BalanceCard;