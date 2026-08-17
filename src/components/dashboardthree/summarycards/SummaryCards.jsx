import SummaryCard from "../summarycards/SummaryCard";
import { summaryCardsData } from "../summarycards/summaryCardsData";
import "./dashboardthree.css"

const SummaryCards = () => {
  return (
    <div className="flex rounded-[16px] border border-[#E9EEF5] bg-white py-6 shadow-sm summary-cards">

      {summaryCardsData.map((item, index) => (
        <div
          key={item.title}
          className={`relative flex-1 px-8 summary-card-item  ${
            index !== summaryCardsData.length - 1
              ? "after:absolute after:right-0 after:top-2 after:h-[72px] after:w-px after:bg-[#E9EEF5]"
              : ""
          }`}
        >
          <SummaryCard item={item} />
        </div>
      ))}
    </div>
  );
};
export default SummaryCards;