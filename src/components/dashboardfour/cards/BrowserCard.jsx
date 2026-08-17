import Chrome from "../../../assets/images/Chrome.png";
import InfoCard from "./InfoCard";

const BrowserCard = () => {
  return (
    <InfoCard
      icon={Chrome}
      title="Top Browser"
      name="Chrome"
      sessions="2500"
    />
  );
};

export default BrowserCard;