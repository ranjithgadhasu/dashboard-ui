import Australia from "../../../assets/images/Australia.png";
import InfoCard from "./InfoCard";

const CountryCard = () => {
  return (
    <InfoCard
      icon={Australia}
      title="Top Country"
      name="Australia"
      sessions="4550"
    />
  );
};

export default CountryCard;