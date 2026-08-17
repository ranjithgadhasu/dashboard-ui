import SummaryCard from "./SummaryCard";
import { summaryData } from "./summaryData";
import "./summarycards.css"

const SummaryCards = () => {
  return (
    <div className="flex h-full flex-col justify-between gap-6 summary-cards-column">

      {summaryData.map((item) => (
        <SummaryCard
          key={item.id}
          item={item}
        />
      ))}

    </div>
  );
};

export default SummaryCards;