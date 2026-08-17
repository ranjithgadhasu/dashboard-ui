import Google  from "../../../assets/images/Google.png";
import InfoCard from "./InfoCard";

const SearchEngineCard = () => {
  return (
    <InfoCard
      icon={Google}
      title="Top Search Engine"
      name="Google"
      sessions="3100"
    />
  );
};

export default SearchEngineCard;