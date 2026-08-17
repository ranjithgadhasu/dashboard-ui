import MacOs from "../../../assets/images/MacOs.png";
import InfoCard from "./InfoCard";

const PlatformCard = () => {
  return (
    <InfoCard
      icon={MacOs}
      title="Top Platform"
      name="Mac OS"
      sessions="2200"
    />
  );
};

export default PlatformCard;