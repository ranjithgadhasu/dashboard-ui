import SummaryCard from "./SummaryCard";
import { summaryData } from "./summaryData";
import "./summary.css"

const SummaryCards = () => {
  return (
    <div className="grid grid-cols-3 gap-0.5 summary-cards-one-by-one">

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