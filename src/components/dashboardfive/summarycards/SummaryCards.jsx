import SummaryCard from "./SummaryCard";
import { summaryData } from "./summaryData";
import "./summarycards.css"

const SummaryCards = () => {
  return (
    <div className="grid grid-cols-2 gap-6 summary-cards-mobile">

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